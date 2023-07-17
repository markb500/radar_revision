var prevsum = 0, prev2sum = 0;
function radtech(ctx) {
  var sum, notesLink;
  sumq = "";
  suma = "";
  do {
      sum = rndgen(1, 17, 0, 1, -1);
  } while(sum === prevsum || sum === prev2sum)
  prev2sum = prevsum;
  prevsum = sum;
  switch(sum) {
    case 1:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=7";
      sumq += "List the four operational advantages Frequency Agile (FA) radar has over Fixed Frequency (FF) radar.";
      suma += "a. Reduced clutter.<br>b. Reduced interference.<br>c. Elimination of second-time around echoes.<br>d. Double the detection range.";
      break;
    case 2:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=9";
      sumq += "Briefly explain why frequency agile radars do not suffer from second-time-around echoes.";
      suma += "Every pulse transmitted is at a slightly different frequency so a second time around echo will not be received.";
      break;
    case 3:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=10";
      sumq += "List two methods used to obtain frequency agility.";
      suma += "a. Spin Disc Magnetron<br>b. Frequency Agile Master Oscillator Power Amplifier (FAMOPA)";
      break;
    case 4:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=11";
      sumq += "Using the diagram of a Frequency Agile Master Oscillator Power Amplifier (FAMOPA) Transmitter:<br>" + 
              "a. Which block runs continually with a variable frequency output?<br>" + 
              "b. Which block controls the frequency of the Master Oscillator?<br>" +
              "c. Which block would normally be found in a Receiver?<br>" +
              "d. What device could be used as the Tx amplifier?";
      suma += "<br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
      suma += "a. Master Oscillator - provides a continuous, variable microwave frequency.<br>" +
              "b. Random Voltage Generator - produces a range of dc voltages to control the Master Oscillator frequency.<br>" +
              "c. The Local Oscillator.<br>" +
              "d. A Travelling Wave Tube.";
      ctx.drawImage(famopablk, 0, 0, 600, 400);
      break;
    case 5:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=13";
      sumq += "List two radar applications where the Monopulse technique is used.";
      suma += "Monopulse applications are used in Terrain Following Radar, Ground Mapping Radar and for continuous " + 
              "tracking of targets in Airborne Interception & Ground Mapping modes.";
      break;
    case 6:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=16";
      sumq += "When a two beam Monopulse radar has a ground target positioned in the centre of the two beams, " + 
              "what items of target information can be precisely measured?";
      suma += "The radar beam depression angle, slant range and plan range.";
      break;
    case 7:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=15";
      sumq += "What is the advantage of using Two Beam Monopulse ranging?";
      suma += "Every time the 'on bore sight' condition occurs, a pulse is generated telling the system to measure the slant range and depression angle.";
      break;
    case 8:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=13";
      sumq += "Briefly explain how Four Beam Monopulse techniques are used to track targets.";
      suma += "If the target moves out of the area where all four beams overlap then error signals are generated to manoeuvre the " + 
              "aerial so that the target is brought back into that area.";
      break;
    case 9:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=17";
      sumq += "Track While Scan (TWS) radar systems can locate and track a number of targets over several scans. " + 
              "List two items of information that can be determined about these targets.";
      suma += "Any two from:<br>track,<br>velocity,<br>elevation,<br>azimuth.";
      break;
    case 10:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=17";
      sumq += "Describe the scanning pattern of a Track While Scan Radar system.";
      suma += "A 1, 2 or 4 bar scanning pattern.";
      break;
    case 11:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=17";
      sumq += "Explain why information from a Track While Scan radar is not as accurate as that obtained from a dedicated angle tracking system.";
      suma += "In a TWS system, target positions are updated only once every scan and not continuously.";
      break;
    case 12:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=18";
      sumq += "What is the main advantage of airborne Moving Target Indication (MTI) radar systems?";
      suma += "They can detect targets which move relative to the ground.";
      break;
    case 13:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=18";
      sumq += "A disadvantage of airborne Moving Target Indication (MTI) radar systems is that of “Blind Speeds”. Briefly explain the cause of these.";
      suma += "These are caused by the target's direction and velocity away from the radar being the same as that of the radar itself i.e. no relative velocity.";
      break;
    case 14:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=18";
      sumq += "Why is Moving Target Indication (MTI) radar able to look down and see targets moving in relation to the ground?";
      suma += "Due to the Doppler frequency shift in the returns from moving targets whereas there is no shift from stationary targets.";
      break;
    case 15:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=18";
      sumq += "How does airborne Moving Target Indication (MTI) radar distinguish between wanted moving targets and unwanted stationary or fixed targets?";
      suma += "It uses the Doppler shift principle. Moving targets will constantly change the doppler frequency of their returns but " + 
              "stationary targets will have no frequency change of their returns.";
      break;
    case 16:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=19";
      sumq += "Briefly explain the basic principle of Pulse Compression.";
      suma += "The basic principle is that of transmitting long/wide pulses for long range then processing the received pulses as " +
              "short/narrow pulses for better target discrimination.";
      break;
    case 17:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=22";
      sumq += "Briefly explain why the Pulse Compression technique does not improve radar minimum range.";
      suma += "This is because the minimum range is determined by the transmitted pulse width and this will not change.";
      break;
    case 18:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=19";
      sumq += "State two advantages of using Pulse Compression in a pulse radar system?";
      suma += "The wide pulse width gives the benefits of long range and processing the return as a short pulse gives better range discrimination.";
      break;
    case 19:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=22";
      sumq += "How can Pulse Compression systems be improved?";
      suma += "By using more frequencies within the pulse, resulting in a narrower pulse width.";
      break;
    case 20:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=23";
      sumq += "Give 4 benefits of using Pulsed Doppler (ICW) radar systems.";
      suma += "They can:<br>detect targets at long range<br>detect moving targets against ground clutter<br>" +
              "track more than one target at a time<br>display high resolution ground maps.";
      break;
    case 21:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=27";
      sumq += "For Pulsed Doppler (ICW) systems using velocity tracking, what additional unwanted frequency returns are received along with those from targets?";
      suma += "Altitude return (F<sub>0</sub>), side lobe clutter and main beam clutter.";
      break;
    case 22:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=32";
      sumq += "What technique is employed to reduce the effects of Eclipsing and Blind Range in a Pulsed Doppler (ICW) radar system?";
      suma += "Jittering the PRF.";
      break;
    case 23:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=31";
      sumq += "In Pulsed Doppler (ICW) radar, what effect will increasing the PRF have on the maximum range?";
      suma += "It will decrease the maximum range.";
      break;
    case 24:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=28";
      sumq += "When used against high velocity closing targets, how does Pulsed Doppler (ICW) radar provide good (unambiguous) target velocity information?";
      suma += "By using a high PRF";
      break;
    case 25:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=37";
      sumq += "List two advantages of using a Synthetic Aperture Radar (SAR) based imaging systems compared with conventional photographic mapping.";
      suma += "Any two from:<br>Not affected by weather<br>Operational day or night<br>Maps are in plan view even at shallow grazing angles.";
      break;
    case 26:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=36";
      sumq += "What is the main use of Synthetic Aperture Radar (SAR)?";
      suma += "Used in Ground mapping.";
      break;
    case 27:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=37";
      sumq += "List the advantages of radar based imaging systems compared to conventional photographic mapping systems.";
      suma += "Not affected by weather<br>Operational day or night<br>Maps are in plan view even at shallow grazing angles.";
      break;
    case 28:
      notesLink = "images/20200422-RadarBook4RadTechv1_2-APO.pdf#page=37";
      sumq += "What makes Inverse Synthetic Aperture Radar (ISAR) particularly useful in identifying ships or other floating structures during maritime surveillance?";
      suma += "The movement in the sea enhances the processing.";
      break;
  }
  
  var sumArray = [sumq, suma, notesLink];
  return sumArray;
}