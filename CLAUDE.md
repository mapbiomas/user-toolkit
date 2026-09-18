# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

MapBiomas User Toolkit: standalone Google Earth Engine (GEE) Code Editor scripts that let users view and download MapBiomas data (land use/land cover, fire, water, mining, pasture, soil, irrigation, degradation, deforestation/regeneration, mosaics) clipped to a vector of their choosing. Users open them from the GEE repo `users/mapbiomas/user-toolkit` (see README.md).

## Running / testing

There is no build, lint, test suite, or package manager. The `.js` files are **GEE Code Editor scripts, not Node modules**: they use the injected globals `ee`, `ui`, `Map`, `Export`, `print`, and load shared modules with GEE's `require('users/<account>/<repo>:<path>')`. They can't run locally. To test a change, paste the script into https://code.earthengine.google.com and run it there. Check syntax locally with `node --check <file>.js`.

Keep the code ES5-compatible (use `var` and `function`, no arrow functions, `let`/`const`, or template literals). That's the style every script uses, and the GEE Code Editor has traditionally required it.

External modules the scripts depend on (these live in GEE, not in this repo): `users/mapbiomas/modules:Palettes.js`, `users/mapbiomas/modules:Logos.js`, `users/joaovsiqueira1/packages:Mapp.js` / `Legend.js`, and `users/workspaceipam/packages:mapbiomas-toolkit/...` (used by the fire and degradation scripts).

## Source of truth

The canonical scripts live in the GEE git repo `https://earthengine.googlesource.com/users/mapbiomas/user-toolkit`, which is edited directly in the Code Editor and has its own history (auto-generated "Updated <file> (added N lines…)" commits). This GitHub repo is a mirror that lags behind it. To sync, clone that repo (it needs `~/.gitcookies` from https://earthengine.googlesource.com/new-password), then copy its `.js` files over the local ones. It contains only the `.js` scripts. `README.md`, `ancillary/`, `legend-colors/`, `misc/`, `prototype/`, and `mapbiomas-user-toolkit-mosaics.js` exist only here.

## Architecture of a toolkit script

Each `mapbiomas-user-toolkit-<theme>.js` is self-contained. The large ones (lulc, fire, water, etc.) share the same shape:

- **Header JSDoc** with `@version` history. Each release adds a line here.
- **`Area`** object: area-per-class calculation using `reduceRegion` with a grouped `ee.Reducer.sum()`, for the CSV export.
- **`App`** object:
  - `App.options`: all configuration as data. `version` is shown in the UI title. `tables[region]` holds the default territory vectors (`{label, value: assetId}`). `collections[region]['collection-X.Y']` holds `assets` (integration / transitions / quality image IDs) and `periods` (`Coverage` years and `Transitions` `"YYYY_YYYY"` pairs). The remaining keys are `palettes[region]` (the palette name passed to `Palettes.js`), `bandsNames`, `ranges`, `palette`, and `className`.
  - `App.ui.form`: builds the side panel (region → collection → table → property → feature → buffer → layers), then zooms, adds layers, and exports.
- **User vectors** are found through `ee.data.getAssetRoots()` by looking for a root folder named `MAPBIOMAS` in the user's assets.
- **Exports** use `Export.image.toDrive` / `Export.table.toDrive` into the Drive folder `MAPBIOMAS-EXPORT`.

## Typical change: adding or updating a regional collection (lulc)

Most commits look like this (e.g. "update to pampa collection 4 and uruguay collection 2"). In `mapbiomas-user-toolkit-lulc.js`:
1. Add `collections['mapbiomas-<region>']['collection-N.M']` with the asset IDs (usually `projects/mapbiomas-public/assets/<region>/...`) and the `periods` lists.
2. Update `tables['mapbiomas-<region>']` if the territories changed (currently `projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/<REGION>/COLLECTION<N>/WORKSPACE/...`; the `TERRITORIES` → `TERRITORIES-OLD` rename was applied across all scripts).
3. For a brand-new region, also add it to `palettes`, and add it to the region select list in `App.ui.form` (search for the list of `'mapbiomas-...'` strings).
4. Bump `App.options.version` and add a line to the header `@version` history.

## Other files

- `ancillary/`: one-off helper scripts, such as water-data exports and `asset_acl_public.sh`.
- `set-asset-public.sh`: makes every asset in a GEE folder public with the `earthengine` CLI (`earthengine ls` + `earthengine acl set public`). Edit `folder_path` before running it, and run `earthengine authenticate` first.
- `legend-colors/`: MapBiomas legend files for ArcMap, QGIS, and Excel.
- `misc/`: README images and `transitions.md`, which documents the transition periods.
- `prototype/`: UI experiments. They aren't used by the toolkit scripts.
