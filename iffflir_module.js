var prevsum = 0, prev2sum = 0;
function iffflir(ctx, ctx2) {
  var sum, notesLink;
  sumq = "";
  suma = "";
  do {
      sum = rndgen(1, 12, 0, 1, -1);
  } while(sum === prevsum || sum === prev2sum)
  prev2sum = prevsum;
  prevsum = sum;
  switch(sum) {
    case 1:
      notesLink = "images/20200422-RadarBook5IFF_FLIRCI_v1_3-APO.pdf#page=9";
      sumq += "In the IFF System shown below what is the purpose of the Transponder unit";
      suma += "<br><br><br><br><br><br><br><br><br><br><br><br>";
      suma += "The Transponder contains the main transmitter and receiver modules. The incoming interrogation pulses are decoded by the receiver " +
              "and the coded reply set up on the control panel is triggered and sent back by the transmitter module.";
      ctx.drawImage(iffssrblk, 0, 0, 600, 400);
      break;
    case 2:
      notesLink = "images/20200422-RadarBook5IFF_FLIRCI_v1_3-APO.pdf#page=9";
      sumq += "In the IFF System shown below what is the purpose of the Ejection Seat relay ";
      suma += "<br><br><br><br><br><br><br><br><br><br><br><br>";
      suma += "On aircraft fitted with ejection seats, when an ejection occurs an electrical connection on the seat is disconnected which " +
              "activates the transponder in emergency mode.";
      ctx.drawImage(iffssrblk, 0, 0, 600, 400);
      break;
    case 3:
      notesLink = "images/20200422-RadarBook5IFF_FLIRCI_v1_3-APO.pdf#page=9";
      sumq += "In the IFF System shown below what information does the Air data computer provide and for which mode.";
      suma += "<br><br><br><br><br><br><br><br><br><br><br><br>";
      suma += "The Air Data Computer supplies height information for Altitude Mode C.";
      ctx.drawImage(iffssrblk, 0, 0, 600, 400);
      break;
    case 4:
      notesLink = "images/20200422-RadarBook5IFF_FLIRCI_v1_3-APO.pdf#page=7";
      sumq += "Fill in the blanks in the Modes of Interrogation table below."
      ctx.drawImage(iffssrmodesq, 0, 0, 600, 400);
      ctx2.drawImage(iffssrmodesa, 0, 0, 600, 400);
      break;
    case 5:
      notesLink = "images/20200422-RadarBook5IFF_FLIRCI_v1_3-APO.pdf#page=8";
      sumq += "What Air Traffic system is a mode S transponder used with?";
      suma += "The Traffic Collision Avoidance System (TCAS).";
      break;
    case 6:
      notesLink = "images/20200422-RadarBook5IFF_FLIRCI_v1_3-APO.pdf#page=14";
      sumq += "Which region of the infra-red frequency band is used for Thermal Imaging?";
      suma += "The mid to far IR region (8 - 14 &mu;m)";
      break;
    case 7:
      notesLink = "images/20200422-RadarBook5IFF_FLIRCI_v1_3-APO.pdf#page=14";
      sumq += "Above what temperature do objects emit infra-red (IR) radiation?";
      suma += "Above absolute zero (-273.15 &deg;C or 0 K), objects will emit infra-red (IR) radiation.";
      break;
    case 8:
      notesLink = "images/20200422-RadarBook5IFF_FLIRCI_v1_3-APO.pdf#page=14";
      sumq += "What happens to the frequency and wavelength of emitted infra-red radiation as objects get hotter?";
      suma += "The frequency increases and the wavelength decreases.";
      break;
    case 9:
      notesLink = "images/20200422-RadarBook5IFF_FLIRCI_v1_3-APO.pdf#page=18";
      sumq += "State two advantages of IR thermal imaging systems."
      suma += "Any two from:<br>" +
              "Passive and undetectable in use (everything emits IR radiation)<br>" +
              "Independent of natural or artificial lighting<br>" +
              "Not easily deceived by camouflage. ";
      break;
    case 10:
      notesLink = "images/20200422-RadarBook5IFF_FLIRCI_v1_3-APO.pdf#page=18";
      sumq += "State two disadvantages of IR thermal imaging systems.";
      suma += "Any two from:<br>" +
              "- Atmospheric Attenuation (absorbs and scatters IR wave lengths)<br>" +
              "- The quality of IR images is generally lower than that of visual images and some detail may be lost<br>" +
              "- The true size and shape of hot objects may be exaggerated or disguised by thermal blooming (distortions) and halation (blurring) effects<br>" +
              "- Sensor head / optical systems are made from very expensive, special materials. Some are toxic and even radioactive so extreme care " +
              "must be taken when handling these"
      break;
    case 11:
      notesLink = "images/20200422-RadarBook5IFF_FLIRCI_v1_3-APO.pdf#page=16";
      sumq += "In the Forward Looking Infra-Red (FLIR) system shown, briefly state the function of:<br>" +
              "a. The Shutter & Window Assembly.<br>" +
              "b. The FLIR Electronics Unit.<br>" +
              "c. The Cooling Engine.<br>" +
              "d. The FLIR Sensor Head Optics.";
      suma += "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
      suma += "a. The FLIR Shutter protects the FLIR window from damage during weapon firing or in adverse weather conditions. " +
              "The FLIR Window in turn protects the Sensor Head. It is made from a special material such as low resistivity Germanium " +
              "which allows maximum transfer of the IR energy through it.<br><br>" +
              "b. The FLIR Electronics unit contains the processing electronics. It converts the detectors electrical signal representing " +
              "the different IR temperature levels into a form suitable for the various displays. " +
              "This unit also interfaces with the FLIR control panel and the Avionics Data Bus of the aircraft.<br><br>" +
              "c. FLIR Cooling Engine: Cooling of the detector is essential for optimum performance of the system. " +
              "Cooling allows small differences or variations in the temperature of the viewed scene to be easily recognised. " +
              "Without cooling of the detectors, their own heat output would prevent detection of these small temperature variations, " +
              "reducing the sensitivity to external IR radiation.<br><br>" +
              "d. The FLIR Sensor Head Optics unit contains all the electro mechanicals, optical sensors, lenses, mirrors and prism systems. " +
              "The optical system collects the thermal IR radiation and focuses the image onto one or more IR detectors in a " +
              "similar way to a standard light camera.";
      ctx.drawImage(flirblk, 0, 0, 600, 400);
      break;
    case 12:
      notesLink = "images/20200422-RadarBook5IFF_FLIRCI_v1_3-APO.pdf#page=16";
      sumq += "Explain why ordinary glass cannot be used for infra-red lenses.";
      suma += "Ordinary/conventional glass is opaque to IR wavelengths greater than 3 &mu;m, so special materials must used for lenses and windows.";
      break;
  }
  
  var sumArray = [sumq, suma, notesLink];
  return sumArray;
}