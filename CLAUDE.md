# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

MapBiomas User Toolkit: standalone Google Earth Engine (GEE) Code Editor scripts that let users view and download MapBiomas data (land use/land cover, fire, water, mining, pasture, soil, irrigation, degradation, deforestation/regeneration, mosaics) clipped to a vector of their choosing. Users open them from the GEE repo `users/mapbiomas/user-toolkit` (see README.md).

## Running / testing

There is no build, lint, or package manager. The only tests are the Node snapshot tests in `tests/`. The `.js` files are **GEE Code Editor scripts, not Node modules**: they use the injected globals `ee`, `ui`, `Map`, `Export`, `print`, and load shared modules with GEE's `require('users/<account>/<repo>:<path>')`. They can't run locally. To test a change, paste the script into https://code.earthengine.google.com and run it there. Check syntax locally with `node --check <file>.js`. Before publishing, run `node tests/snapshot.js`. It walks the panel flow of every toolkit with mocked `ee`/`ui` and compares the result with `tests/snapshots/` (see `tests/README.md`), and do the Code Editor round in `docs/code-editor-checklist.md`, which the mocks can't cover: rendering, legends and real export tasks. The refactoring of 2026-09 is done; `docs/refactoring-plan.md` records what was decided, what was left out and why. Data maintenance tooling (asset inventory, territory, collection and legend generation, `check_options.js`, `check_links.py`) is **not in this public repo**. It lives in the private sibling repo `mapbiomas-pipeline`, under `toolkit/` (see its README). Don't add it back here.

Keep the code ES5-compatible (use `var` and `function`, no arrow functions, `let`/`const`, or template literals). That's the style every script uses, and the GEE Code Editor has traditionally required it.

External modules the scripts depend on (these live in GEE, not in this repo): `users/mapbiomas/modules:Palettes.js`, `users/mapbiomas/modules:Logos.js`, and `users/workspaceipam/packages:mapbiomas-toolkit/...` (fire palettes and logos, used by fire, soil and degradation). The map styles and the legend panel used to come from the personal account `users/joaovsiqueira1/packages`; they are now `core/v1/basemaps.js` and `core/v1/legend.js`.

## Source of truth

Users run the scripts from the GEE git repo `https://earthengine.googlesource.com/users/mapbiomas/user-toolkit`. It holds only the `.js` scripts and can also be edited directly in the Code Editor, which makes auto-generated "Updated <file> (added N lines…)" commits. Its history is unrelated to this repo's, so it can't be a remote of this repo. `README.md`, `LICENSE`, `ancillary/`, `legend-colors/`, `misc/`, `prototype/`, and `mapbiomas-user-toolkit-mosaics.js` exist only here.

A clone of the GEE repo is kept next to this one, in `../user-toolkit-gee`. Git authenticates with `~/.gitcookies` (generate it at https://earthengine.googlesource.com/new-password). Pass `-c credential.helper=` so git doesn't hang waiting for a password prompt.

- **Before editing here:** run `git fetch` in `../user-toolkit-gee` and compare its `.js` files with this repo's. If someone edited a script in the Code Editor, bring that change over first.
- **To publish:** commit and push here (GitHub). Then, in `../user-toolkit-gee`, `git fetch` and confirm `HEAD == origin/master`, so no Code Editor edits get overwritten. Copy over the `.js` files that already exist there (don't add `mosaics.js`), commit with a message that cites the GitHub commit hash, and `git -c credential.helper= push origin master`.

## Shared code: `core/`

The engine the nine scripts used to carry a copy of each lives in `core/v1/`, loaded with GEE's require: `require('users/mapbiomas/user-toolkit:core/v1/area.js')`. So `core/` has to be pushed to the GEE repository too, and **before** the scripts that require it, or they break for everyone. `core/` is versioned by folder: a breaking change goes to `core/v2/` and each toolkit moves over once tested.

| Module | What it holds |
|---|---|
| `area.js` | area per class for the CSV. `areaColumn` is `area_km2` everywhere; the optional `unit` column is no longer used by any toolkit |
| `naming.js` | `formatName`, `tableShortName` (layer and file names) |
| `layers.js` | the period checkbox list, removing a layer by name |
| `territory.js` | the tables in the user's MAPBIOMAS folder, and `highlight()` |
| `export.js` | file names, the Drive folder, the GeoTIFF settings, the area CSV columns, and the region with buffer |
| `panel.js` | the property and feature selects, filled from the server |
| `basemaps.js`, `legend.js` | map styles and the legend panel, out of a personal account |

Soil keeps its own `Area`, because it averages a continuous value instead of summing areas.

`tests/harness.js` resolves these requires to the local files, so the snapshots keep covering them. So do `apply_options.js` and `check_options.js` in the pipeline — if you add a tool that loads a script, make it resolve them too, or `App.options` comes back full of stubs and your checks pass on their own.

## Shared data: `data/`

All of it is generated. Don't hand-edit any of it, and commit exactly what the tool produces, so the next refresh stays a clean diff.

`data/collections-<theme>.js` holds the assets and periods of each collection, written by `mapbiomas-pipeline/toolkit/build_patches.py`. Each script takes the regions it covers with `collections: Collections.pick([...])`. Degradation is the exception: its collections reference a configuration object and live `ee.Image`s, so they stay in the script.

`data/downloads.js` maps each region to the download page its own initiative maintains. It replaced ~1,500 hard-coded links to single GeoTIFFs, which pointed at old collections and broke on every release.

`data/legends.js` holds the colours and class names of each region, generated by `mapbiomas-pipeline/toolkit/build_legends.py` from the same source as the files in `legend-colors/`. Never hand-edit either side: the panel, the area CSV and the `.qml` have to agree, and they didn't before this file existed.

`data/territories.js` holds the official territories of every region, written by `mapbiomas-pipeline/toolkit/build_territories.py`. Each script takes the regions it covers with `tables: Territories.pick([...])`.

Like `core/`, all of `data/` must be pushed to the GEE repository **before** the scripts that require it.

## Architecture of a toolkit script

Each `mapbiomas-user-toolkit-<theme>.js` is still mostly self-contained. The large ones (lulc, fire, water, etc.) share the same shape:

- **Header JSDoc** with `@version` history. Each release adds a line here.
- **`Area`**: area-per-class calculation using `reduceRegion` with a grouped `ee.Reducer.sum()`, for the CSV export. Now `core/v1/area.js`, except in soil.
- **`App`** object:
  - `App.options`: what this theme is, as data. `version` is shown in the UI title. `tables` and `collections` are `pick([...])` calls into `data/`. Per-collection behaviour is a flag on the collection entry, never a comparison against its name: `encoding: 'x100'|'raw'` in deforestation-regeneration (older assets store class×100+coverage, newer ones the class 0–7) and irrigation, and `legend: 'c11'` in mining (the C11 substance codes use a different style set). The rest is `bandsNames`, `ranges`, `palette`, `fileDimensions`, `dataType`.
  - **Class names and colours** come from `data/legends.js`. In lulc, `App.setPalette(region)` fills `palette.Coverage` and `className` from it when the region changes; lulc has no `palettes` or `className` literal any more. Older collections of a region still render because the palette carries every value the region can hold, not only the ones the newest collection uses.
  - `App.ui.form`: builds the side panel (region → collection → table → property → feature → buffer → layers), then zooms, adds layers, and exports.
- **User vectors** come from `core/v1/territory.js`, which looks for a folder named `MAPBIOMAS` in the user's assets. It still uses `ee.data.getAssetRoots()`, which GEE has deprecated; it now sits in one file, so replacing it is a one-file change.
- **Exports** go through `core/v1/export.js`. Since 2.0.0 the shape is fixed and **breaking to change**: `<region>-<collection>-<data type>-<territory>-<period>`, words joined with `_` and fields with `-`, into the Drive folder `MAPBIOMAS-EXPORT`; the area CSV always has `class, class_name, band, area_km2`. The README has a migration note for it.
- **Band names.** Collection 11 publishes `classification_YYYY` and older collections use their own prefix, so each script renames on load — with `regexpRename` in most, `bandNames().map()` in deforestation, and a targeted one for fire's `fire_recurrence`. There is no `bandPrefix` flag: every rename was checked against the real band names and they all land correctly, and a single flag can't describe three mechanisms plus soil's depth-keyed bands. See `docs/refactoring-plan.md`.

## Typical change: adding or updating collections and territories

Don't hand-write asset IDs, periods, territory lists, palettes or class names. The tools in `mapbiomas-pipeline/toolkit/` write the files in `data/`: `build_patches.py` the collections, `build_territories.py` the territories, `build_legends.py` the legends **and** the files in `legend-colors/` from the same source. Then:
1. For a brand-new region, add it to the region select list in `App.ui.form` (search for the list of `'mapbiomas-...'` strings) **and** to the `pick([...])` lists for tables and collections. `node toolkit/check_options.js` in the pipeline catches a region that is offered but has no data.
2. Bump `App.options.version` and add a line to the header `@version` history, keeping the two in sync. Update the version table in the README.
3. Keep scripts ES5-only. The Code Editor has no `String.prototype.normalize`, arrow functions, `let`/`const`, or template literals.

Toolkit users can only open territory FeatureCollections that have public read ACL.

## Other files

- `ancillary/`: one-off helper scripts, such as water-data exports and `asset_acl_public.sh`.
- `set-asset-public.sh`: makes every asset in a GEE folder public with the `earthengine` CLI (`earthengine ls` + `earthengine acl set public`). Edit `folder_path` before running it, and run `earthengine authenticate` first.
- `legend-colors/`: legend files (CSV, QGIS `.qml`, ArcGIS Pro `.lyrx`, SLD) for the latest collection of each dataset, generated by `mapbiomas-pipeline/toolkit/build_legends.py`. Don't edit them by hand. The toolkits link to these folders on GitHub (`labelLegendFiles`), and older files are in `legend-colors/legacy/`.
- `LICENSE`: MIT for the code. MapBiomas data are CC BY 4.0.
- `misc/`: README images and `transitions.md`, which documents the transition periods.
- `prototype/`: UI experiments. They aren't used by the toolkit scripts.
