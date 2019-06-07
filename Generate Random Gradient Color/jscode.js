var gradient;
var angle;
var color_first;
var color_second;
var h;
var w;
var resolution_first;
var resolution_second;
var resolution_third;
var resolution_square;
var resolution_device;

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

function createCanvas(specifiedWidth, specifiedHeight) {
  var canvas = document.createElement('canvas');
  canvas.setAttribute('height', specifiedHeight);
  canvas.setAttribute('width', specifiedWidth);
  
  var context = canvas.getContext("2d");
  var grd;

  switch(angle) {
    case 45: grd = context.createLinearGradient(0, specifiedHeight, specifiedWidth, 0); break;
    case 90: grd = context.createLinearGradient(0, 0, specifiedWidth, 0); break;
    case 135: grd = context.createLinearGradient(0, 0, specifiedWidth, specifiedHeight); break;
    case 180: grd = context.createLinearGradient(0, 0, 0, specifiedHeight); break;
    case 225: grd = context.createLinearGradient(specifiedWidth, 0, 0, specifiedHeight); break;
    case 270: grd = context.createLinearGradient(specifiedWidth, 0, 0, 0); break;
    case 315: grd = context.createLinearGradient(specifiedWidth, specifiedHeight, 0, 0); break;
    default : grd = context.createLinearGradient(0, specifiedHeight, 0, 0); break;
  }

  grd.addColorStop(0,color_first);
  grd.addColorStop(1,color_second);
  context.fillStyle = grd;
  context.fillRect(0,0,specifiedWidth,specifiedHeight);
  
  return canvas;
}

window.onload = function() {
  generateBackground();
  angle = 135;
  var screenHeight = window.screen.height;
  var screenWidth = window.screen.width;
  
  resolution_first = document.getElementById("resolution-first");
  resolution_second = document.getElementById("resolution-second");
  resolution_third = document.getElementById("resolution-third");
  resolution_square = document.getElementById("resolution-square");
  resolution_device = document.getElementById("resolution-device");

  resolution_device.innerText += `\n[${screenWidth}x${screenHeight}]`;

  resolution_first.addEventListener("click", ()=>{
    var canvas = createCanvas(1366, 768);
    var dataURL = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
    resolution_first.href = dataURL;
  });
  
  resolution_second.addEventListener("click", ()=>{
    var canvas = createCanvas(1920, 1080);
    var dataURL = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
    resolution_second.href = dataURL;
  });
  
  resolution_third.addEventListener("click", ()=>{
    var canvas = createCanvas(1200, 800);
    var dataURL = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
    resolution_third.href = dataURL;
  });
  
  resolution_square.addEventListener("click", ()=>{
    var canvas = createCanvas(5000, 5000);
    var dataURL = canvas.toDataURL('image/png');
    resolution_square.href = dataURL;
  });
  
  resolution_device.addEventListener("click", ()=>{
    var canvas = createCanvas(screenWidth, screenHeight);
    var dataURL = canvas.toDataURL('image/png');
    resolution_device.href = dataURL;
  });
}
