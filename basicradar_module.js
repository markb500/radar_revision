var prevsum = 0, prev2sum = 0;
function basicradar(ctx) {
    var sum;
    sumq = "";
    suma = "";
    // do {
    //     sum = rndgen(1, 16, 0, 1, -1);
    // } while(sum === prevsum || sum === prev2sum)
    // prev2sum = prevsum;
    // prevsum = sum;
    sum = 32;
    switch(sum) {
        case 1:
            var notesLink = "";
            txrxtime = rndgen(100, 250, 0, 10, -1);
            slantrange = (300 * txrxtime) / 2;
            sumq += "Calculate the slant range to a target, in km, as measured by a pulsed radar, given that the time interval between " + 
                    "pulse transmission and reception is " + txrxtime + "&nbsp;&#956s&nbsp;(" + txrxtime + "&nbsp;x&nbsp;10<sup>-6</sup>&nbsp;s) " + 
                    "and the Speed of Light (c) is 300&nbsp;x&nbsp;10<sup>6</sup>&nbsp;m/s."
            suma += "$$\\begin{aligned}slant\\ range &= \\frac{speed \\times time}{2}\\\\[5pt]";
            suma += "&= \\frac{300 \\times 10^6 \\times " + txrxtime + " \\times 10^{-6}}{2} \\\\[5pt]";
            suma += "&= \\frac{" + thouSep(slantrange * 2, "\\ ") + "}{2}\\\\[5pt]";
            suma += "&=\\underline{\\mathbf{" + (slantrange / 1000) + "\\ km}}\\end{aligned}$$";
            break;
        case 2:
            slantrange = rndgen(12, 35, 0, 1, -1);
            txrxtime = dp(slantrange * 6.7, 2, -1);
            sumq += "Calculate the time interval between pulse transmission and reception if the target slant range is " + slantrange + 
                    " km. The Speed of Light (c) is 300 x 10<sup>6</sup> m/s.";
            suma += "$$\\begin{aligned}slant\\ range &= \\frac{time}{6.7}\\\\[5pt]";
            suma += "time &= slant\\ range \\times 6.7 \\\\[5pt]";
            suma += "&= " + slantrange + " \\times 6.7 \\\\[5pt]";
            suma += "&=\\underline{\\mathbf{" + txrxtime + "\\ &#956s}}\\end{aligned}$$";
            break;
        case 3:
            sumq += "For Continuous Wave (CW) radar, <br>a.  What information does it provide? <br>b.  What principle does it use?"
            suma += "a.  Radial or relative velocity of a tgt. <br>b.  Doppler shift is measured.";
            break;
        case 4:
            sumq += "For Continuous Wave (CW) radar, what is the effect on the returning signal frequency compared to the transmitted " + 
                    "signal frequency for an opening target?";
            suma += "The received frequency is decreased.";
            break;
        case 5:
            sumq += "For Continuous Wave (CW) radar, what is the effect on the returning signal frequency compared to the transmitted " + 
                    "signal frequency for a closing target?";
            suma += "The received frequency is increased.";
            break;
        case 6:
            sumq += "With reference to the Basic Pulsed Radar Block Diagram shown, which block controls maximum range?";
            suma += "The MTU.";
            ctx.drawImage(basicradblk, 0, 0, 500, 300);
            break;
        case 7:
            sumq += "With reference to the Basic Pulsed Radar Block Diagram shown, which block controls minimum range?";
            suma += "The Modulator.";
            ctx.drawImage(basicradblk, 0, 0, 500, 300);
            break;
        case 8:
            sumq += "With reference to the Basic Pulsed Radar Block Diagram shown, which block controls the frequency transmitted by the radar?";
            suma += "The RF Oscillator.";
            ctx.drawImage(basicradblk, 0, 0, 500, 300);
            break;
        case 9:
            sumq += "With reference to the Basic Pulsed Radar Block Diagram shown, what is the function of the dashed line connecting the Aerial and the Display?";
            suma += "<br><br><br><br><br><br><br><br><br><br><br>To synchronise the Aerial azimuth and elevation information with the Display.";
            ctx.drawImage(basicradblk, 0, 0, 500, 300);
            break;
        case 10:
            sumq += "With reference to the Basic Pulsed Radar Block Diagram shown, which block amplifies and demodulates the Radar echo signal?";
            suma += "The Receiver.";
            ctx.drawImage(basicradblk, 0, 0, 500, 300);
            break;
        case 11:
            sumq += "With reference to the Basic Pulsed Radar Block Diagram shown, which block protects the Receiver from the transmitted energy?";
            suma += "The T/R Switch.";
            ctx.drawImage(basicradblk, 0, 0, 500, 300);
            break;
        case 12:
            sumq += "With reference to the Basic Pulsed Radar Block Diagram shown, which block controls the beam width of the Radar transmission?";
            suma += "The Aerial.";
            ctx.drawImage(basicradblk, 0, 0, 500, 300);
            break;
        case 13:
            do {
                var vx = rndgen(450, 680, 0, 5, -1);
                var vy = rndgen(450, 680, 0, 5, -1);
                var vclosing = thouSep(vx + vy, "\\ ");
            } while (vx === vy);
            sumq += "Calculate the relative velocity of the two aircraft shown.";
            suma += "<br><br><br>"
            suma += "$$\\begin{aligned}relative\\ velocity &= v_x + v_y\\\\[5pt]";
            suma += "&=" + vx + "+" + vy + "\\\\[5pt]";
            suma += "&=\\underline{\\mathbf{" + vclosing + "\\ kts}}\\end{aligned}$$"
            ctx.drawImage(jetsclosing, 0, 0, 500, 100);
            ctx.font = "20px Comic Sans MS";
            ctx.textAlign = "center";
            ctx.fillText(vx + " kts", 120, 70);
            ctx.fillText(vy + " kts", 380, 70);
            break;
        case 14:
            do {
                var vx = rndgen(450, 680, 0, 5, -1);
                var vy = rndgen(450, 680, 0, 5, -1);
                var vopening = thouSep(vy - vx, "\\ ");
            } while (vx === vy);
            sumq += "Calculate the relative velocity of the two aircraft shown.";
            suma += "<br><br><br>"
            suma += "$$\\begin{aligned}relative\\ velocity &= v_y - v_x\\\\[5pt]";
            suma += "&=" + vy + "-" + vx + "\\\\[5pt]";
            suma += "&=\\underline{\\mathbf{" + vopening + "\\ kts}}\\end{aligned}$$"
            ctx.drawImage(jetsopening, 0, 0, 500, 100);
            ctx.font = "20px Comic Sans MS";
            ctx.textAlign = "center";
            ctx.fillText(vx + " kts", 110, 80);
            ctx.fillText(vy + " kts", 370, 80);
            break;
        case 15:
            sumq += "With reference to the Basic Continuous Wave (CW) Radar Block Diagram shown, briefly state the function of the CW Transmitter (Tx).";
            suma += "<br><br><br><br><br><br><br><br>";
            suma += "Produces the transmitted CW output signal of constant amplitude and frequency. A sample is also sent to the " + 
                    "mixer as the local oscillator frequency.";
            ctx.drawImage(basiccwblk, 0, 0, 500, 300);
            break;
        case 16:
            sumq += "With reference to the Basic Continuous Wave (CW) Radar Block Diagram shown, briefly state the function of the Mixer.";
            suma += "<br><br><br><br><br><br><br><br>";
            suma += "Combines the sample of the transmitter frequency with the received CW frequency and produces the Doppler Shift " + 
                    "frequency which is fed to the receiver.";
            ctx.drawImage(basiccwblk, 0, 0, 500, 300);
            break;
        case 17:
            sumq += "With reference to the Basic Continuous Wave (CW) Radar Block Diagram shown, briefly state the function of the Receiver (Rx).";
            suma += "<br><br><br><br><br><br><br><br>";
            suma += "Amplifies and processes the Doppler Shift signal into a suitable format for display.";
            ctx.drawImage(basiccwblk, 0, 0, 500, 300);
            break;
        case 18:
            sumq += "With reference to the Basic Frequency Modulated Continuous Wave (FMCW) Radar Block Diagram shown, briefly state the function of the Frequency Modulator.";
            suma += "<br><br><br><br><br><br><br><br><br><br><br>";
            suma += "Produces a low frequency modulation signal for the CW Transmitter, which varies linearly over a fixed frequency range.";
            ctx.drawImage(basicfmcwblk, 0, 0, 500, 300);
            break;
        case 19:
            sumq += "With reference to the Basic Frequency Modulated Continuous Wave (FMCW) Radar Block Diagram shown, briefly state the function of the CW Transmitter.";
            suma += "<br><br><br><br><br><br><br><br><br><br><br>";
            suma += "Produces a frequency modulated signal of constant amplitude.";
            ctx.drawImage(basicfmcwblk, 0, 0, 500, 300);
            break;
        case 20:
            sumq += "With reference to the Basic Frequency Modulated Continuous Wave (FMCW) Radar Block Diagram shown, briefly state the function of the Mixer.";
            suma += "<br><br><br><br><br><br><br><br><br><br><br>";
            suma += "Combines the current transmitted and received FMCW frequencies producing the modulation frequency difference.";
            ctx.drawImage(basicfmcwblk, 0, 0, 500, 300);
            break;
        case 21:
            sumq += "With reference to the Basic Frequency Modulated Continuous Wave (FMCW) Radar Block Diagram shown, briefly state the function of the Receiver.";
            suma += "<br><br><br><br><br><br><br><br><br><br><br>";
            suma += "Amplifies and processes the FM modulation frequency difference into a suitable format.";
            ctx.drawImage(basicfmcwblk, 0, 0, 500, 300);
            break;
        case 22:
            sumq += "Explain what is meant by the term Primary radar system.";
            suma += "Primary radars are single independent systems which do not require target co-operation.";
            break;
        case 23:
            sumq += "Give two examples of Primary radar systems.";
            suma += "Any two from: Search and Surveillance, Airborne Interception, Weather Radar, Radar Altimeter, Ground Mapping Radar, Terrain Following Radar.";
            break;
        case 24:
            sumq += "Explain what is meant by the term Secondary radar system";
            suma += "A system which relies on the co-operation of the target.";
            break;
        case 25:
            sumq += "Give two examples of Secondary radar systems.";
            suma += "Any two from: IFF/SSR, TACAN, Traffic Collision Avoidance System (TCAS).";
            break;
        case 26:
            sumq += "Describe the characteristics of primary radar systems.";
            suma += "Primary radars only require 1 radar, do not require the co-operation of the target, the TX energy path is two way, they have high " + 
                    "power, 1 aerial, suffer from clutter, give bearing, elevation and range and are affected by target size and position.";
            break;
        case 27:
            sumq += "Describe the characteristics of secondary radar systems.";
            suma += "Secondary radar systems require the co-operation of 2 radars,<br>the Tx energy path is one-way,<br>they have low Tx power,<br>" + 
                    "2 aerials,<br>do not suffer from clutter,<br>can provide identity, altitude, bearing and slant range information.";
            break;
        case 28:
            sumq += "List two examples of target information that can be determined by a primary pulsed radar system.";
            suma += "Any two from: bearing, elevation, range";
            break;
        case 29:
            sumq += "What target information can be determined by a continuous wave (CW) primary radar system?";
            suma += "Radial or relative velocity";
            break;
        case 30:
            sumq += "What target information can be determined by a frequency modulated continuous wave (FMCW) primary radar?";
            suma += "Range";
            break;
        case 31:
            sumq += "How do basic radar systems determine the azimuth (or bearing) and elevation of a target? ";
            suma += "By using the angular position of the radar beam/scanner.";
            break;
    }
    
    var sumArray = [sumq, suma, notesLink];
    return sumArray;
}