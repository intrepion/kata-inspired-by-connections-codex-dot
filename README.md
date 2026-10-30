# Common Thread

An original word-grouping game inspired by the pleasure of finding connections. Sort sixteen words into four groups of four before four strikes run out. Some words suggest more than one connection.

## Play

[Play Common Thread online](https://intrepion.github.io/kata-inspired-by-connections-codex-dot/)

Serve the folder with a static server, for example `python3 -m http.server 8000`, and open `http://localhost:8000/`. Select tiles with a pointer or keyboard, then check the group. Shuffle and clear controls are available. Choose **Take notes** to mark each word with any combination of yellow, green, blue, and purple; choose a color and activate a tile to toggle that color. Earlier single-color notes are preserved. Clear notes removes every mark on that board. Return to **Select guesses** to submit a group. Each game shows its submitted guesses in order, including correct, one-away, and incorrect results. The last incorrect guess stays highlighted red (×), or orange (−1) when one away, until another guess is submitted. These marks coexist with notes and selections. Repeating the same four words does not add an entry or cost another strike. Older saved guesses are reconstructed from their stored words; their original selection order was not saved. Notes are hypotheses, not answers, and never use strikes; they are saved with their daily or practice game. The question mark opens instructions.

Daily puzzles roll over at midnight **UTC**. Through 29 October 2026, the original seven-board schedule remains in effect. Starting **30 October 2026**, the first 365 boards are in a fixed seeded permutation shared worldwide, with no repeats until all 365 have appeared; the sequence then repeats. The order and first 365 board identities must remain frozen to preserve date mappings; future expansions require a new schedule version and start date.

Practice selects a random board from all 365 boards independently, avoids the immediately previous board when possible, and retains its own current game. Starting a new practice game replaces any unfinished practice game. Practice never changes daily progress.

The statistics dialog separates daily and practice results. Each game counts once when it ends, including a loss. “Hardest first” means that the first correct group has editorial rank 4. “Hardest to easiest” requires all four correct groups in rank order 4, 3, 2, 1. Mistakes do not disqualify either achievement. Difficulty ranks are editorial estimates and are revealed when groups are solved. Daily replay is available through practice, keeping the daily result intact.

Progress and statistics are stored in the browser. The new schedule uses separate save keys from 30 October 2026; earlier UTC daily saves and statistics remain stored. If a future-dated save was made under the old schedule, it remains in storage but is not loaded against a different puzzle. The earliest seven-board version used local-date keys; those keys remain untouched, but are not imported into the new UTC schedule or statistics because puzzle identities and dates do not reliably correspond. Clearing browser data removes progress. If browser storage is unavailable, a warning appears and progress may not persist.

## Development

Run `npm test` with Node.js. No dependencies or build step are needed. The Pages workflow is ready for GitHub Actions when publishing is approved and Pages is configured. This project is independent and is not affiliated with The New York Times.

MIT license; see [LICENSE](LICENSE).
