# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

MapBiomas User Toolkit: standalone Google Earth Engine (GEE) Code Editor scripts that let users view and download MapBiomas data (land use/land cover, fire, water, mining, pasture, soil, irrigation, degradation, deforestation/regeneration, mosaics) clipped to a vector of their choosing. Users open them from the GEE repo `users/mapbiomas/user-toolkit` (see README.md).

## Running / testing

There is no build, lint, test suite, or package manager. The `.js` files are **GEE Code Editor scripts, not Node modules**: they use the injected globals `ee`, `ui`, `Map`, `Export`, `print`, and load shared modules with GEE's `require('users/<account>/<repo>:<path>')`. They can't run locally. To test a change, paste the script into https://code.earthengine.google.com and run it there. Check syntax locally with `node --check <file>.js`, and check data references with `node tools/check_options.js`. That script verifies that every asset exists and is public and that `periods` match the real bands. It needs `tools/output/inventory.json`, which you create with `tools/crawl_public_assets.py` (see `tools/README.md`).

Keep the code ES5-compatible (use `var` and `function`, no arrow functions, `let`/`const`, or template literals). That's the style every script uses, and the GEE Code Editor has traditionally required it.

External modules the scripts depend on (these live in GEE, not in this repo): `users/mapbiomas/modules:Palettes.js`, `users/mapbiomas/modules:Logos.js`, `users/joaovsiqueira1/packages:Mapp.js` / `Legend.js`, and `users/workspaceipam/packages:mapbiomas-toolkit/...` (used by the fire and degradation scripts).

## Source of truth

The canonical scripts live in the GEE git repo `https://earthengine.googlesource.com/users/mapbiomas/user-toolkit`, which is edited directly in the Code Editor and has its own history (auto-generated "Updated <file> (added N lines…)" commits). This GitHub repo is a mirror that lags behind it. To sync, clone that repo (it needs `~/.gitcookies` from https://earthengine.googlesource.com/new-password), then copy its `.js` files over the local ones. It contains only the `.js` scripts. `README.md`, `ancillary/`, `legend-colors/`, `misc/`, `prototype/`, and `mapbiomas-user-toolkit-mosaics.js` exist only here.

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

Don't hand-write asset IDs, periods, or territory lists. Generate them with `tools/` (full workflow in `tools/README.md`). The tools import `utils/platform_api.py` from the sibling `mapbiomas-pipeline` repo and use the GEE Python API.
1. Add the new public asset IDs to `tools/catalog_candidates.py` (`LULC`, `DEFORESTATION`, `THEMATIC`). Check them first against `tools/output/inventory.json`. The docs don't reliably say which assets are public; the ACL does.
2. Run `tools/build_patches.py`. It refreshes `periods` from the real band names, fixes renamed IDs (`ASSET_FIXES`), and rewrites `collections`, `tables`, and `palettes` in each script through `tools/apply_options.js`. Running it again on a script that is already up to date changes nothing.
3. For a brand-new region, also add it to `tools/regions.py` and to the region select list in `App.ui.form` (search for the list of `'mapbiomas-...'` strings).
4. Bump `App.options.version` and add a line to the header `@version` history. Keep the two in sync. For lulc, also regenerate the README "Release History" section from the header.

Territories come from the MapBiomas platform API (`build_territories.py`). Their paths are either `projects/mapbiomas-territories/assets/TERRITORIES[-STAGING]/<REGION>/WORKSPACE/...` or platform-ingested `.../PLATFORM/demo/mapbiomas/<project>/territories/<KEY>/<uuid>`. Toolkit users can only open FeatureCollections with public read ACL. `build_territories.py` flags any that aren't public.

## Other files

- `tools/`: data-maintenance scripts (Python + Node). Their generated output goes to `tools/output/`, which is gitignored.
- `ancillary/`: one-off helper scripts, such as water-data exports and `asset_acl_public.sh`.
- `set-asset-public.sh`: makes every asset in a GEE folder public with the `earthengine` CLI (`earthengine ls` + `earthengine acl set public`). Edit `folder_path` before running it, and run `earthengine authenticate` first.
- `legend-colors/`: MapBiomas legend files for ArcMap, QGIS, and Excel.
- `misc/`: README images and `transitions.md`, which documents the transition periods.
- `prototype/`: UI experiments. They aren't used by the toolkit scripts.
