# Strategy icon artwork — current version

`tactics-atlas-cartoon-v2.png` is the active image, generated with the built-in imagegen tool on 2026-10-19 using the user-provided circular skill-badge image as a visual style reference.

The new set contains all 35 tactic trees: 5 columns × 7 element rows. It uses thick round beveled frames, opaque inset centers, bold cartoon silhouettes, broad shaded facets and transparent space outside each badge. It is newly AI-generated interface artwork, not official BlazBlue artwork and not labeled CC0.

Stable tree IDs, image dimensions (1060 × 1484) and calibrated 196px display windows are defined in `strategy-art.js`. `strategy-art.css` uses the matching sprite scale and removes the previous extra diamond frames from fusion badges, leaving each painted circular rim visible. Both sources, the fusion joint and all selection/progress behavior are preserved.

The original generated PNG is stored unchanged. No raster cropping or recoloring is applied; the browser displays its individual cells. The previous image is kept as `tactics-atlas.png` for comparison and recovery; it is not loaded by the current page.

## Previous version notes

# Original tactic artwork

`tactics-atlas.png` was generated with the built-in imagegen tool for this project on 2026-10-18.
It is original AI-generated interface artwork, not official BlazBlue artwork and not labeled CC0.
It supersedes the incomplete third-party CC0 spell-icon pilot in the live interface.

The transparent atlas contains 35 cells: 5 columns × 7 rows. Stable tree IDs and calibrated 200px display windows are recorded in `strategy-art.js`; these avoid neighbouring glow and the unused bottom gutter.

Rows: Fire, Ice, Electric, Toxin, Umbra, Light, Blade. Each row has the five tactic trees in catalog order.
The original generated PNG is preserved without raster edits; the browser displays individual cells using CSS background positions.
One local image is shared by the fusion badges, tactic-tree headers, equipped slots, character build previews and tactic detail panels.

Generation brief: original dimensional painted ability art, dramatic silhouettes and restrained energy glow, transparent background, consistent scale, no text or frames, each tree has a distinct subject. No game artwork was supplied as an image reference.
