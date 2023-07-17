var prevsum = 0, prev2sum = 0;
function basicradar(ctx) {
    var notesLink, slantrange, sum, pp, pw, prf, mp, ps;
    sumq = "";
    suma = "";
    do {
        sum = rndgen(1, 31, 0, 1, -1);
    } while(sum === prevsum || sum === prev2sum)
    prev2sum = prevsum;
    prevsum = sum;
    switch(sum) {
        case 1:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=7";
            txrxtime = rndgen(100, 250, 0, 10, -1);
            slantrange = (300 * txrxtime) / 2;
            sumq += "Calculate the slant range to a target, in km, as measured by a pulsed radar, given that the time interval between " + 
                    "pulse transmission and reception is " + txrxtime + "&nbsp;&#956s&nbsp;(" + txrxtime + "&nbsp;x&nbsp;10<sup>-6</sup>&nbsp;s) " + 
                    "and the Speed of Light (c) is 300&nbsp;x&nbsp;10<sup>6</sup>&nbsp;m/s.";
            suma += "$$\\begin{aligned}slant\\ range &= \\frac{speed \\times time}{2}\\\\[5pt]";
            suma += "&= \\frac{300 \\times 10^6 \\times " + txrxtime + " \\times 10^{-6}}{2} \\\\[5pt]";
            suma += "&= \\frac{" + thouSep(slantrange * 2, "\\ ") + "}{2}\\\\[5pt]";
            suma += "&=\\underline{\\mathbf{" + (slantrange / 1000) + "\\ Km}}\\end{aligned}$$";
            break;
        case 2:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=7";
            slantrange = rndgen(12, 35, 0, 1, -1);
            txrxtime = dp(slantrange * 6.7, 2, -1);
            sumq += "Calculate the time interval between pulse transmission and reception if the target slant range is " + slantrange + 
                    " Km. The Speed of Light (c) is 300 x 10<sup>6</sup> m/s.";
            suma += "$$\\begin{aligned}slant\\ range &= \\frac{time}{6.7\\times 10^{-6}}\\\\[5pt]";
            suma += "time &= slant\\ range \\times 6.7\\times 10^{-6} \\\\[5pt]";
            suma += "&= " + slantrange + " \\times 6.7\\times 10^{-6} \\\\[5pt]";
            suma += "&=\\underline{\\mathbf{" + txrxtime + "\\ &#956s}}\\end{aligned}$$";
            break;
        case 3:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=20";
            sumq += "For Continuous Wave (CW) radar, <br>a.  What information does it provide? <br>b.  What principle does it use?";
            suma += "a.  Radial or relative velocity of a tgt. <br>b.  Doppler shift is measured.";
            break;
        case 4:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=9";
            sumq += "For Continuous Wave (CW) radar, what is the effect on the returning signal frequency compared to the transmitted " + 
                    "signal frequency for an opening target?";
            suma += "The received frequency is decreased.";
            break;
        case 5:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=9";
            sumq += "For Continuous Wave (CW) radar, what is the effect on the returning signal frequency compared to the transmitted " + 
                    "signal frequency for a closing target?";
            suma += "The received frequency is increased.";
            break;
        case 6:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=16";
            sumq += "With reference to the Basic Pulsed Radar Block Diagram shown, which block controls maximum range?";
            suma += "The MTU.";
            ctx.drawImage(basicradblk, 0, 0, 500, 300);
            break;
        case 7:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=16";
            sumq += "With reference to the Basic Pulsed Radar Block Diagram shown, which block controls minimum range?";
            suma += "The Modulator.";
            ctx.drawImage(basicradblk, 0, 0, 500, 300);
            break;
        case 8:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=16";
            sumq += "With reference to the Basic Pulsed Radar Block Diagram shown, which block controls the frequency transmitted by the radar?";
            suma += "The RF Oscillator.";
            ctx.drawImage(basicradblk, 0, 0, 500, 300);
            break;
        case 9:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=16";
            sumq += "With reference to the Basic Pulsed Radar Block Diagram shown, what is the function of the dashed line connecting the Aerial and the Display?";
            suma += "<br><br><br><br><br><br><br><br><br><br><br>To synchronise the Aerial azimuth and elevation information with the Display.";
            ctx.drawImage(basicradblk, 0, 0, 500, 300);
            break;
        case 10:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=16";
            sumq += "With reference to the Basic Pulsed Radar Block Diagram shown, which block amplifies and demodulates the Radar echo signal?";
            suma += "The Receiver.";
            ctx.drawImage(basicradblk, 0, 0, 500, 300);
            break;
        case 11:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=16";
            sumq += "With reference to the Basic Pulsed Radar Block Diagram shown, which block protects the Receiver from the transmitted energy?";
            suma += "The T/R Switch.";
            ctx.drawImage(basicradblk, 0, 0, 500, 300);
            break;
        case 12:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=16";
            sumq += "With reference to the Basic Pulsed Radar Block Diagram shown, which block controls the beam width of the Radar transmission?";
            suma += "The Aerial.";
            ctx.drawImage(basicradblk, 0, 0, 500, 300);
            break;
        case 13:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=10";
            do {
                var vx = rndgen(450, 680, 0, 5, -1);
                var vy = rndgen(450, 680, 0, 5, -1);
                var vclosing = thouSep(vx + vy, "\\ ");
            } while (vx === vy);
            sumq += "Calculate the relative velocity of the two aircraft shown.";
            suma += "<br><br><br>";
            suma += "$$\\begin{aligned}relative\\ velocity &= v_x + v_y\\\\[5pt]";
            suma += "&=" + vx + "+" + vy + "\\\\[5pt]";
            suma += "&=\\underline{\\mathbf{" + vclosing + "\\ kts}}\\end{aligned}$$";
            ctx.drawImage(jetsclosing, 0, 0, 500, 100);
            ctx.font = "20px Comic Sans MS";
            ctx.textAlign = "center";
            ctx.fillText(vx + " kts", 120, 70);
            ctx.fillText(vy + " kts", 380, 70);
            break;
        case 14:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=10";
            do {
                var vx = rndgen(450, 680, 0, 5, -1);
                var vy = rndgen(450, 680, 0, 5, -1);
                var vopening = thouSep(vy - vx, "\\ ");
            } while (vx === vy);
            sumq += "Calculate the relative velocity of the two aircraft shown.";
            suma += "<br><br><br>";
            suma += "$$\\begin{aligned}relative\\ velocity &= v_y - v_x\\\\[5pt]";
            suma += "&=" + vy + "-" + vx + "\\\\[5pt]";
            suma += "&=\\underline{\\mathbf{" + vopening + "\\ kts}}\\end{aligned}$$";
            ctx.drawImage(jetsopening, 0, 0, 500, 100);
            ctx.font = "20px Comic Sans MS";
            ctx.textAlign = "center";
            ctx.fillText(vx + " kts", 110, 80);
            ctx.fillText(vy + " kts", 370, 80);
            break;
        case 15:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=20";
            sumq += "With reference to the Basic Continuous Wave (CW) Radar Block Diagram shown, briefly state the function of the CW Transmitter (Tx).";
            suma += "<br><br><br><br><br><br><br><br>";
            suma += "Produces the transmitted CW output signal of constant amplitude and frequency. A sample is also sent to the " + 
                    "mixer as the local oscillator frequency.";
            ctx.drawImage(basiccwblk, 0, 0, 500, 300);
            break;
        case 16:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=20";
            sumq += "With reference to the Basic Continuous Wave (CW) Radar Block Diagram shown, briefly state the function of the Mixer.";
            suma += "<br><br><br><br><br><br><br><br>";
            suma += "Combines the sample of the transmitter frequency with the received CW frequency and produces the Doppler Shift " + 
                    "frequency which is fed to the receiver.";
            ctx.drawImage(basiccwblk, 0, 0, 500, 300);
            break;
        case 17:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=20";
            sumq += "With reference to the Basic Continuous Wave (CW) Radar Block Diagram shown, briefly state the function of the Receiver (Rx).";
            suma += "<br><br><br><br><br><br><br><br>";
            suma += "Amplifies and processes the Doppler Shift signal into a suitable format for display.";
            ctx.drawImage(basiccwblk, 0, 0, 500, 300);
            break;
        case 18:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=22";
            sumq += "With reference to the Basic Frequency Modulated Continuous Wave (FMCW) Radar Block Diagram shown, " + 
                    "briefly state the function of the Frequency Modulator.";
            suma += "<br><br><br><br><br><br><br><br><br><br><br>";
            suma += "Produces a low frequency modulation signal for the CW Transmitter, which varies linearly over a fixed frequency range.";
            ctx.drawImage(basicfmcwblk, 0, 0, 500, 300);
            break;
        case 19:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=22";
            sumq += "With reference to the Basic Frequency Modulated Continuous Wave (FMCW) Radar Block Diagram shown, briefly state the function of the CW Transmitter.";
            suma += "<br><br><br><br><br><br><br><br><br><br><br>";
            suma += "Produces a frequency modulated signal of constant amplitude.";
            ctx.drawImage(basicfmcwblk, 0, 0, 500, 300);
            break;
        case 20:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=22";
            sumq += "With reference to the Basic Frequency Modulated Continuous Wave (FMCW) Radar Block Diagram shown, briefly state the function of the Mixer.";
            suma += "<br><br><br><br><br><br><br><br><br><br><br>";
            suma += "Combines the current transmitted and received FMCW frequencies producing the modulation frequency difference.";
            ctx.drawImage(basicfmcwblk, 0, 0, 500, 300);
            break;
        case 21:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=22";
            sumq += "With reference to the Basic Frequency Modulated Continuous Wave (FMCW) Radar Block Diagram shown, briefly state the function of the Receiver.";
            suma += "<br><br><br><br><br><br><br><br><br><br><br>";
            suma += "Amplifies and processes the FM modulation frequency difference into a suitable format.";
            ctx.drawImage(basicfmcwblk, 0, 0, 500, 300);
            break;
        case 22:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=12";
            sumq += "Explain what is meant by the term Primary radar system.";
            suma += "Primary radars are single independent systems which do not require target co-operation.";
            break;
        case 23:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=15";
            sumq += "Give two examples of Primary radar systems.";
            suma += "Any two from: Search and Surveillance, Airborne Interception, Weather Radar, Radar Altimeter, Ground Mapping Radar, Terrain Following Radar.";
            break;
        case 24:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=13";
            sumq += "Explain what is meant by the term Secondary radar system";
            suma += "A system which relies on the co-operation of the target.";
            break;
        case 25:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=15";
            sumq += "Give two examples of Secondary radar systems.";
            suma += "Any two from: IFF/SSR, TACAN, Traffic Collision Avoidance System (TCAS).";
            break;
        case 26:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=12";
            sumq += "Describe the characteristics of primary radar systems.";
            suma += "Primary radars only require 1 radar, do not require the co-operation of the target, the TX energy path is two way, they have high " + 
                    "power, 1 aerial, suffer from clutter, give bearing, elevation and range and are affected by target size and position.";
            break;
        case 27:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=13";
            sumq += "Describe the characteristics of secondary radar systems.";
            suma += "Secondary radar systems require the co-operation of 2 radars,<br>the Tx energy path is one-way,<br>they have low Tx power,<br>" + 
                    "2 aerials,<br>do not suffer from clutter,<br>can provide identity, altitude, bearing and slant range information.";
            break;
        case 28:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=14";
            sumq += "List two examples of target information that can be determined by a primary pulsed radar system.";
            suma += "Any two from: bearing, elevation, range";
            break;
        case 29:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=14";
            sumq += "What target information can be determined by a continuous wave (CW) primary radar system?";
            suma += "Radial or relative velocity";
            break;
        case 30:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=14";
            sumq += "What target information can be determined by a frequency modulated continuous wave (FMCW) primary radar?";
            suma += "Range";
            break;
        case 31:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=6";
            sumq += "How do basic radar systems determine the azimuth (or bearing) and elevation of a target? ";
            suma += "By using the angular position of the radar beam/scanner.";
            break;
        case 32:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=26";
            sumq += "List four external factors that affect radar performance.";
            suma += "Clutter<br>External Noise<br>Atmospheric Attenuation<br>Target Characteristics";
            break;
        case 33:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=26";
            sumq += "Explain the term 'Clutter' as it applies to a pulsed radar.";
            suma += "Clutter is echoes from unwanted objects/targets.";
            break;
        case 34:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=27";
            sumq += "List three characteristics of a target that affect radar performance.";
            suma += "Any three from:<br>&nbsp;&nbsp;&nbsp;&nbsp;Material,<br>&nbsp;&nbsp;&nbsp;&nbsp;Size,<br>" + 
                    "&nbsp;&nbsp;&nbsp;&nbsp;Shape,<br>&nbsp;&nbsp;&nbsp;&nbsp;Distance from transmitter";
            break;
        case 35:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=34";
            slantrange = rndgen(120, 180, 1, 10, -1);
            ps = dp(slantrange * 6.7, 1, -1);
            prf = dp(1 / (PS * Math.pow(10, -6)), 1, -1);
            sumq += "Calculate the Pulse Repetition Frequency (PRF) required to give a radar system a maximum range of " + slantrange + " Km."
            suma += "$$\\begin{aligned}slant \\ range &= \\frac{Tx/Rx\\ time}{6.7\\times 10^{-6}}\\\\[5pt]";
            suma += "slant\\ range\\times 6.7\\times 10^{-6}&=Tx/Rx\\ time\\\\[5pt]";
            suma += slantrange + "\\times 6.7\\times 10^{-6}&=" + thouSep(ps, '\\ ') + "\\times 10^{-6}\\\\[5pt]";
            suma += "PRF&=\\frac{1}{PS}\\\\[5pt]";
            suma += "&=\\frac{1}{" + thouSep(ps, '\\ ') + "\\times 10^{-6}}\\\\[5pt]";
            suma += "&=\\underline{\\mathbf{" + thouSep(prf, '\\ ') + "\\ Hz}}\\end{aligned}$$";
            break;
        case 36:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=28";
            sumq += "List four of the important internal (design) factors which can influence pulse radar performance";
            suma += "Any four from:<br>&nbsp;&nbsp;&nbsp;&nbsp;Tx peak power,<br>&nbsp;&nbsp;&nbsp;&nbsp;Receiver sensitivity and noise factor,<br>" + 
                    "&nbsp;&nbsp;&nbsp;&nbsp;Frequency,<br>&nbsp;&nbsp;&nbsp;&nbsp;Shape of radar beam and scanning method,<br>" + 
                    "&nbsp;&nbsp;&nbsp;&nbsp;PRF,<br>&nbsp;&nbsp;&nbsp;&nbsp;Pulse width";
            break;
        case 37:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=30";
            sumq += "List the four main factors governing the choice of transmitter frequency.";
            suma += "Size of target,<br>Beam Width,<br>Detection Range,<br>Size of aerials and waveguides";
            break;
        case 38:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=32";
            sumq += "List the four main factors governing the choice of PRF.";
            suma += "Maximum required range,<br>Aerial scanning speed,<br>Tx mean power,<br>Display definition";
            break;
        case 39:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=33";
            sumq += "Briefly explain the term '2nd time-around echoes'.";
            suma += "These are echoes from beyond the selected range (from earlier pulses) which appear as short-range targets, " + 
                    "causing ambiguous or confused range indications on the display.";
            break;
        case 40:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=35";
            sumq += "What change can be made to the radar scanning speed if the PRF is increased?";
            suma += "The scanning speed can also be increased.";
            break;
        case 41:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=35";
            sumq += "How can radar display definition be improved?";
            suma += "By increasing the PRF.";
            break;
        case 42:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=38";
            sumq += "To improve range discrimination and reduce the blind area (minimum range), how does the pulse width need to be changed?";
            suma += "Pulse width should be reduced.";
            break;
        case 43:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=28";
            sumq += "For primary pulsed radar, state the internal (design) factor which controls the following:<br>" + 
                    "Display definition<br>Minimum range<br>Maximum Range<br>Target Discrimination (Range Resolution)";
            suma += "<table><tr><td>Display definition</td><td>PRF</td></tr><tr><td>Minimum range</td><td>Pulse width</td</tr>" + 
                    "<tr><td>Maximum Range</td><td>PRF</td></tr><tr><td>Target Discrimination (Range Resolution)</td><td>Pulse width</td></tr></table>";
            break;
        case 44:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=36";
            do {
                pp = rndgen(0.8, 1.2, 1, 0.1, -1);
                pw = rndgen(2, 7, 0, 1, -1);
                prf = rndgen(0.6, 1.2, 2, 0.05, -1);
                mp = dp(pp * pw * prf, 3, -1);
            } while (Number.isInteger(mp));
            sumq += "Calculate the Mean Power (MP) of a pulsed radar transmitter, given" + 
                    "<br>Peak Power (PP) = " + pp + " MW" + 
                    "<br>Pulse Width (PW) =" + pw + "μS" + 
                    "<br>Pulse Repetition Frequency (PRF) = " + prf + " KHz";
            suma += "$$\\begin{aligned}MP &= PP\\times PW\\times PRF\\\\[5pt]";
            suma += "&=" + pp + "\\times 10^6\\times" + pw + "\\times 10^{-6}\\times" + prf + "\\times 10^3\\\\[5pt]";
            suma += "&=\\underline{\\mathbf{" + mp + "\\ KW}}\\end{aligned}$$";
            break;
        case 45:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=36";
            do {
                pp = rndgen(0.8, 1.2, 1, 0.1, -1);
                pw = rndgen(2, 3, 1, 0.1, -1);
                mp = rndgen(0.9, 2, 1, 0.1, -1);
                prf = dp(mp * 1000 / (pp * pw), 1, -1);
            } while (Number.isInteger(mp));
            sumq += "Calculate the Pulse Repetition Frequency (PRF) of a pulsed radar transmitter, given" + 
                    "<br>Peak Power (PP) = " + pp + " MW" + 
                    "<br>Pulse Width (PW) =" + pw + " μS" + 
                    "<br>Mean Power (MP) = " + mp + " KW";
            suma += "$$\\begin{aligned}MP &= PP\\times PW\\times PRF\\\\[5pt]";
            suma += "PRF &= \\frac{MP}{PP\\times PW}\\\\[5pt]";
            suma += "&=\\frac{" + mp + "\\times 10^3}{" + pp + "\\times 10^6\\times" + pw + "\\times 10^{-6}}\\\\[5pt]";
            suma += "&=\\underline{\\mathbf{" + prf + "\\ Hz}}\\end{aligned}$$";
            break;
        case 46:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=28";
            sumq += "For a pulsed radar system, if the peak power is halved how will this affect the radar maximum range?";
            suma += "The maximum range will be reduced to 84 %";
            break;
        case 47:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=28";
            sumq += "For a pulsed radar system, what fraction of Peak Power is needed if the maximum range is to be reduced by half?";
            suma += "1/16<sup>th</sup> of Peak Power is required.";
            break;
        case 48:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=28";
            sumq += "For a pulsed radar system, what increase in Peak Power is needed to double the maximum range?";
            suma += "Peak Power must be increased by 16 times.";
            break;
        case 49:
            notesLink = "images/20200323-RadarBk1BasicRadCIv1_5-APO.pdf#page=38";
            sumq += "What are the four main factors governing the choice of Pulse Width?";
            suma += "Minimum detection range<br>Range resolution<br>Transmitter mean power<br>Receiver bandwidth.";
            break;
    }
    
    var sumArray = [sumq, suma, notesLink];
    return sumArray;
}