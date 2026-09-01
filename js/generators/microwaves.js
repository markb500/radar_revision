// js/generators/microwaves.js
// Clean ES module
import { rndgen, dp, thouSep, QLimitRepeats, isCanvasBlank, images } from '../utils.js';

const NOTES = 'images/20200421-RadarBk2MicroAE_v1_2-APO.pdf';
const CANVAS_W = 500;
const CANVAS_H = 300;

/** @type {number[]} */
let recentIds = [];

/**
 * @returns { question: string, solution: string, notesLink: string, canvas?: object }
 */
export function generate() {
  recentIds = QLimitRepeats(recentIds, 20);
  const sum = recentIds[recentIds.length - 1];
  let diagramKind = null;

  let notesLink = NOTES;
  let sumq = '';
  let suma = '';

  const offQ = document.createElement('canvas');
  offQ.width = CANVAS_W;
  offQ.height = CANVAS_H;
  const ctx = offQ.getContext('2d');
  const offS = document.createElement('canvas');
  offS.width = CANVAS_W;
  offS.height = CANVAS_H;
  const ctx2 = offS.getContext('2d');

  switch (sum) {

        case 1:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=6";
            sumq += "Show the position of the “E” fields, “H” fields and “wall currents” in the cross-section of a cylindrical resonant cavity shown.";
            ctx.drawImage(images.cavitysect, 0, 0, 500, 300);
            ctx2.drawImage(images.cavityfields, -13, 0, 500, 300);
            diagramKind = 'cavityFields';
            break;
        case 2:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=6";
            var cavdia = rndgen(30, 60, 0, 5, -1);
            sumq += "For a cylindrical resonant cavity, calculate its resonant&nbsp;frequency&nbsp;(fo) (to 2 decimal places) given that its internal&nbsp;diameter&nbsp;=&nbsp;"
                        + cavdia + "&nbsp;mm and c&nbsp;=&nbsp;300&nbsp;x&nbsp;10<sup>6</sup>&nbsp;m/s";
            suma += "$$\\begin{aligned}Cavity\\ diameter&=\\frac{&lambda;}{2}\\\\[5pt]";
            suma += "&lambda;&=2\\times Cavity\\ diameter\\\\[5pt]";
            suma += "&=2\\times " + cavdia + "\\times 10^{-3}\\\\[5pt]";
            suma += "&=" + cavdia * 2 + "\\times 10^{-3}\\ m\\\\[5pt]";
            suma += "\\\\[5pt]";
            suma += "c&=f&lambda;\\\\[5pt]";
            suma += "f&=\\frac{c}{&lambda;}\\\\[5pt]";
            suma += "&= \\frac{300\\times10^6}{" + cavdia * 2 + "\\times10^{-3}}\\\\[5pt]";
            suma += "&=" + dp(300 / (cavdia * 2), 3, -1) + "\\times 10^9\\\\[5pt]";
            suma += "&=\\underline{\\mathbf{" + dp(300 / (cavdia * 2), 2, 2) + "\\ GHz\\ (2\\ dp)}}\\end{aligned}$$";
            break;
        case 3:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=6";
            var resfreq = rndgen(2, 6, 1, 0.5, -1);
            sumq += "Calculate, to an accuracy of 1 decimal place, the internal diameter of a cylindrical cavity which has a resonant frequency of " 
                        + resfreq + " Ghz, given that c&nbsp;=&nbsp;300&nbsp;x&nbsp;10<sup>6</sup>&nbsp;m/s";
            suma += "$$\\begin{aligned}c&=f&lambda;\\\\[5pt]";
            suma += "&lambda;&=\\frac{c}{f}\\\\[5pt]";
            suma += "&= \\frac{300\\times10^6}{" + resfreq + "\\times10^9}\\\\[5pt]";
            suma += "&=" + dp(300 / resfreq, 3, -1) + "\\times 10^{-3}\\\\[5pt]";
            suma += "\\\\[5pt]";
            suma += "Cavity\\ diameter&=\\frac{&lambda;}{2}\\\\[5pt]";
            suma += "&=\\frac{" + dp(300 / resfreq, 3, -1) + "\\times 10^{-3}}{2}\\\\[5pt]";
            suma += "&=" + dp((300 / resfreq) / 2, 3, -1) + "\\times 10^{-3}\\\\[5pt]";
            suma += "&=\\underline{\\mathbf{" + dp((300 / resfreq) / 2, 1, 1) + "\\ mm\\ (1\\ dp)}}\\\\[5pt]";
            suma += "\\end{aligned}$$";
            break;
        case 4:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=7";
            sumq += "For a cylindrical resonant cavity, where are coupling probes and loops positioned and with which energy field do they interact?";
            suma += "Probes are inserted in the top of the cavity interacting with the E field (parallel)<br><br>" + 
                    "Loops are inserted in the side of the cavity interacting with the H field (at 90 degrees)";
            break;
        case 5:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=7";
            sumq += "For a cylindrical resonant cavity, where are coupling slots positioned and how does their orientation affect their performance?";
            suma += "Slots are cut in the side walls so that they interrupt the wall currents.<br>" + 
                    "At 90 degrees to the wall currents, max radiation;<br>parallel to the wall currents, no radiation.";
            break;
        case 6:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=9";
            sumq += "What is the function of a Cavity Magnetron?";
            suma += "It is used in the Tx as a high power microwave oscillator.";
            break;
        case 7:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=10";
            sumq += "What is the function of a Travelling Wave Tube?";
            suma += "It is used as a high gain microwave amplifier in either the transmitter or the receiver.";
            break;
        case 8:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=11";
            sumq += "What is the function of the Gunn Diode in a varactor tuned microwave resonant cavity oscillator?";
            suma += "It is used in receivers as a low noise, electronically tuneable, microwave local oscillator.";
            break;
        case 9:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=18";
            sumq += "The diagram shows a Choke Flange Joint. Briefly explain how the gap at C appears to be closed to RF microwave energy travelling along the waveguide.";
            suma += "<br><br><br><br><br><br><br><br><br><br>";
            suma += "Distances AB and BC are both 0.25λ. The short circuit at A is therefore reflected back over 0.5λ to form a short circuit at C. " + 
                    "This electronically completes the waveguide wall at the joint, preventing any radiation leakage.";
            ctx.drawImage(images.chokeflange, 0, 0, 500, 300);
            diagramKind = 'chokeFlange';
            break;
        case 10:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=16";
            sumq += "What is the function of a dummy load?";
            suma += "It is used to absorb microwave energy without reflections. Used during servicing.";
            break;
        case 11:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=17";
            sumq += "Briefly explain the function of a Slot Coupled Attenuator.";
            suma += "It is used to sample the transmitted energy in order to check frequency, power and PRF.";
            break;
        case 12:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=21";
            sumq += "Describe the beam shape for a Search Radar.";
            suma += "Fan shaped. Narrow in azimuth, broad in elevation.";
            break;
        case 13:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=21";
            sumq += "For a Pencil beam:<br>a. What type of Radar would use this beam shape?<br>b. What are its characteristics in azimuth & elevation?";
            suma += "a. Airborne Intercept (AI), Terrain Following Radar (TFR) or Weather Radar.<br>b. Narrow in azimuth, narrow in elevation.";
            break;
        case 14:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=21";
            sumq += "For a Cosecant-Squared beam:<br>a. What are the beam widths in azimuth and elevation?<br>" + 
                    "b. What type of radar uses this beam shape?<br>c. How does this beam differ from a search radar beam?";
            suma += "a. Narrow in azimuth, broad in elevation.<br>" + 
                    "b. Ground Mapping Radar (GMR).<br>" + 
                    "c. More energy is focused in the forward (longer range) part of the beam in order to give correct scaling of " + 
                            "target size in the resulting display.";
            break;
        case 15:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=23";
            sumq += "What is a parabolic reflector?";
            suma += "It is a curved, bowl-shaped, aerial which produces a pencil beam.";
            break;
        case 16:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=23";
            sumq += "What is a slotted array?";
            suma += "A flat aerial which can radiate from a large number of elements that are in the same plane.";
            break;
        case 17:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=25";
            sumq += "What is an active array?";
            suma += "It is an array of miniature transmitter/receiver units fixed directly to the front of the dish, " + 
                    "which are individually controlled by the radar systems computer.";
            break;
        case 18:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=13";
            sumq += "What is used to propagate microwave energy from the radar transmitter to the aerial and from the aerial to the receiver?";
            suma += "Waveguide.";
            break;
        case 19:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=10";
            sumq += "State 1 characteristic of a Travelling Wave Tube.";
            suma += "Any one from:<br>- Wide bandwidth<br>- Broad frequency range<br>" +
                        "- Power output from a few mW to 10's kW (pulsed) or 1 kW (continuous wave)<br>- Low noise";
            break;
        case 20:
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=9";
            sumq += "State 1 characteristic of a Cavity Magnetron.";
            suma += "Any one from:<br>- Narrow bandwidth<br>- Limited frequency range<br>" +
                        "- Power o/p from a few Watts up to MW (pulsed) or 10's W (continuous wave)<br>- High noise<br>- Requires cooling";
            break;
    
  }

  const out = {
    question: sumq,
    solution: suma,
    notesLink: notesLink || NOTES
  };

  const qBlank = isCanvasBlank(offQ);
  const sBlank = offS ? isCanvasBlank(offS) : true;

  const kind = diagramKind ||
    (sum === 1 ? 'cavityFields' : sum === 9 ? 'chokeFlange' : null);

  let description = null;
  let solutionDescription = null;
  if (kind === 'cavityFields') {
    description =
      'Cross-section of a cylindrical resonant cavity. The circular wall of the cavity is shown; no field lines or wall currents are marked.';
    solutionDescription =
      'Cylindrical resonant cavity with fields shown. E fields shown as vertical arrows pointing up, with max strength in centre of cavity. ' +
      'H fields shown as circle-and-cross on left of cavity and circle-and-dot on right, signifying circulation around cavity. ' +
      'Max field strength at edge of cavity. Wall currents shown flowing from centre of base, radiating outwards, up the side and in to centre of the top.';
  } else if (kind === 'chokeFlange') {
    description =
      'Cross section of a waveguide running horizontally with a joint partway along. ' +
      'An arrow indicates microwave energy flowing left to right. ' +
      'Within the body of the joint a groove runs vertically either side of the main channel and then turns 90° left for the same length. ' +
      'The groove is labelled C at the main channel junction, B at the 90° turn and A at the closed end.';
  }

  if (!qBlank || !sBlank || kind) {
    const urlQ = offQ.toDataURL();
    const urlS = offS ? offS.toDataURL() : null;

    out.canvas = {
      width: CANVAS_W,
      height: CANVAS_H,
      withSolution: false,
      draw: null,
      questionDraw: null,
      description: null,
      solutionDescription: null
    };

    if (!qBlank && sBlank) {
      out.canvas.withSolution = false;
      out.canvas.draw = (c) => {
        const img = new Image();
        img.onload = () => c.drawImage(img, 0, 0);
        img.src = urlQ;
        if (img.complete) c.drawImage(img, 0, 0);
      };
    } else if (qBlank && !sBlank) {
      out.canvas.withSolution = true;
      out.canvas.draw = (c) => {
        const img = new Image();
        img.onload = () => c.drawImage(img, 0, 0);
        img.src = urlS;
        if (img.complete) c.drawImage(img, 0, 0);
      };
    } else if (!qBlank && !sBlank) {
      out.canvas.withSolution = true;
      out.canvas.questionDraw = (c) => {
        const img = new Image();
        img.onload = () => c.drawImage(img, 0, 0);
        img.src = urlQ;
        if (img.complete) c.drawImage(img, 0, 0);
      };
      out.canvas.draw = (c) => {
        const img = new Image();
        img.onload = () => c.drawImage(img, 0, 0);
        img.src = urlS;
        if (img.complete) c.drawImage(img, 0, 0);
      };
    }

    if (description) {
      out.canvas.description = description;
    } else if (!qBlank && sBlank) {
      out.canvas.description =
        'Diagram: figure supplied with this question. Use the labels, axes or layout shown when working out the answer.';
    } else if (!qBlank) {
      out.canvas.description =
        'Diagram: figure as given with the question.';
    }

    if (solutionDescription) {
      out.canvas.solutionDescription = solutionDescription;
    } else if (qBlank && !sBlank) {
      out.canvas.solutionDescription =
        'Diagram: figure shown with the solution for this question. It may include completed labels, construction or a worked schematic.';
    } else if (!sBlank) {
      out.canvas.solutionDescription =
        'Diagram (solution): completed or annotated figure for this question.';
    }
  }

  return out;
}