var prevsum = 0, prev2sum = 0;
function recce(ctx, ctx2) {
  var sum, notesLink;
  sumq = "";
  suma = "";
  // do {
  //     sum = rndgen(1, 21, 0, 1, -1);
  // } while(sum === prevsum || sum === prev2sum)
  // prev2sum = prevsum;
  // prevsum = sum;
  sum = 11;
  switch(sum) {
    case 1:
      notesLink = "";
      sumq += "Explain the purpose and state an advantage of the Reconnaissance Airborne Pod for Tornado (RAPTOR).";
      suma += "The RAPTOR provides the RAF with an Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR) asset used in reconnaissance and surveillance. Its purpose is to collect digital images " +
              "of the ground in an area of interest. It can use both infra-red and visible light.";
      break;
    case 2:
      notesLink = "";
      sumq += "From the following, select the correct meaning of the acronym LOROP:<br>" +
      "a. Long Range Operational Photography<br>" +
      "b. Long Range Observation Photograph<br>" +
      "c. Long Range Oblique Photography<br>" +
      "d. Long Range Radar Observation Picture";
      suma += "c. <b>LO</b>ng <b>R</b>ange <b>O</b>blique <b>P</b>hotography.";
      break;
    case 3:
      notesLink = "";
      sumq += "From the following list, select the types of image the Reconnaissance Airborne Pod for Tornado (RAPTOR) can provide:";
      ctx.drawImage(raptorimagetypesq, 0, 0, 600, 400);
      ctx2.drawImage(raptorimagetypesa, 0, 0, 600, 400);
      break;
    case 4:
      notesLink = "";
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
      notesLink = "";
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
      notesLink = "";
      sumq += "State the danger of the RAPTOR pod to ground personnel and the safety distance required when transmitting on the ground.";
      suma += "The possibility of transmitting High Energy Radio Frequency (RF). The required safety distance is at least 4 meters";
      break;
    case 7:
      notesLink = "";
      sumq += "Describe the purpose of the Litening III Advanced Targeting Pod";
      suma += "The purpose of the LIII pod is to acquire, record, transmit and display both IR and CCD imagery as well as designate " +
              "targets for the delivery of precision guided weapons.";
      break;
    case 8:
      notesLink = "";
      sumq += "List the functions provided by the Litening III Advanced Targeting Pod.";
      suma += "Day and Night Target Acquisition – Air to Air & Air to Ground<br>" +
              "Laser Designation and Range finding<br>" +
              "Laser Spot Search and Track<br>" +
              "Laser Marking";
      break;
    case 9:
      notesLink = "";
      sumq += "State the 5 operating modes of the Litening III Advanced Targeting Pod."
      suma += "Standby<br>" +
              "Service<br>" +
              "Air to Ground (A/G)<br>" +
              "Air to Air (A/A)<br>" +
              "Navigation";
      break;
    case 10:
      notesLink = "";
      sumq += "Name the 3 types of tracking available with the Litening III Advanced Targeting Pod.";
      suma += "Electro-Optical (EO) Tracking<br>" +
              "Inertial Tracking<br>" +
              "Manual Tracking";
      break;
    case 11:
      notesLink = "";
      sumq += "Briefly describe the safety precautions that need to be adhered to when working with the Litening III Advanced Targeting Pod.";
      suma += "Laser safety - Eye protection must be worn and safety distances observed for each laser<br>" +
              "Mechanical Safety - Safety distance of 5 m whenever power is applied<br>" +
              "Electrical Safety - Electrical power must be disconnected when removing LRUs<br>" +
              "Hazardous Materials - Various hazardous materials are used within the pod";
      break;
    case 12:
      notesLink = "";
      sumq += "Where in the aircraft's Radar Warning Receiver would you find information on different radar characteristics.";
      suma += "The Threat Library";
      break;
    case 13:
      notesLink = "";
      sumq += "List two methods by which an infra-red homing missile could be decoyed away from an aircraft.";
      suma += "Any two from:<br>Flares<br>Chaff<br>Towed decoy<br>Large Aircraft Infra-red Counter Measures (LAIRCM)";
      break;
    case 14:
      notesLink = "";
      sumq += "Briefly explain the purpose of flares dropped by an aircraft.";
      suma += "To present a target to a missile which is more attractive than the aircraft.";
      break;
    case 15:
      notesLink = "";
      sumq += "The word LASER is an acronym for?";
      suma += "LASER - <b>L</b>ight <b>A</b>mplification by <b>S</b>timulated <b>E</b>mission of <b>R</b>adiation";
      break;
    case 16:
      notesLink = "";
      sumq += "List two of the main characteristics of laser light.";
      suma += "Any two from:<br>Monochromatic<br>Coherent<br>Intensely bright<br>Low divergence";
      break;
    case 17:
      notesLink = "";
      sumq += "Lasers are classified into safety classes. Which is the most powerful/dangerous class of laser, I or IV?";
      suma += "Class IV.";
      break;
    case 18:
      notesLink = "";
      sumq += "A Large Aircraft Infra-red Counter Measures (LAIRCM) system is composed of 4 main functional parts. List 3 of these (not LRUs).";
      suma += "Any three from:<br>" +
              "- A high power, directional active infra-red jammer<br>" +
              "- A stand-alone IR self-protection system with treat surveillance and warning, threat tracking, threat jamming and flare release control<br>" +
              "- A narrow beam, directable IR transmitter that accepts threat handoff from an acquisition sensor such as Missile Warning Receiver System (MAWS) " +
              "and provides closed loop tracking of the threat with a self-contained sensor<br>" +      
              "- A series of multi-spectral flare packs";
      break;
    case 19:
      notesLink = "";
      sumq += "List 3 Large Aircraft Infra-red Counter Measures (LAIRCM) LRUs.";
      suma += "Any three from:<br>" +
              "A Signal Processor that controls the LAIRCM system operation<br>" +
              "A number of Small Transmitter Laser Assemblies, dependent on the size of the host aircraft<br>" +
              "A Control Indicator Unit (CIU) that allows the operator to initiate the system, carry out Built-in Test (BIT) and warn of missile detection<br>" +
              "Missile Warning Sensors which are placed around the periphery of the aircraft, in locations that maximise detection view from below the aircraft";
      break;
    case 20:
      notesLink = "";
      sumq += "What are the four phases of the Large Aircraft Infra-red Counter Measures (LAIRCM) engagement sequence?";
      suma += "Detect, Handoff, Track and Jam.";
      break;
    case 21:
      notesLink = "";
      sumq += "Briefly describe 4 common Large Aircraft Infra-red Counter Measures (LAIRCM) safety procedures.";
      suma += "Any four from:<br>" +
              "- Maintenance of LASER equipment is to be undertaken only by qualified and authorised personnel.<br>" + 

              "- A safety cordon must be setup around the aircraft to ensure that no personnel, vehicles or aircraft are within the ocular " +
              "hazard distance, warning signs must be displayed and if required a safety man posted.<br>" +
              "- All personnel are wearing the appropriate protective clothing and eyewear.<br>" +
              "- Prior to proceeding with testing, personnel within the cordon undertaking live LASER firing must use the issued PPE and safety goggles.<br>" +
              "- Personnel working in surrounding areas are to receive LASER Safety Awareness training. The LASER Safety Officer (LSO) is to be aware of " +
              "all authorised personnel.<br>" +
              "- A member of the team (normally the Control Unit operator) informs ATC that a LASER firing is taking place and is to remain in contact for " +
              "the duration of the firing. The Supervisor is to remain present throughout the duration of the firing and in constant 2-way radio contact with " +
              "all team members.<br>" +
              "- Any incident involving exposure or suspected exposure of a person to LASER radiation is to be reported immediately to the engineering and " +
              "medical authorities. An eye injury will necessitate an immediate referral to a qualified ophthalmologist.";
      break;
  }
  
  var sumArray = [sumq, suma, notesLink];
  return sumArray;
}