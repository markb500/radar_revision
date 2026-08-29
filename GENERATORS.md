# Radar Revision — Generator reference

Each file: `js/generators/<name>.js`, exports `generate()`. Case numbers below are the pool size used with `QLimitRepeats` (or the switch range observed in code); individual cases map to specific CI pages and diagrams.

---

**Common return shape**

```js
{
  question: string,
  solution: string,
  notesLink: string,
  canvas?: {
    width, height, withSolution,
    draw, questionDraw?,
    description?,           // question-phase text alternative
    solutionDescription?    // when solution diagram is shown
  },
  showHow?: boolean,        // Science vectors animation
  meta?: object             // only when generate({ fixture }) is used
}
```

**Diagram rules**

| `withSolution` | `questionDraw` | Main page | Teacher SolnWin |
|----------------|----------------|-----------|-----------------|
| `false` | — | Question shows `draw` | No diagram |
| `true` | absent | Solution shows `draw` | Solution `draw` |
| `true` | present | Question uses `questionDraw`; solution overlays `draw` | Same overlay |

Prefer `description` / `solutionDescription` whenever a canvas is used so `#diagramDesc` can expose the figure to assistive technology.


## basicradar.js — Basic Radar

| | |
|--|--|
| **Key** | `basicradar` |
| **Notes** | `20200323-RadarBk1BasicRadCIv1_5-APO.pdf` (from ~p.7) |
| **Cases** | ~51 (`QLimitRepeats` 51) |
| **Canvas** | Often yes — principle diagrams, pulse timing sketches |

**Themes:** radar principles, PRT/PRF, pulse width, duty cycle, slant range vs time (including the 6.7 µs/km rule of thumb), basic block ideas, display types. Mix of pure theory and short calculations in `aligned` MathJax.

---

## microwaves.js — Microwave Techniques

| | |
|--|--|
| **Key** | `microwaves` |
| **Notes** | Book 2 Microwaves / AE |
| **Cases** | ~20 |
| **Canvas** | Yes — waveguide / antenna style figures where provided |

**Themes:** microwave transmission, waveguides, antennas, propagation concepts tied to the AE CI.

---

## txrx.js — Transmitters & Receivers

| | |
|--|--|
| **Key** | `txrx` |
| **Notes** | Book 3 Tx/Rx |
| **Cases** | ~21 |
| **Canvas** | Yes |

**Themes:** transmitter and receiver chains, local oscillator / mixer ideas, noise, bandwidth — matching Book 3 figures and wording.

---

## radtech.js — Radar Techniques

| | |
|--|--|
| **Key** | `radtech` |
| **Notes** | Book 4 Radar Techniques |
| **Cases** | ~33 |
| **Canvas** | Yes |

**Themes:** operational techniques (scanning, tracking concepts, MTI/pulse-Doppler style ideas as covered in the CI), with linked diagrams.

---

## iffflir.js — IFF/SSR & FLIR

| | |
|--|--|
| **Key** | `iffflir` |
| **Notes** | Book 5 IFF/FLIR CI |
| **Cases** | ~14–16 |
| **Canvas** | Yes |

**Themes:** IFF/SSR modes, squawk emergency codes (e.g. 7700 / 7600 / 7500 text in solutions), FLIR principles as taught on the course.

---

## recce.js — Aircraft Reconnaissance

| | |
|--|--|
| **Key** | `recce` |
| **Notes** | Book 6 AC Recon Systems |
| **Cases** | ~11 |
| **Canvas** | Yes |

**Themes:** reconnaissance sensors and system-level questions from Book 6.

---

## ew.js — Electronic Warfare

| | |
|--|--|
| **Key** | `ew` |
| **Notes** | Book 7 EW |
| **Cases** | ~22–23 |
| **Canvas** | Yes |

**Themes:** EW terms, roles, and system concepts as in Book 7, with supporting diagrams.

---

## Patterns common to radar generators

1. **Large switch** on a random case id from `QLimitRepeats`.
2. **`notesLink`** almost always includes `#page=…` into the correct book PDF under `images/`.
3. **Diagrams** via `images[filename]` drawn in `canvas.draw`, or HTML `<img>` where still used.
4. **Calculations** (when present) use `$$\begin{aligned}…\end{aligned}$$` so lines stack; theory answers are often short HTML strings.

When adding a case: copy an adjacent case’s structure, update numbers/wording, point `notesLink` at the correct page, and register any new image in `utils.js`.

---

## File ↔ registry

```
basicradar.js  → basicradar
microwaves.js  → microwaves
txrx.js        → txrx
radtech.js     → radtech
iffflir.js     → iffflir
recce.js       → recce
ew.js          → ew
```
