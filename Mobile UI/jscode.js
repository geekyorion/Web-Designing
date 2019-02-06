const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function displayTime() {
  const time = new Date();
  document.getElementById('currTime').innerHTML=time.toLocaleTimeString();
  document.getElementById('screen-time').innerHTML=time.toLocaleTimeString();
  document.getElementById('screen-date').innerHTML=time.toLocaleDateString();
  document.getElementById('screen-day').innerHTML=days[time.getDay()];
}

// function displayDateDay() {
//   const time = new Date();
//   document.getElementById('screen-date').innerHTML=time.toLocaleDateString();
//   document.getElementById('screen-day').innerHTML=days[time.getDay()];
// }

// displayDateDay();

setInterval(displayTime, 1000);
