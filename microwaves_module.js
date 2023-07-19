var prevsum = 0, prev2sum = 0;
function microwaves(ctx, ctx2) {
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
            notesLink = "images/20200421-RadarBk2MicroAE_v1_2-APO.pdf#page=6";
            sumq += "Show the position of the “E” fields, “H” fields and “wall currents” in the cross-section of a cylindrical resonant cavity shown.";
            ctx.drawImage(cavitysect, 0, 0, 500, 300);
            ctx2.drawImage(cavityfields, -13, 0, 500, 300);
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
            ctx.drawImage(chokeflange, 0, 0, 500, 300);
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
            suma += "a. Airborne Intercept (AI), Terrain Following Radar (TFR) or Tracking Radar.<br>b. Narrow in azimuth, narrow in elevation.";
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
            suma += "It is a curved, bowl-shaped, aerial which produces a pencil beam";
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
    }
    
    var sumArray = [sumq, suma, notesLink];
    return sumArray;
}
