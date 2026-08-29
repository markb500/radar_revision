// js/generators/recce.js
// Clean ES module
import { rndgen, dp, thouSep, QLimitRepeats, isCanvasBlank, images } from '../utils.js';

const NOTES = 'images/20200422-RadarBook6ACReconSysCIv1_3-APO.pdf';
const CANVAS_W = 600;
const CANVAS_H = 400;

/** @type {number[]} */
let recentIds = [];

/**
 * @returns { question: string, solution: string, notesLink: string, canvas?: object }
 */
export function generate() {
  recentIds = QLimitRepeats(recentIds, 11);
  const sum = recentIds[recentIds.length - 1];

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
      notesLink = "images/20200422-RadarBook6ACReconSysCIv1_3-APO.pdf#page=7";
      sumq += "Explain the purpose and state an advantage of the Reconnaissance Airborne Pod for Tornado (RAPTOR).";
      suma += "The RAPTOR provides the RAF with an Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR) " +
              "asset used in reconnaissance and surveillance. Its purpose is to collect, record and transmit digital images " +
              "via data link in near real time. It can use both infra-red and visible light long range oblique photography.";
      break;
    case 2:
      notesLink = "images/20200422-RadarBook6ACReconSysCIv1_3-APO.pdf#page=8";
      sumq += "From the following, select the correct meaning of the acronym LOROP:<br>" +
      "a. Long Range Operational Photography<br>" +
      "b. Long Range Observation Photograph<br>" +
      "c. Long Range Oblique Photography<br>" +
      "d. Long Range Radar Observation Picture";
      suma += "c. <b>LO</b>ng <b>R</b>ange <b>O</b>blique <b>P</b>hotography.";
      break;
    case 3:
      notesLink = "images/20200422-RadarBook6ACReconSysCIv1_3-APO.pdf#page=7";
      sumq += "From the following list, select the types of image the Reconnaissance Airborne Pod for Tornado (RAPTOR) can provide:";
      ctx.drawImage(images.raptorimagetypesq, 0, 0, 600, 400);
      ctx2.drawImage(images.raptorimagetypesa, 0, 0, 600, 400);
      break;
    case 4:
      notesLink = "images/20200422-RadarBook6ACReconSysCIv1_3-APO.pdf#page=11";
      sumq += "Name any 2 sub-systems in the RAPTOR pod.";
      suma += "Any two from:<br>Sensor System<br>" +
              "Sensor Control Unit<br>" +
              "Reconnaissance Management System<br>" +
              "Airborne Data Link Terminal<br>" +
              "Ground Maintenance Panel<br>" +
              "Litton LN-214 Inertial Measurement Unit<br>" +
              "Navigation Electronics Unit<br>" +
              "Environmental Control System<br>" +
              "Pod Power Distribution Unit<br>";
      break;
    case 5:
      notesLink = "images/20200422-RadarBook6ACReconSysCIv1_3-APO.pdf#page=12";
      sumq += "State 4 navigation parameters provided by the aircraft navigation systems to the RAPTOR pod.";
      suma += "Any four from:<br>Aircraft Pitch and Roll attitude<br>" +
      "True heading<br>" +
      "Aircraft velocities (North, East and Vertical)<br>" +
      "Terrain height<br>" +
      "Aircraft height above mean sea level<br>" +
      "Aircraft latitude and longitude<br>" +
      "System time<br>" +
      "Aircraft Identity";
      break;
    case 6:
      notesLink = "images/20200422-RadarBook6ACReconSysCIv1_3-APO.pdf#page=13";
      sumq += "State the danger of the RAPTOR pod to ground personnel and the safety distance required when transmitting on the ground.";
      suma += "The possibility of transmitting High Energy Radio Frequency (RF). The required safety distance is at least 4 meters";
      break;
    case 7:
      notesLink = "images/20200422-RadarBook6ACReconSysCIv1_3-APO.pdf#page=14";
      sumq += "Describe the purpose of the Litening III Advanced Targeting Pod";
      suma += "The purpose of the LIII pod is to acquire, record, transmit and display both IR and CCD imagery as well as designate " +
              "targets for the delivery of precision guided weapons.";
      break;
    case 8:
      notesLink = "images/20200422-RadarBook6ACReconSysCIv1_3-APO.pdf#page=14";
      sumq += "List the functions provided by the Litening III Advanced Targeting Pod.";
      suma += "Day and Night Target Acquisition – Air to Air & Air to Ground<br>" +
              "Laser Designation and Range finding<br>" +
              "Laser Spot Search and Track<br>" +
              "Laser Marking";
      break;
    case 9:
      notesLink = "images/20200422-RadarBook6ACReconSysCIv1_3-APO.pdf#page=18";
      sumq += "State the 5 operating modes of the Litening III Advanced Targeting Pod."
      suma += "Standby<br>" +
              "Service<br>" +
              "Air to Ground (A/G)<br>" +
              "Air to Air (A/A)<br>" +
              "Navigation";
      break;
    case 10:
      notesLink = "images/20200422-RadarBook6ACReconSysCIv1_3-APO.pdf#page=19";
      sumq += "Name the 3 types of tracking available with the Litening III Advanced Targeting Pod.";
      suma += "Electro-Optical (EO) Tracking<br>" +
              "Inertial Tracking<br>" +
              "Manual Tracking";
      break;
    case 11:
      notesLink = "images/20200422-RadarBook6ACReconSysCIv1_3-APO.pdf#page=21";
      sumq += "Briefly describe the safety precautions that need to be adhered to when working with the Litening III Advanced Targeting Pod.";
      suma += "Laser safety - Eye protection must be worn and safety distances observed for each laser<br>" +
              "Mechanical Safety - Safety distance of 5 m whenever power is applied<br>" +
              "Electrical Safety - Electrical power must be disconnected when removing LRUs<br>" +
              "Hazardous Materials - Various hazardous materials are used within the pod";
      break;
  
  }

  const out = {
    question: sumq,
    solution: suma,
    notesLink: notesLink || NOTES
  };

  const qBlank = isCanvasBlank(offQ);
  const sBlank = offS ? isCanvasBlank(offS) : true;

  if (!qBlank || !sBlank) {
    const urlQ = offQ.toDataURL();
    const urlS = offS ? offS.toDataURL() : null;

    out.canvas = {
      width: CANVAS_W,
      height: CANVAS_H,
      withSolution: false,
      draw: null,
      questionDraw: null
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
    } else {
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
    if (!qBlank && sBlank) {
      out.canvas.description =
        'Diagram: figure supplied with this question. Use the labels, axes or layout shown when working out the answer.';
    } else if (qBlank && !sBlank) {
      out.canvas.solutionDescription =
        'Diagram: figure shown with the solution for this question. It may include completed labels, construction or a worked schematic.';
    } else {
      out.canvas.description =
        'Diagram: figure as given with the question.';
      out.canvas.solutionDescription =
        'Diagram (solution): completed or annotated figure for this question.';
    }

  }

  return out;
}
