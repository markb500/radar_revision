# Radar Revision App (refactored)

Modular ES6 rewrite of the Radar Revision Questions app for the RAF Aerospace Eng Tech course, aligned with the Maths and Science revision apps.

## Structure

```
index.html              Main UI
testCreate.html         Test Designer (drag-and-drop order)
SolnWin.html            Teacher solution window (secret code)
css/main.css            App + print styles
js/
  app.js                UI orchestration, single-question + test mode
  registry.js           Topic → generator registry
  utils.js              Shared helpers (rndgen, dp, images, MathJax)
  generators/
    basicradar.js
    microwaves.js
    txrx.js
    radtech.js
    iffflir.js
    recce.js
    ew.js
images/                 Diagrams, training notes PDFs, formula sheet
RadarHelp/              User help
```

## Features

- ES modules with a central registry
- Consistent `generate()` return shape: `{ question, solution, notesLink, canvas? }`
- Test Designer with drag-reorder
- Multi-question test mode with Show/Hide solution, Change question, and print layout
- Background colour selector
- Training notes + formula sheet links
- **Teacher solution window**: type `chpz` to open a separate window that shows the full solution (and diagram) as soon as each question is generated

## Topics

| Button | Registry key |
|--------|----------------|
| Basic Radar | `basicradar` |
| Microwave Techniques | `microwaves` |
| Transmitters & Receivers | `txrx` |
| Radar Techniques | `radtech` |
| IFF/SSR & FLIR | `iffflir` |
| Aircraft Reconnaissance | `recce` |
| Electronic Warfare | `ew` |

## Running

Serve the folder over HTTP (modules require a server, not `file://`):

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080` (or the port you used).

## Teacher solution window

1. Focus the main app window.
2. Type **`chpz`** (no Enter needed).
3. A solution window opens.
4. Each topic-button click pushes that question’s full solution into the window immediately.

Students still only see the solution after **Show/Hide Solution**.

## Notes

- Open via a local web server so ES module imports work.
- Print styles hide interactive controls and start the Solutions section on a new page.
- Diagram images are preloaded and also exposed on `window` under their original names for the ported question logic.
