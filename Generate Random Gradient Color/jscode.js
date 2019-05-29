var gradient;
var angle;
var download;
var color_first;
var color_second;
var h;
var w;

function generateRandom() {
//   return parseInt(Math.random()*255).toString(16);
//   now it is not converting the number from decimal base to hex base
  return parseInt(Math.random()*255);
}

function generateBackground() {
  angle = 135;
//   gradient = `linear-gradient(${angle}deg, #${generateRandom()}${generateRandom()}${generateRandom()}, #${generateRandom()}${generateRandom()}${generateRandom()})`;
//   use RGB() method so that it works faster
  color_first = `rgb(${generateRandom()}, ${generateRandom()}, ${generateRandom()})`;
  color_second = `rgb(${generateRandom()}, ${generateRandom()}, ${generateRandom()})`;
  gradient = `linear-gradient(${angle}deg, ${color_first}, ${color_second})`;
//   gradient = `linear-gradient(${angle}deg, rgb(${generateRandom()}, ${generateRandom()}, ${generateRandom()}), rgb(${generateRandom()}, ${generateRandom()}, ${generateRandom()}))`;
  document.body.style.background = gradient;
}

function appendMessage(msg) {
  var message = document.createElement("p");
  message.innerText = msg;
  message.setAttribute("class", "message");
  document.body.appendChild(message);
  setTimeout(()=>{message.remove();}, 1000);
}

function copyCode() {
  var code = document.createElement("textarea");
  code.value = `body {
    background: -webkit-${gradient};
    background: -o-${gradient};
    background: ${gradient};
    /* min-height: 100vh; to provide the gradient to the whole screen */
    min-height: 100vh;
    /* margin: 0; is added so that page won't show scrollbar when the content is less */
    margin: 0;
  }`;
  
  code.style.position = "absolute"; 
  code.style.left = "9999px";
  document.body.appendChild(code);
  
  code.select();
  document.execCommand("copy");
  code.remove();
  
  appendMessage("Code Copied");
}

function applyRotation(newAngle) {
  gradient = gradient.replace(/\d+/, newAngle);
  document.body.style.background = gradient;
  angle = newAngle;
  appendMessage(`Angle: ${angle}`)
}

function rotateAnti() {
  var newAngle = angle - 45;
  if(newAngle == -45) {
    angle = 360
    newAngle = 315;
  }
  applyRotation(newAngle);
}

function rotateClock() {
  var newAngle = angle + 45;
  if(newAngle == 405) {
    angle = 0
    newAngle = 45;
  }
  applyRotation(newAngle);
}

function createCanvas() {
  var canvas = document.createElement('canvas');
  canvas.setAttribute('height', h);
  canvas.setAttribute('width', w);
  
  var context = canvas.getContext("2d");
  var grd = context.createLinearGradient(0,0,w,h);
  grd.addColorStop(0,color_first);
  grd.addColorStop(1,color_second);
  context.fillStyle = grd;
  context.fillRect(0,0,w,h);
  
  return canvas;
}

window.onload = function() {
  generateBackground();
  angle = 135;
  h = window.outerHeight;
  w = window.outerWidth;
  
  download = document.getElementById('downloadBtn');
  download.innerText = `Download as ${w}x${h}`;
  download.addEventListener('click', function (e) {
    var canvas = createCanvas();
    var dataURL = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
    download.href = dataURL;
  });
}
