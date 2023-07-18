var prevsum = 0, prev2sum = 0;
function ew() {
  var sum, notesLink;
  sumq = "";
  suma = "";
  do {
      sum = rndgen(1, 21, 0, 1, -1);
  } while(sum === prevsum || sum === prev2sum)
  prev2sum = prevsum;
  prevsum = sum;
  switch(sum) {
    case 1:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=5";
      sumq += "Define the term “Electronic Warfare”.";
      suma += "The military use of electronics involving actions taken to prevent or reduce an enemy's effective use of radiated " +
              "electromagnetic energy and actions taken to ensure our own effective use of radiated electromagnetic energy.";
      break;
    case 2:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=6";
      sumq += "Define the term “Electronic Counter Measures”.";
      suma += "It is that part of Electronic Warfare involving actions taken to prevent or reduce an enemy's effective use of the electromagnetic spectrum.";
      break;
    case 3:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=14";
      sumq += "In Electronic Counter Measures (ECM), what is meant by Confusion Jamming?";
      suma += "Jamming which produces spurious returns on an enemy radar display so that detection and interpretation of real returns becomes impossible.";
      break;
    case 4:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=16";
      sumq += "List two examples of Electronic Counter Measures confusion (noise) jamming techniques.";
      suma += "Any two from:<br>Spot Jamming<br>Sweep Jamming<br>Barrage Jamming<br>Multi-purpose Jamming.";
      break;
    case 5:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=14";
      sumq += "In Electronic Counter Measures, what is meant by Deception Jamming?";
      suma += "It is that type of jamming which is intended to make the enemy operator mistake a false target for a real one or to " +
              "misinterpret the intentions of his opponent.";
      break;
    case 6:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=17";
      sumq += "List two examples of Electronic Counter Measures deception jamming techniques.";
      suma += "Any two from:<br>False target generation<br>Angle deception<br>Range-gate stealing<br>Velocity-gate stealing<br>Noise modulated deception";
      break;
    case 7:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=11";
      sumq += "List two examples of non-electronic counter measures.";
      suma += "Any two from:<br>Airborne decoys<br>Chaff<br>Stealth techniques.";
      break;
    case 8:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=12";
      sumq += "Identify three design features that help to make an aircraft stealthy.";
      suma += "Shape of aircraft fuselage<br>Radar absorbent material<br>Radar transparent material";
      break;
    case 9:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=6";
      sumq += "Define the term Electronic Defence (ED)."
      suma += "That part of Electronic Warfare involving actions taken to ensure our effective use of the electromagnetic spectrum despite the enemy's use of ECM.";
      break;
    case 10:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=7";
      sumq += "State the three main categories of Electronic Support Measures (ESM).";
      suma += "Signal Intelligence Gathering (SIGINT)<br>Electronic Intelligence Gathering (ELINT)<br>Threat warning (RWR)."
      break;
    case 11:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=8";
      sumq += "State how an aircraft's Radar Warning Receiver (RWR) can be used within Electronic Support Measures (ESM)";
      suma += "When an aircraft is being illuminated by enemy radar it can detect what type of radar is being used.";
      break;
    case 12:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=10";
      sumq += "Where in the aircraft's Radar Warning Receiver would you find information on different radar characteristics.";
      suma += "The Threat Library";
      break;
    case 13:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=11";
      sumq += "List two methods by which an infra-red homing missile could be decoyed away from an aircraft.";
      suma += "Any two from:<br>Flares<br>Chaff<br>Towed decoy<br>Large Aircraft Infra-red Counter Measures (LAIRCM)";
      break;
    case 14:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=13";
      sumq += "Briefly explain the purpose of flares dropped by an aircraft.";
      suma += "To present a target to a missile which is more attractive than the aircraft.";
      break;
    case 15:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=18";
      sumq += "The word LASER is an acronym for?";
      suma += "LASER - <b>L</b>ight <b>A</b>mplification by <b>S</b>timulated <b>E</b>mission of <b>R</b>adiation";
      break;
    case 16:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=18";
      sumq += "List two of the main characteristics of laser light.";
      suma += "Any two from:<br>Monochromatic<br>Coherent<br>Intensely bright<br>Low divergence";
      break;
    case 17:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=19";
      sumq += "Lasers are classified into safety classes. Which is the most powerful/dangerous class of laser, I or IV?";
      suma += "Class IV.";
      break;
    case 18:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=21";
      sumq += "A Large Aircraft Infra-red Counter Measures (LAIRCM) system is composed of 4 main functional parts. List 3 of these (not LRUs).";
      suma += "Any three from:<br>" +
              "- A high power, directional active infra-red jammer<br>" +
              "- A stand-alone IR self-protection system with treat surveillance and warning, threat tracking, threat jamming and flare release control<br>" +
              "- A narrow beam, directable IR transmitter that accepts threat handoff from an acquisition sensor such as Missile Warning Receiver System (MAWS) " +
              "and provides closed loop tracking of the threat with a self-contained sensor<br>" +      
              "- A series of multi-spectral flare packs";
      break;
    case 19:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=21";
      sumq += "List 3 Large Aircraft Infra-red Counter Measures (LAIRCM) LRUs.";
      suma += "Any three from:<br>" +
              "A Signal Processor that controls the LAIRCM system operation<br>" +
              "A number of Small Transmitter Laser Assemblies, dependent on the size of the host aircraft<br>" +
              "A Control Indicator Unit (CIU) that allows the operator to initiate the system, carry out Built-in Test (BIT) and warn of missile detection<br>" +
              "Missile Warning Sensors which are placed around the periphery of the aircraft, in locations that maximise detection view from below the aircraft";
      break;
    case 20:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=21";
      sumq += "What are the four phases of the Large Aircraft Infra-red Counter Measures (LAIRCM) engagement sequence?";
      suma += "Detect, Handoff, Track and Jam.";
      break;
    case 21:
      notesLink = "images/20200424-RadarBook7EWv1_2-APO.pdf#page=22";
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