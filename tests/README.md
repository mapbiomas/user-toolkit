# tests/

A behavior snapshot of every toolkit, the safety net for the refactoring (see `docs/refactoring-plan.md`).

```bash
node tests/snapshot.js            # compare with tests/snapshots/ (exits 1 if something changed)
node tests/snapshot.js lulc fire  # only some toolkits
node tests/snapshot.js --update   # accept the new behavior and rewrite the snapshots
```

`harness.js` loads a toolkit in Node with mocked `ee`, `ui`, `Map` and `Export`. `snapshot.js` then does what a user would do in the panel. For each region, it opens every collection and records the data types. For the latest collection, it walks the whole flow: first official territory table → property → feature → data type → latest layer → **Export**. It records the layer names and the parameters of each export task (name, Drive folder, scale, format).

Nothing is computed. The `ee` objects are stand-ins, so the snapshots cover the panel flow, the data wiring and the export naming. They don't cover map rendering: check that in the Code Editor.

Only run `--update` when a change in behavior is intended, and review the diff of `tests/snapshots/` in the commit.
