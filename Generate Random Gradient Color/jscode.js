var gradient;

function generateRandom() {
  return parseInt(Math.random()*255).toString(16);
}

function generateBackground() {
  gradient = `linear-gradient(135deg, #${generateRandom()}${generateRandom()}${generateRandom()}, #${generateRandom()}${generateRandom()}${generateRandom()})`;
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
