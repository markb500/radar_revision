# Radar Revision App

Modular ES6 revision tool for the RAF Aerospace Engineering Technician **radar** course. Same shell as the Maths and Science revision apps: registry-driven generators, Test Designer, print support, and teacher solution window.

Content is largely **theory / systems** questions (often multi-choice or short calculation) with diagrams from the Radar books, rather than long algebraic working.

---

## Contents

1. [Quick start](#quick-start)
2. [Features](#features)
3. [Folder structure](#folder-structure)
4. [Architecture](#architecture)
5. [Generator interface](#generator-interface)
6. [Topics](#topics)
7. [Shared utilities](#shared-utilities)
8. [Test Designer](#test-designer)
9. [Teacher solution window](#teacher-solution-window)
10. [Print layout](#print-layout)
11. [Accessibility](#accessibility)
11. [Adding a topic](#adding-a-topic)
12. [Coding conventions](#coding-conventions)
13. [Troubleshooting](#troubleshooting)

---

## Quick start

```bash
cd "Radar Revision"
npx serve .
# or
python3 -m http.server 8080
```

Open the local URL shown by the server.

---

## Features

| Feature | Description |
|--------|-------------|
| Topic buttons | One click → new random question for that topic |
| Worked solutions | Step-by-step solutions (MathJax where needed); view counter on the solution button |
| Diagrams | Canvas drawings where needed; text alternatives via `canvas.description` / `solutionDescription` |
| Training notes | Per-question link into the course PDF |
| Formula sheet | Link from the main UI |
| Test Designer | Build a multi-question test; reorder by drag **or keyboard**; print |
| Separate solution window | Button opens a private teacher window that tracks the current solution |
| Legacy SolnWin shortcut | Undocumented key sequence **`chpz`** still opens the same window |
| Background colour | Optional page background; also applied to an open solution window |
| Accessibility | Skip link, visible focus, live regions, diagram descriptions, keyboard Test Designer, statement page |
| Print-friendly CSS | Hides controls; solutions section starts on a new page |

---

## Folder structure

```
Radar Revision/
├── index.html
├── testCreate.html
├── SolnWin.html
├── README.md
├── GENERATORS.md
├── css/main.css
├── js/
│   ├── app.js
│   ├── registry.js
│   ├── utils.js
│   └── generators/
│       ├── basicradar.js
│       ├── microwaves.js
│       ├── txrx.js
│       ├── radtech.js
│       ├── iffflir.js
│       ├── recce.js
│       └── ew.js
├── images/          Radar diagrams + book PDFs
└── RadarHelp/
```

---

## Architecture

Identical pattern to Maths / Science:

```
app.js → registry.js → generators/*.js
           └─ utils.js
```

`topicMap` in `app.js` maps button labels to registry keys.

---

## Generator interface

```js
export function generate(options = {}) {
  return {
    question: string,
    solution: string,
    notesLink: string,
    canvas?: {
      width: number,
      height: number,
      withSolution: boolean,
      draw: (ctx) => void,
      questionDraw?: (ctx) => void,
      description?: string,           // shown with the question figure
      solutionDescription?: string    // shown when the solution figure is revealed
    },
    showHow?: boolean,   // Science vectors — optional animation button
    meta?: object        // fixture runs only
  };
}
```

**Canvas rules (all packs):**

- `withSolution: false` — diagram with the question only; use `draw` (and `description`).
- `withSolution: true` without `questionDraw` — diagram only when the solution is shown; use `draw` (and `solutionDescription` or `description`).
- `withSolution: true` with `questionDraw` — question figure on the base canvas; `draw` overlays when the solution is shown. Prefer both `description` and `solutionDescription` when the figures differ.


## Topics

| Button | Key | File | Book (typical) |
|--------|-----|------|----------------|
| Basic Radar | `basicradar` | `basicradar.js` | Book 1 Basic Radar |
| Microwave Techniques | `microwaves` | `microwaves.js` | Book 2 Microwaves / AE |
| Transmitters & Receivers | `txrx` | `txrx.js` | Book 3 Tx/Rx |
| Radar Techniques | `radtech` | `radtech.js` | Book 4 Radar Techniques |
| IFF/SSR & FLIR | `iffflir` | `iffflir.js` | Book 5 IFF/FLIR |
| Aircraft Reconnaissance | `recce` | `recce.js` | Book 6 AC Recon Systems |
| Electronic Warfare | `ew` | `ew.js` | Book 7 EW |

Case pools are large (often 10–50+ templates). See [GENERATORS.md](GENERATORS.md).

---

## Shared utilities

Shared with the other apps: `rndgen`, `dp`, `thouSep`, `QLimitRepeats`, `eqnformat`, `loadImages`, `images`.

Radar generators often:

- Pick a case id with `QLimitRepeats`.
- Attach `notesLink` with a `#page=` into the relevant book.
- Draw or stamp a diagram from `images`.

---

## Test Designer

1. Open **Test Designer** from the main page (`testCreate.html`).
2. Click topics on the left to add them to **Test order**.
3. Reorder with **Up** / **Down**, **Alt+↑** / **Alt+↓**, or by dragging. Use **Remove** to delete an item.
4. **Create Test** opens `index.html?test=1`.

In test mode, topic buttons and chrome (including Separate solution window) are hidden; **Change question** and print behaviour match the Maths and Science apps.

## Teacher solution window

**Preferred:** **Separate solution window** button on the main page.

**Legacy:** type **`chpz`** with the main window focused.

Diagram rules match the other packs: question-only figures are not shown in SolnWin; when both question and solution figures exist, the solution overlays the question. Background colour tracks the main page.

## Print layout

Print CSS hides controls; the solutions section starts on a new page. Canvas diagrams scale to page width.

---

## Adding a topic

1. `js/generators/mytopic.js` with `export function generate()`
2. Register in `registry.js`
3. Button + `topicMap` + Test Designer entry
4. List new PNGs in `utils.js` `imageSources`

---

## Coding conventions

- ES modules; HTTP server required
- Prefer named imports from `utils.js`
- Keep question wording and note page links consistent with the Radar CIs
- Large switch/case banks: when editing one case, do not break shared diagram helpers at the top of the file

---

## Accessibility

The apps target **UK PSBAR** (WCAG 2.2 AA as far as practicable) for public-sector use.

| Measure | Detail |
|--------|--------|
| Skip link | Jump to main question content |
| Focus | Visible `:focus-visible` outlines on controls |
| Live regions | Question and solution areas update politely for screen readers |
| Diagram text | `#diagramDesc` from `canvas.description` / `solutionDescription` |
| Test Designer | Keyboard reorder and status announcements |
| Teacher window | Dedicated button (not only a secret key sequence) |
| Statement | `accessibility.html` — complete organisational placeholders before publishing |

**Known limits:** MathJax may be announced unclearly; some diagrams remain complex; course PDFs depend on how each file was produced; some Science vector “Show me how” animations are visual-only.


## Troubleshooting

| Symptom | Try |
|--------|-----|
| Module errors | Serve over HTTP |
| Missing image | Check `imageSources` and file name under `images/` |
| Wrong notes page | Update `notesLink` `#page=` for that case |
| Test empty | Confirm registry keys match `topicMap` |

---

## Related apps

- **Maths Revision** — algebra, graphs, area/volume  
- **Science Revision** — statics and dynamics  

---

*Aligned with the modular ES refactor used across the three revision packages.*
