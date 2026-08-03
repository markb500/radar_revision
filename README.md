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
| Topic buttons | Random question from a large case pool per book |
| Solutions | Text / MathJax; many topics include diagrams |
| Training notes | Links into Radar Books 1–7 PDFs |
| Test Designer | Drag-reorder multi-question tests + print |
| Teacher SolnWin | **`chpz`** private solution window |
| Background colour | Optional |
| Print CSS | Hides controls; solutions section on new page |

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
export function generate() {
  return {
    question: string,
    solution: string,
    notesLink: string,
    canvas?: { width, height, withSolution, draw, questionDraw? }
  };
}
```

Many radar cases select a pre-drawn PNG via `images[…]` and draw it on the canvas. Calculation cases (e.g. slant range) use `aligned` MathJax.

---

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

## Test Designer / SolnWin / Print

Same behaviour as Maths and Science:

- Test Designer → `?test=1`
- **`chpz`** → `SolnWin.html`
- Print hides UI; solutions start on a new page

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
