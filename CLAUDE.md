# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

MapBiomas User Toolkit: standalone Google Earth Engine (GEE) Code Editor scripts that let users view and download MapBiomas data (land use/land cover, fire, water, mining, pasture, soil, irrigation, degradation, deforestation/regeneration, mosaics) clipped to a vector of their choosing. Users open them from the GEE repo `users/mapbiomas/user-toolkit` (see README.md).

## Running / testing

There is no build, lint, test suite, or package manager. The `.js` files are **GEE Code Editor scripts, not Node modules**: they use the injected globals `ee`, `ui`, `Map`, `Export`, `print`, and load shared modules with GEE's `require('users/<account>/<repo>:<path>')`. They can't run locally. To test a change, paste the script into https://code.earthengine.google.com and run it there. Check syntax locally with `node --check <file>.js`. Data maintenance tooling (asset inventory, territory and palette generation, `App.options` patches, `check_options.js`, `check_links.py`) is **not in this public repo**. It lives in the private sibling repo `mapbiomas-pipeline`, under `toolkit/` (see its README). Don't add it back here.

Keep the code ES5-compatible (use `var` and `function`, no arrow functions, `let`/`const`, or template literals). That's the style every script uses, and the GEE Code Editor has traditionally required it.

External modules the scripts depend on (these live in GEE, not in this repo): `users/mapbiomas/modules:Palettes.js`, `users/mapbiomas/modules:Logos.js`, `users/joaovsiqueira1/packages:Mapp.js` / `Legend.js`, and `users/workspaceipam/packages:mapbiomas-toolkit/...` (used by the fire and degradation scripts).

## Source of truth

Users run the scripts from the GEE git repo `https://earthengine.googlesource.com/users/mapbiomas/user-toolkit`. It holds only the `.js` scripts and can also be edited directly in the Code Editor, which makes auto-generated "Updated <file> (added N lines…)" commits. Its history is unrelated to this repo's, so it can't be a remote of this repo. `README.md`, `LICENSE`, `ancillary/`, `legend-colors/`, `misc/`, `prototype/`, and `mapbiomas-user-toolkit-mosaics.js` exist only here.

A clone of the GEE repo is kept next to this one, in `../user-toolkit-gee`. Git authenticates with `~/.gitcookies` (generate it at https://earthengine.googlesource.com/new-password). Pass `-c credential.helper=` so git doesn't hang waiting for a password prompt.

- **Before editing here:** run `git fetch` in `../user-toolkit-gee` and compare its `.js` files with this repo's. If someone edited a script in the Code Editor, bring that change over first.
- **To publish:** commit and push here (GitHub). Then, in `../user-toolkit-gee`, `git fetch` and confirm `HEAD == origin/master`, so no Code Editor edits get overwritten. Copy over the `.js` files that already exist there (don't add `mosaics.js`), commit with a message that cites the GitHub commit hash, and `git -c credential.helper= push origin master`.

## Architecture of a toolkit script

Each `mapbiomas-user-toolkit-<theme>.js` is self-contained. The large ones (lulc, fire, water, etc.) share the same shape:

- **Header JSDoc** with `@version` history. Each release adds a line here.
- **`Area`** object: area-per-class calculation using `reduceRegion` with a grouped `ee.Reducer.sum()`, for the CSV export.
- **`App`** object:
  - `App.options`: all configuration as data. `version` is shown in the UI title. `tables[region]` holds the default territory vectors (`{label, value: assetId}`). `collections[region]['collection-X.Y']` holds `assets` (integration / transitions / quality image IDs) and `periods` (`Coverage` years and `Transitions` `"YYYY_YYYY"` pairs). An entry can also carry per-collection flags: `encoding: 'x100'|'raw'` in deforestation-regeneration (older assets store class×100+coverage, newer ones store the class 0–7 directly), `encoding: 'raw'` in irrigation, and `legend: 'c11'` in mining (the C11 substance codes use a different style set, `App.options.c11`). The remaining keys are `palettes[region]`, `bandsNames`, `ranges`, `palette`, and `className`. In lulc, `palettes[region]` is an embedded color list indexed by class value. A string is still accepted as a `Palettes.js` palette name, but those palettes stop before the newer classes (77, 84, 92…).
  - `App.ui.form`: builds the side panel (region → collection → table → property → feature → buffer → layers), then zooms, adds layers, and exports.
- **User vectors** are found through `ee.data.getAssetRoots()` by looking for a root folder named `MAPBIOMAS` in the user's assets.
- **Exports** use `Export.image.toDrive` / `Export.table.toDrive` into the Drive folder `MAPBIOMAS-EXPORT`.

## Typical change: adding or updating collections and territories

Don't hand-write asset IDs, periods, or territory lists. Generate them with `mapbiomas-pipeline/toolkit/`, which rewrites the `App.options` blocks of these scripts. Then:
1. For a brand-new region, add it to the region select list in `App.ui.form` (search for the list of `'mapbiomas-...'` strings).
2. Bump `App.options.version` and add a line to the header `@version` history, keeping the two in sync. For lulc, also update the README release table.
3. Keep scripts ES5-only. The Code Editor has no `String.prototype.normalize`, arrow functions, `let`/`const`, or template literals.

Toolkit users can only open territory FeatureCollections that have public read ACL.

## Other files

- `ancillary/`: one-off helper scripts, such as water-data exports and `asset_acl_public.sh`.
- `set-asset-public.sh`: makes every asset in a GEE folder public with the `earthengine` CLI (`earthengine ls` + `earthengine acl set public`). Edit `folder_path` before running it, and run `earthengine authenticate` first.
- `legend-colors/`: legend files (CSV, QGIS `.qml`, ArcGIS Pro `.lyrx`, SLD) for the latest collection of each dataset, generated by `mapbiomas-pipeline/toolkit/build_legends.py`. Don't edit them by hand. The toolkits link to these folders on GitHub (`labelLegendFiles`), and older files are in `legend-colors/legacy/`.
- `LICENSE`: MIT for the code. MapBiomas data are CC BY 4.0.
- `misc/`: README images and `transitions.md`, which documents the transition periods.
- `prototype/`: UI experiments. They aren't used by the toolkit scripts.
