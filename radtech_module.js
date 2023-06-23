var prevsum = 0, prev2sum = 0;
function radtech(ctx, ctx2) {
  var sum, notesLink;
  sumq = "";
  suma = "";
  // do {
  //     sum = rndgen(1, 17, 0, 1, -1);
  // } while(sum === prevsum || sum === prev2sum)
  // prev2sum = prevsum;
  // prevsum = sum;
  sum = 4;
  switch(sum) {
    case 1:
      notesLink = "";
      sumq += "List the four operational advantages Frequency Agile (FA) radar has over Fixed Frequency (FF) radar.";
      suma += "a. Reduced clutter.<br>b. Reduced interference.<br>c. Elimination of second-time around echoes.<br>d. Double the detection range.";
      break;
    case 2:
      notesLink = "";
      sumq += "Briefly explain why frequency agile radars do not suffer from second-time-around echoes.";
      suma += "Every pulse transmitted is at a slightly different frequency so a second time around echo will not be received.";
      break;
    case 3:
      notesLink = "";
      sumq += "List two methods used to obtain frequency agility.";
      suma += "a. Spin Disc Magnetron<br>b. Frequency Agile Master Oscillator Power Amplifier (FAMOPA)";
      break;
    case 4:
        notesLink = "";
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
  }
  
  var sumArray = [sumq, suma, notesLink];
  return sumArray;
}