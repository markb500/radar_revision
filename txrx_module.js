var sumarr = [], sumq, suma;
function txrx(ctx, ctx2) {
  var sum, notesLink, sect, L, C, Z, PW;
  sumq = "";
  suma = "";
  sumarr = QLimitRepeats(sumarr, 21);
  sum = sumarr[sumarr.length - 1];
  switch(sum) {
    case 1:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=6";
      sumq += "The diagram shows a High-Powered Oscillator (HPO) type radar transmitter.<br>a. State the function of the MTU.<br>" + 
              "b. Which microwave device would be used as the RF Oscillator?<br>" + 
              "c. Which device would be used as the High-Power Modulator?";
      suma += "<br><br><br><br><br>";
      suma += "a. The Master Timing Unit determines the PRF.<br>" + 
              "b. A Magnetron.<br>" + 
              "c. A Pulse Forming Network.";
      ctx.drawImage(hpotxblk, 0, 0, 500, 300);
      break;
    case 2:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=8";
      sumq += "What is the function of a pulse forming network (PFN)?";
      suma += "To modulate the RF oscillator, switching it on and off.";
      break;
    case 3:
      notesLink = "";
      sumq += "List two characteristics of the pulses formed by a pulse forming network.";
      suma += "Any 2 from:<br>large amplitude,<br>rectangular,<br>well-shaped,<br>steep sided,<br>precise in pulse width.";
      break;
    case 4:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=9";
      do {
        sect = rndgen(3, 17, 0, 1, -1);
        L = rndgen(4, 15, 0, 1, -1);
        C = rndgen(200, 990, 0, 10, -1);
        Z = dp(Math.sqrt((L * Math.pow(10, -6)) / (C * Math.pow(10, -12))), 2, -1);
        PW = dp(2 * sect * Math.sqrt((L * Math.pow(10, -6)) * (C * Math.pow(10, -12))), 8, -1);
      } while (Z < 50 || Z > 200 || PW < 0.000001 || PW > 0.000004);
      sumq += "Calculate, to an accuracy of 2 decimal places, the Characteristic&nbsp;Impedance " + 
              "and the Pulse&nbsp;Width of a Pulse&nbsp;Forming&nbsp;Network, given:<br>" + 
              "Number of LC sections = " + sect + "<br>" + 
              "Inductance = " + L + " &mu;H<br>" + 
              "Capacitance = " + C + " pF";
      suma += "$$\\begin{aligned}Z_0&=\\sqrt{\\frac{L}{C}}\\\\[5pt]";
      suma += "&=\\sqrt{\\frac{" + L + "\\times 10^{-6}}{" + C + "\\times 10^{-12}}}\\\\[5pt]";
      suma += "&=\\underline{\\mathbf{" + Z + "\\ \\Omega\\ (2\\ dp)}}\\\\[5pt]";
      suma += "PW&=2n\\sqrt{LC}\\\\[5pt]";
      suma += "&=2\\times" + sect + "\\sqrt{" + L + "\\times 10^{-6}\\times " + C + "\\times 10^{-12}}\\\\[5pt]";
      suma += "&=\\underline{\\mathbf{" + dp(PW * 1000000, 2, 2) + "\\ \\mu s\\ (2\\ dp)}}\\end{aligned}$$";
      break;
    case 5:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=10";
      sumq += "The diagram shows a Master Oscillator Power Amplifier (MOPA) transmitter.<br>" + 
              "a. State the purpose of the Master Oscillator.<br>" + 
              "b. State the purpose of the Driver Amplifier.<br>" + 
              "a. State the purpose of the Power Amplifier.<br>"
      suma += "<br><br><br><br><br><br><br>";
      suma += "a. Controls the transmitter RF output in the form of a low power, stable, CW microwave frequency.<br>" + 
              "b. Pulse modulation and amplification of the low power CW microwave frequency.<br>" + 
              "c. Raises the output level to that required by the system.";
      ctx.drawImage(basicmopablk, 0, 0, 500, 300);
      break;
    case 6:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=11";
      sumq += "List two advantages that a basic Master Oscillator Power Amplifier transmitter has over a High-Power Oscillator transmitter.";
      suma += "Any 2 from:<br>Low power modulator<br>Frequency stability is improved<br>Phase coherence is easier to achieve.";
      break;
    case 7:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=12";
      sumq += "List the three main properties that a radar superheterodyne receiver must have in order to process pulses with minimal distortion.";
      suma += "Very high gain<br>Low noise factor<br>Very wide bandwidth.";
      break;
    case 8:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=13";
      sumq += "In the typical pulsed radar superheterodyne receiver shown, which block ensures a constant IF even if the transmitter drifts off frequency?";
      suma += "<br><br><br><br><br><br><br>";
      suma += "The AFC.";
      ctx.drawImage(superhetrxblk, 0, 0, 500, 300);
      break;
    case 9:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=13";
      sumq += "In the typical pulsed radar superheterodyne receiver shown, which block has very large gain and a wide bandwidth?";
      suma += "<br><br><br><br><br><br><br>";
      suma += "The IF Amplifier.";
      ctx.drawImage(superhetrxblk, 0, 0, 500, 300);
      break;
    case 10:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=13";
      sumq += "In the typical pulsed radar superheterodyne receiver shown, which block provides a continuous low amplitude microwave frequency?";
      suma += "<br><br><br><br><br><br><br>";
      suma += "The Local Oscillator.";
      ctx.drawImage(superhetrxblk, 0, 0, 500, 300);
      break;
    case 11:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=13";
      sumq += "In the typical pulsed radar superheterodyne receiver shown, which block demodulates the bipolar pulse to recover the original square pulse shape?";
      suma += "<br><br><br><br><br><br><br>";
      suma += "The Video Detector.";
      ctx.drawImage(superhetrxblk, 0, 0, 500, 300);
      break;
    case 12:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=13";
      sumq += "In the typical pulsed radar superheterodyne receiver shown, which block provides a small amount of gain and lowers the noise factor?";
      suma += "<br><br><br><br><br><br><br>";
      suma += "The RF Amplifier.";
      ctx.drawImage(superhetrxblk, 0, 0, 500, 300);
      break;
    case 13:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=15";
      sumq += "What technique is used to maintain high gain and wide bandwidth in a receiver IF stage?";
      suma += "Staggered tuning";
      break;
    case 14:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=13";
      sumq += "State the main advantage of using a “balanced” type mixer.";
      suma += "Balanced mixers can cancel the noise produced by the local oscillator.";
      break;
    case 15:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=14";
      sumq += "Explain why Automatic Frequency Control (AFC) is used in radar receivers.";
      suma += "To maintain a constant IF by monitoring the Tx frequency and adjusting the local oscillator accordingly.";
      break;
    case 16:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=14";
      sumq += "Explain what the Automatic Frequency Control (AFC) will do to the Local oscillator (LO) if the transmitter frequency drifts upwards by 50 KHz.";
      suma += "<br><br><br><br><br><br><br><br>";
      suma += "The AFC causes the local oscillator frequency to increase by 50 KHz.";
      ctx.drawImage(superhetrxblk, 0, 0, 500, 300);
      break;
    case 17:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=14";
      sumq += "Explain what the Automatic Frequency Control (AFC) will do to the Local oscillator (LO) if the transmitter frequency drifts downwards by 20 KHz.";
      suma += "<br><br><br><br><br><br><br><br>";
      suma += "The AFC causes the local oscillator frequency to decrease by 20 KHz.";
      ctx.drawImage(superhetrxblk, 0, 0, 500, 300);
      break;
    case 18:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=19";
      sumq += "List three methods of reducing clutter within a superheterodyne receiver.";
      suma += "Fast Time Constant (FTC)<br>Swept Gain or Sensitivity Time Control (STC)<br>Logarithmic IF amp";
      break;
    case 19:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=20";
      sumq += "For each of the received pulses shown, draw the effect that a Fast Time Constant (FTC) circuit would have.";
      ctx.drawImage(ftcpulsesq, 0, 0, 600, 400);
      ctx2.drawImage(ftcpulsesa, 0, 0, 600, 400);
      break;
    case 20:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=21";
      sumq += "Explain the purpose of Swept&nbsp;Gain or Sensitivity&nbsp;Time&nbsp;Control&nbsp;(STC) in a radar receiver.";
      suma += "Swept Gain initially reduces the gain of the receiver, thus reducing near ground clutter. " + 
              "As the range increases the gain is gradually increased so weaker targets are seen more clearly.";
      break;
    case 21:
      notesLink = "images/20200422-RadarBk3TxRx_v1_3-APO.pdf#page=22";
      sumq += "If a radar superheterodyne receiver has a logarithmic intermediate&nbsp;frequency&nbsp;(IF) amplifier stage, how will it respond to:<br>" + 
              "a. Extremely small signals?<br>" + 
              "b. Large signals?";
      suma += "a. It will act as a linear amplifier giving maximum gain.<br>" +
              "b. It will provide little gain.";
      break;
  }
  
  var sumArray = [sumq, suma, notesLink];
  return sumArray;
}