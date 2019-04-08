var textNode;
var outputNode;
var text;
var len;

window.onload = function() {
    textNode = document.getElementById("content");
    outputNode = document.getElementById("outputText");
}

function typeEffect() {
    if( len < text.length) {
        outputNode.innerHTML += text.charAt(len);
        len++;
        setTimeout(typeEffect, 40);
    }
}

function typeText() {
    len = 0;
    outputNode.innerHTML = "";
    text = textNode.value;

    typeEffect();
}
