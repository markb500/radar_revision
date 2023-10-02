
var views = 0, sumq, suma;

function eqnformat(id) {
  //re-runs mathjax rendering on text with given id. Used in all sum functions.
  //Also toggles visibility of the 'a' element (and canvas2 and 'Show Me How' btn in Vectors) each 
  //time soln btn clicked, increments the views count each time 'a' is made visible and re-sets 
  //views to zero each time a question button is clicked.
  MathJax.Hub.Queue(["Typeset",MathJax.Hub, id]);
  if(id === "q") {
    //Initialisation for new Q; reset number of views in soln btn and ensure 'a' element is hidden.
    views = 0;
    document.getElementById("btnSoln").innerHTML = "<span class='font-weight-bold'>Show/Hide Solution</span><br />Views : " + views;
    document.getElementById("a").style.visibility="hidden";
  }
  if(id === "a") {      //soln btn clicked
    if(window.getComputedStyle(document.getElementById("a")).visibility === "visible") {
      document.getElementById("a").style.visibility="hidden";
      document.getElementById("myCanvas2").style.visibility="hidden";
      document.getElementById("btnShowhow").style.visibility="hidden";
    } else {
      document.getElementById("a").style.visibility="visible";
      document.getElementById("myCanvas2").style.visibility="visible";
      views += 1;
      document.getElementById("btnSoln").innerHTML = "<span class='font-weight-bold'>Show/Hide Solution</span><br />Views : " + views
      if(jetup || jetroll || space || pinjt) {
        //In vector questions, when 'soln' is visible, also shows the 'Show me how' button
        document.getElementById("btnShowhow").style.visibility="visible";
      }
    }
  }
}

function animsel() {
  //Triggered by 'Show me how' button. Chooses appropriate animation function in vectors catagory
  if(jetup) {
    animsolnclimb();
  } else if(jetroll) {
    animsolnroll()
  } else if(space) {
    animsolnspace();
  } else if(pinjt) {
    animsolnpin();
  }
}

function countDecimals(value) {
  //Counts number of decimal places. Used in rndgen() and dp()
  if (Math.floor(value) !== value) {
    return value.toString().split(".")[1].length || 0;
  }
  return 0;
}

function rndgen(lower, upper, dp, step, fix) {
  //Produces random numbers between limits, with set number of decimal places and selectable steps. Also,
  //decimal places can be fixed.
  //upper = largest num
  //lower = smallest num
  //dp = number of decimal places
  //step = steps between smallest digits ie if 2 dp and want in 0.02 steps, then 0.02
  //fix = number of dp's fixed. -1 if no trailing zeros wanted
  step = step * Math.pow(10, dp);
  if(fix === -1) {
    do {
      var tmp =  (Math.floor(Math.random() * ((upper * Math.pow(10, dp) / step) - (lower * Math.pow(10, dp) / step) + 1) + 
                                  (lower * Math.pow(10, dp) / step)) / Math.pow(10, dp) * step);
      } while(countDecimals(tmp) > dp);   //Solves occasional float point maths errors
    return tmp;
  } else {
    return (Math.floor(Math.random() * (upper * Math.pow(10, dp) / step - lower * Math.pow(10, dp) / step + 1) + 
                                  lower * Math.pow(10, dp) / step) / Math.pow(10, dp) * step).toFixed(fix);
  }
}

function dp(num, scale, fix) {
    if(!("" + num).includes("e")) {
      if(fix === -1) {
        return +(Math.round(num + "e+" + scale)  + "e-" + scale);
      } else {
        return (+(Math.round(num + "e+" + scale)  + "e-" + scale)).toFixed(fix);
      }
    } else {
      var arr = ("" + num).split("e");
      var sig = ""
      if(+arr[1] + scale > 0) {
        sig = "+";
      }
      if(fix === -1) {
        return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
      } else {
        return (+(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale)).toFixed(fix);
      }
    }
  }

function fromsecs(t) {
    //Converts secs to mins and secs
    if(t < 120) {
      return Math.floor(t / 60) + "&nbsp;min&nbsp;" + t % 60 + "&nbsp;secs";
    } else {
      return Math.floor(t / 60) + "&nbsp;mins&nbsp;" + t % 60 + "&nbsp;secs";
    }
}

function thouSep(value, sep) {
    //Adds chosen 1 000's separator
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, sep);
}

function sglarr(context, stx, sty, up) {
      //Draws single headed arrow up or down from start point, with length 30
      var l, hdy;
      if(up) {
        l = -30;
        hdy = 6;
      } else {
          l = 30;
          hdy = -6;
      }
      context.beginPath();
      context.moveTo(stx, sty);
      context.lineTo(stx, sty + l);
      context.moveTo(stx - 4, sty + l + hdy);
      context.lineTo(stx, sty + l);
      context.lineTo(stx + 4, sty + l + hdy);
      context.stroke();
}

function dblarr(context, stx, sty, l, rt) {
    //Draws double headed arrow left or right from start point, with given length
    var hdx = 6;
    if(!rt) {
    l = l * -1;
    hdx = hdx * -1;
    }
    context.beginPath();
    context.moveTo(stx, sty);
    context.lineTo(stx + l, sty);
    context.moveTo(stx + hdx, sty - 4);
    context.lineTo(stx, sty);
    context.lineTo(stx + hdx, sty + 4);
    context.moveTo(stx + l - hdx, sty - 4);
    context.lineTo(stx + l, sty);
    context.lineTo(stx + l - hdx, sty + 4);
    context.stroke();
}

function drawline(c, stx, sty, endx, endy, linewidth, linecolour, dotted) {
    var amount = 0;
    var myVar = setInterval(draw, 30);
    function draw() {
        if(amount < 1) {
            amount = Math.min(amount + 0.05, 1);
        }
        c.beginPath();
        c.strokeStyle = linecolour;
        c.lineWidth = linewidth;
        if(dotted) {
          c.setLineDash([7, 5]);
        }
        c.moveTo(stx, sty);
        c.lineTo(stx + (endx - stx) * amount, sty + (endy - sty) * amount);
        c.stroke();
        c.setLineDash([]);
    }
    setTimeout(function() {clearInterval(myVar)}, 1000);
}

function drawarc(c, ctrx, ctry, radius, stang, endang, dir) {
    var amount = 0;
    var myVar = setInterval(draw, 30);
    function draw() {
        if(endang > 0 && stang + amount < endang) {
            amount = Math.min(amount + Math.PI / 90, endang);
        } else if(endang < 0 && stang + amount > endang) {
            amount = Math.max(amount - Math.PI / 90, endang);
        }
        c.beginPath();
        c.strokeStyle = "red";
        c.arc(ctrx, ctry, radius, stang, stang + amount, dir);
        c.stroke();
    }
    setTimeout(function() {clearInterval(myVar)}, 1000);
}

function arrhead(c, ptx, pty, ang, linewidth, linecolour) {
    var stx = ptx - 11.662 * Math.cos((ang + 30.964) * (Math.PI / 180));
    var sty = pty - 11.662 * Math.sin((ang + 30.964) * (Math.PI / 180));
    var endx = ptx - 11.662 * Math.cos ((ang - 30.964) * (Math.PI / 180));
    var endy = pty - 11.662 * Math.sin((ang - 30.964) * (Math.PI / 180));
    c.beginPath();
    c.strokeStyle = linecolour;
    c.lineWidth = linewidth;
    c.moveTo(stx, sty);
    c.lineTo(ptx, pty);
    c.lineTo(endx, endy);
    c.stroke();
}

function removeLeadbr(txt) {
  // Removes leading <br>'s from solutions.
  // <br>'s used to place solutions after images but not needed on solnWin
  while (txt.indexOf("<br>") === 0) {
    txt = txt.replace("<br>", "");
  }
  return txt;
}

function QLimitRepeats(arr, x) {
  //Ensures no repeat question until at least 50% of questions in calling module have been shown.
  //'arr' stores previous questions for calling module. 'x' is the number of questions in the calling module.
  var sum;
  do {
    sum = rndgen(1, x, 0, 1, -1);
  } while (arr.includes(sum))
  arr.push(sum);
  if (arr.length > Math.ceil(x/2)) {
    arr.shift();
  }
  return arr;
}

function sumshow(sumType, h1, w1, h2, w2) {
  //Called by btn click in Index. Gets required sum data and sets up canvas if required.
  document.getElementById("myCanvas");
  myCanvas.height = h1;
  myCanvas.width = w1;
  myCanvas.style = "border: none;";
  document.getElementById("myCanvas2");
  myCanvas2.height = h2;
  myCanvas2.width = w2;
  myCanvas2.style.visibility = "hidden";
  document.getElementById("a").innerHTML = "";
  switch (sumType) {
    case "basicradar":
      ctx = myCanvas.getContext('2d');
      sumData = basicradar(ctx);
      break;
    case "microwaves":
      ctx = myCanvas.getContext('2d');
      ctx2 = myCanvas2.getContext('2d');
      sumData = microwaves(ctx, ctx2);
      break;
    case "txrx":
      ctx = myCanvas.getContext('2d');
      ctx2 = myCanvas2.getContext('2d');
      sumData = txrx(ctx, ctx2);
      break;
    case "radtech":
      ctx = myCanvas.getContext('2d');
      ctx2 = myCanvas2.getContext('2d');
      sumData = radtech(ctx, ctx2);
      break;
    case "iffflir":
      ctx = myCanvas.getContext('2d');
      ctx2 = myCanvas2.getContext('2d');
      sumData = iffflir(ctx, ctx2);
      break;
    case "recce":
      ctx = myCanvas.getContext('2d');
      ctx2 = myCanvas2.getContext('2d');
      sumData = recce(ctx, ctx2);
      break;
    case "ew":
      ctx = myCanvas.getContext('2d');
      sumData = ew(ctx);
      break;
    case "friction":
      sumData = friction();
      break;
  }
  if (SolnWin) {      //Prior to 1st open of SolnWin, the .closed test is null
    if (!SolnWin.closed) {  //Once SolnWin has been opened, SolnWin is true whether open or closed so need this extra test
      SolnWin.document.getElementById("myCanvas3");
      if (h2 > 0.5) { //Otherwise, assume no solution image so myCanvas2 not defined
        SolnWin.myCanvas3.height = h2;
        SolnWin.myCanvas3.width = w2;
        var ctx3 = SolnWin.myCanvas3.getContext('2d');
        ctx3.drawImage(myCanvas2, 0, 0);
      }
      // var suma2 = sumData[1].replace("<br>".repeat(12), "");  //Removes leading spaces in 'hcf/lcm' solution
      var suma2 = removeLeadbr(sumData[1]);
      SolnWin.document.getElementById('a2').innerHTML = suma2;
      SolnWin.eqnformat('a2');
    }
  }
  document.getElementById("noteslink").style.visibility="visible";
  document.getElementById("noteslink").onclick = function() {window.open(sumData[2], "_blank")}
  document.getElementById("q").innerHTML = sumData[0];
  document.getElementById("a").innerHTML = sumData[1];
  document.getElementById("btnSoln").style.visibility="visible";
}

function testsumshow(sumType, qnum) {
  //Called by sumAuth, used in test creation. Gets required sum and sets up canvas if required.
  switch (sumType) {
    case "basicradar":
      document.getElementById('myCanvasq' + qnum).style.visibility = 'visible';
      document.getElementById('myCanvasq' + qnum).height = '300';
      document.getElementById('myCanvasq' + qnum).width = '500';
      ctx = document.getElementById('myCanvasq' + qnum).getContext('2d');
      sumData = basicradar(ctx);
      break;
    case "microwaves":
      document.getElementById('myCanvasq' + qnum).style.visibility = 'visible';
      document.getElementById('myCanvasq' + qnum).height = '300';
      document.getElementById('myCanvasq' + qnum).width = '500';
      ctx = document.getElementById('myCanvasq' + qnum).getContext('2d');
      document.getElementById('myCanvasqa' + qnum).style.visibility = 'visible';
      document.getElementById('myCanvasqa' + qnum).height = '300';
      document.getElementById('myCanvasqa' + qnum).width = '500';
      ctx2 = document.getElementById('myCanvasqa' + qnum).getContext('2d');
      sumData = microwaves(ctx, ctx2);
      sumData[1] = sumData[1].replace("<br>".repeat(8), "");     //Removes lead in <br>'s from solution
      ctx2.drawImage(document.getElementById('myCanvasq' + qnum), 0, 0);
      break;
    case "txrx":
      document.getElementById('myCanvasq' + qnum).style.visibility = 'visible';
      document.getElementById('myCanvasq' + qnum).height = '400';
      document.getElementById('myCanvasq' + qnum).width = '600';
      ctx = document.getElementById('myCanvasq' + qnum).getContext('2d');
      document.getElementById('myCanvasqa' + qnum).style.visibility = 'visible';
      document.getElementById('myCanvasqa' + qnum).height = '400';
      document.getElementById('myCanvasqa' + qnum).width = '600';
      ctx2 = document.getElementById('myCanvasqa' + qnum).getContext('2d');
      sumData = txrx(ctx, ctx2);
      ctx2.drawImage(document.getElementById('myCanvasq' + qnum), 0, 0);
      break;
    case "radtech":
      document.getElementById('myCanvasq' + qnum).style.visibility = 'visible';
      document.getElementById('myCanvasq' + qnum).height = '400';
      document.getElementById('myCanvasq' + qnum).width = '600';
      ctx = document.getElementById('myCanvasq' + qnum).getContext('2d');
      sumData = radtech(ctx);
      break;
    case "iffflir":
      document.getElementById('myCanvasq' + qnum).style.visibility = 'visible';
      document.getElementById('myCanvasq' + qnum).height = '400';
      document.getElementById('myCanvasq' + qnum).width = '600';
      ctx = document.getElementById('myCanvasq' + qnum).getContext('2d');
      document.getElementById('myCanvasqa' + qnum).style.visibility = 'visible';
      document.getElementById('myCanvasqa' + qnum).height = '400';
      document.getElementById('myCanvasqa' + qnum).width = '600';
      ctx2 = document.getElementById('myCanvasqa' + qnum).getContext('2d');
      sumData = iffflir(ctx, ctx2);
      ctx2.drawImage(document.getElementById('myCanvasq' + qnum), 0, 0);
      break;
    case "recce":
      document.getElementById('myCanvasq' + qnum).style.visibility = 'visible';
      document.getElementById('myCanvasq' + qnum).height = '400';
      document.getElementById('myCanvasq' + qnum).width = '600';
      ctx = document.getElementById('myCanvasq' + qnum).getContext('2d');
      document.getElementById('myCanvasqa' + qnum).style.visibility = 'visible';
      document.getElementById('myCanvasqa' + qnum).height = '400';
      document.getElementById('myCanvasqa' + qnum).width = '600';
      ctx2 = document.getElementById('myCanvasqa' + qnum).getContext('2d');
      sumData = recce(ctx, ctx2);
      ctx2.drawImage(document.getElementById('myCanvasq' + qnum), 0, 0);
      break;
    case "ew":
      document.getElementById('myCanvasq' + qnum).style.visibility = 'visible';
      document.getElementById('myCanvasq' + qnum).height = '400';
      document.getElementById('myCanvasq' + qnum).width = '600';
      ctx = document.getElementById('myCanvasq' + qnum).getContext('2d');
      sumData = ew(ctx);
      break;
  }
}

function sumAuth(sumtype, qnum) {
  //Called by testshow(). Creates elements for test layout and inserts q's, a's and diags
  //2 divs, 'q' & 'a', created in testshow()
  //Then, for each question, the following created inside these:
  //'qdiv' & qnum inside 'q'
  //    Inside this, 'q' & qnum and 'btn' & qnum and 'myCanvasq' & qnum. These 3 in-line (from css in testqsheet)
  //'adiv' & qnum inside 'a'
  //    Inside this, 'aele1outer' & qnum
  //        Inside this, 'ai' & qnum and 'myCanvasqa' & qnum. These 2 in-line (from css in testqsheet)
  //    After aele1outer but still inside 'adiv' & qnum, 'myCanvasa' & qnum and 'aii' & qnum
  var qdiv = document.createElement('div');
  qdiv.id = 'qdiv' + qnum;
  qdiv.classList.add('pagebreak');    //css in testQsheet used to add pagebreak in print version
  qdiv.classList.add('wrapper');      //css in testQsheet used to put Q text, 'modify' btn and canvas in a row
  qdiv.style.margin = '20px';
  document.getElementById('q').appendChild(qdiv);

  var qele = document.createElement('h3');
  qele.id = 'q' + qnum;
  qele.style.width = '50%';
  qele.classList.add("qbtn");         //css testQsheet used to put Q text, 'modify' btn and canvas in a row
  document.getElementById('qdiv' + qnum).appendChild(qele);

  var button = document.createElement('button');
  button.id = 'btn' + qnum;
  button.classList.add("pagebreak");  //css in testQsheet used to hide button in print version
  button.classList.add("qbtn");       //css testQsheet used to put Q text, 'modify' btn and canvas in a row
  button.innerText = 'Modify This Question';
  button.addEventListener('click', (event) => {
    var whichQ = parseInt(event.target.id.replace('btn', ''));  //Gets the question number for use in element id
    testsumshow(sumtype, whichQ);
    document.getElementById('q' + whichQ).innerHTML = whichQ + '.  ' + sumData[0];
    document.getElementById('ai' + (whichQ)).innerHTML = whichQ + '.  ' + sumData[0] + "<br>";
    document.getElementById('aii' + (whichQ)).innerHTML = sumData[1];
    eqnformat();                      //Re-runs mathjax formatting
  })
  document.getElementById("qdiv" + qnum).appendChild(button);

  var canvasq = document.createElement("canvas");
  canvasq.id = 'myCanvasq' + qnum;
  canvasq.height = '0.5';
  canvasq.width = '0.5';
  canvasq.classList.add("qbtn");
  canvasq.style.visibility = 'hidden';
  document.getElementById('qdiv' + qnum).appendChild(canvasq);

  var adiv = document.createElement('div');
  adiv.id = 'adiv' + qnum;
  adiv.classList.add('pagebreak');    //css in testQsheet used to add pagebreak in print version
  adiv.style.margin = '20px';
  document.getElementById('a').appendChild(adiv);

  var aele1outer = document.createElement("div");
  aele1outer.id = 'aele1outer' + qnum;
  aele1outer.classList.add('wrapper');      //css in testQsheet used to put Q text, 'modify' btn and canvas in a row
  document.getElementById('adiv' + qnum).appendChild(aele1outer);

  var aele1 = document.createElement("h3");
  aele1.id = 'ai' + (qnum);
  aele1.style.width = '50%';
  aele1.classList.add("qbtn");         //css in testQsheet used to put Q text, 'modify' btn and canvas in a row
  document.getElementById('aele1outer' + qnum).appendChild(aele1);  //For answer section, question written in black

  var canvasqa = document.createElement("canvas");
  canvasqa.id = 'myCanvasqa' + qnum;
  canvasqa.height = '0.5';
  canvasqa.width = '0.5';
  canvasqa.style.visibility = 'hidden';
  canvasqa.classList.add("qbtn");
  document.getElementById('aele1outer' + qnum).appendChild(canvasqa);

  var canvasa = document.createElement("canvas");
  canvasa.id = 'myCanvasa' + qnum;
  canvasa.height = '0.5';
  canvasa.width = '0.5';
  document.getElementById('adiv' + qnum).appendChild(canvasa);

  var aele2 = document.createElement("h3");
  aele2.id = 'aii' + (qnum);
  aele2.style = "color:red";
  aele2.style.margin = '20px';
  document.getElementById('adiv' + qnum).appendChild(aele2);  //For answer section, solution written in red

  testsumshow(sumtype, qnum);
  document.getElementById('q' + qnum).innerHTML = qnum + ".  " + sumData[0];
  document.getElementById('ai' + (qnum)).innerHTML = qnum + ".  " + sumData[0] + '<br>';
  document.getElementById('aii' + (qnum)).innerHTML = sumData[1];
}

function testshow() {
  //Called on page load. Gets test design from testCreate and cycles through list
  let data = sessionStorage.getItem("testArr"); //Passed from testCreate as json string
  const testOrder = JSON.parse(data);
  totalq = testOrder.length;
  var qnum = 1;
  var qdiv = document.createElement("div");
  qdiv.id = 'q';
  document.body.appendChild(qdiv);
  var adiv = document.createElement("div");
  adiv.id = 'a';
  document.body.appendChild(adiv);
  for (var i = 0; i < testOrder.length; i++) {
    switch (testOrder[i]) {
      case "Basic Radar":
        sumAuth('basicradar', qnum);
        qnum = qnum + 1;
        break;
      case "Microwave Techniques":
        sumAuth('microwaves', qnum);
        qnum = qnum + 1;
        break;
      case "Transmitters &amp; Receivers":
        sumAuth('txrx', qnum);
        qnum = qnum + 1;
        break;
      case "Radar Techniques":
        sumAuth('radtech', qnum);
        qnum = qnum + 1;
        break;
      case "IFF/SSR &amp; FLIR":
        sumAuth('iffflir', qnum);
        qnum = qnum + 1;
        break;
      case "Aircraft Reconnaissance":
        sumAuth('recce', qnum);
        qnum = qnum + 1;
        break;
      case "Electronic Warfare":
        sumAuth('ew', qnum);
        qnum = qnum + 1;
        break;
    }
  }
  eqnformat('t'); //Ensures MathJax has formatted all sums in test
}

function bgSelect() {
  //Changes background colour in response to selection on dropdown list
  document.querySelector(':root').style.setProperty('--bgcolour', document.getElementById("colourSelect").value);
}