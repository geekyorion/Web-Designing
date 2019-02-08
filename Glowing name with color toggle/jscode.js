var body = document.querySelector('body');
var main_text = document.querySelector('.text-transparent');
var shadow = document.querySelector('.shadow');

function toggleClass(btn) {
  btn.classList.toggle('btn-black');
  body.classList.toggle('body-black');
  main_text.classList.toggle('text-stroke-black');
  shadow.classList.toggle('shadow-white');
}
