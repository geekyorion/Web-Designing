var pass = document.querySelector(".userPass");
// var span = document.querySelector(".toggler");

// we can write "return false" in form [see HTML] or use following function to prevent default behaviour

// function submitForm(e) {
//   e.preventDefault();
//   return false;
// }

function show() {
  pass.type = "text";
  // span.innerHTML = "Hide";
}

function hide() {
  pass.type = "password";
  // span.innerHTML = "Show"
}
