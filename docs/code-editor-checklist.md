# Code Editor checklist

What the Node harness can't cover: map rendering, legends and real export tasks.
Run it in the Code Editor before publishing, and check that every task reaches
`SUCCEEDED` (from the CLI, not the Tasks tab).

## How to run it

1. Open each `mapbiomas-user-toolkit-<theme>.js` in the Code Editor and press **Run**.
2. Walk the panel: region → collection → table → property → feature → data type.
3. Turn on one layer and confirm it renders with the right colors.
4. Click **Export images to Google Drive**, then **RUN ALL** in the Tasks tab.
5. Check the tasks from the CLI, with the same Google account:

   ```
   GEE_PROJECT=mapbiomas python toolkit/watch_tasks.py --watch --hours 2
   ```

   The script lives in the private `mapbiomas-pipeline` repository. `--watch` repeats
   until nothing is pending; the exit code is 0 when every task finished.

A small territory (Brazil → Estados (IBGE, 2025) → NM_UF → Distrito Federal) keeps
the exports cheap and still exercises the whole flow.

## Round of 2026-09-19

Brazil, "Estados (IBGE, 2025)", `NM_UF`, Distrito Federal, newest collection of each
toolkit. Every toolkit rendered its layer, generated the two tasks (area CSV + GeoTIFF)
and all 18 tasks reached `SUCCEEDED` (0 pending).

| Toolkit | Version | Collection | Layer | Tasks |
|---|---|---|---|---|
| lulc | 1.36.2 | collection-11.0 | coverage 2025 | ✓ |
| deforestation-regeneration | 1.7.3 | collection-11.0 | deforestation_sec_vegetation 1987 | ✓ |
| fire | 1.4.15 | collection-5 | annual_burned 1985 | ✓ |
| water | 1.6.2 | collection-5.0 | annual_water_coverage 1985 | ✓ |
| irrigation | 1.5.2 | collection-11.0 | irrigated_agriculture 1985 | ✓ |
| mining | 1.4.2 | collection-11.0 | mined_substance 1985 | ✓ |
| pasture | 1.5.2 | collection-11.0 | pasture_quality 2000 | ✓ |
| soil | 1.1.5 | collection3-beta | soc_t_ha_000_030cm 1985 | ✓ |
| degradation | 0.0.5 | secondary vegetation (beta) | secondary_age 1986 | ✓ |

Checked along the way:

- Layer and export names use the short table name (`estados_ibge_2025 1987`), not a UUID.
- Irrigation shows the collection 11 legend (1 center pivot, 2 other systems, 3 flooding).
- Mining shows the substance legend of collection 11.
- The single "Legend files" link opens `legend-colors/` on GitHub.
- The toolkit logo loads in the five generic toolkits.

Fixed in this round: leftover `print()` calls that showed up in the Console
(fire 1.4.15, soil 1.1.5).

Still open, for the refactoring:

- Export names differ between toolkits (fire and soil use `_`, the others `-`).
  Phase 4 standardizes them.
- In degradation the header has an empty second tab, next to "Toolkit".
