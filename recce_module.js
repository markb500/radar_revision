var sumarrrecce = [], sumq, suma;
function recce(ctx, ctx2) {
  var sum, notesLink;
  sumq = "";
  suma = "";
  sumarrrecce = QLimitRepeats(sumarrrecce, 11);
  sum = sumarrrecce[sumarrrecce.length - 1];
  switch(sum) {
    case 1:
      notesLink = "images/20200422-RadarBook6ACReconSysCIv1_3-APO.pdf#page=7";
      sumq += "Explain the purpose and state an advantage of the Reconnaissance Airborne Pod for Tornado (RAPTOR).";
      suma += "The RAPTOR provides the RAF with an Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR) asset used in reconnaissance and surveillance. Its purpose is to collect digital images " +
              "of the ground in an area of interest. It can use both infra-red and visible light.";
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
      ctx.drawImage(raptorimagetypesq, 0, 0, 600, 400);
      ctx2.drawImage(raptorimagetypesa, 0, 0, 600, 400);
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
      sumq += "State 4 navigation parameters provided by the INS to the RAPTOR pod.";
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
  
  var sumArray = [sumq, suma, notesLink];
  return sumArray;
}