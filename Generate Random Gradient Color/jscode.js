var gradient;

function generateRandom() {
//   return parseInt(Math.random()*255).toString(16);
//   now it is not converting the number from decimal base to hex base
  return parseInt(Math.random()*255);
}

function generateBackground() {
//   gradient = `linear-gradient(135deg, #${generateRandom()}${generateRandom()}${generateRandom()}, #${generateRandom()}${generateRandom()}${generateRandom()})`;
//   use RGB() method so that it works faster
  gradient = `linear-gradient(135deg, rgb(${generateRandom()}, ${generateRandom()}, ${generateRandom()}), rgb(${generateRandom()}, ${generateRandom()}, ${generateRandom()}))`;
  document.body.style.background = gradient;
}

function appendMessage() {
  var message = document.createElement("p");
  message.innerText = "Code Copied";
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
  
  appendMessage();
}

window.onload = function() {
  generateBackground();
}
