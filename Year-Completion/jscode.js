var month = ["January", "February", "March", "April", "May", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var currTimeEl;
var percentEl;
var yearEl;
var monthsEl;
var daysEl;
var hoursEl;
var minutesEl;
var secondsEl;


function getTime() {
  var date = new Date();
  var year = date.getFullYear();
  var pastDays = 0;
  var totalSeconds = 31536000;
  var pastTime = 0;
  var completion = 0;
  
  var months = date.getMonth();
  var hours = date.getHours()
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  
  var isLeap = (year%4 === 0 && year%100 !== 0) || (year%400 === 0);
  
  if(isLeap) {
    monthDays[1] = 29;
    totalSeconds = 31622400;
  }
  
  for(let i=0; i<months; i++) {
    pastDays += monthDays[i];
  }
  
  pastDays += date.getDate() - 1;
  pastTime = pastDays*86400 + hours*3600 + minutes*60 + seconds;
  completion = (pastTime*100/totalSeconds).toFixed(8);
  document.title = year+"---"+completion+"%";
  
  currTimeEl.innerText = `${hours}:${minutes}:${seconds}\n${days[date.getDay()]} - ${month[months]}, ${date.getDate()}`;
  
  yearEl.innerText = year;
  percentEl.innerText = completion;
  
  monthsEl.innerText = months;
  daysEl.innerText = pastDays;
  hoursEl.innerText = pastDays * 24 + hours;
  minutesEl.innerText = (pastDays * 24 + hours)*60 + minutes;
  secondsEl.innerText = (minutesEl.innerText)*60 + seconds;
}

window.onload = function() {
  setInterval(getTime, 1000);
  
  currTimeEl = document.getElementById("currentTime");
  
  percentEl = document.getElementById("percent");
  yearEl = document.getElementById("year");
  
  monthsEl = document.getElementById("months");
  daysEl = document.getElementById("days");
  hoursEl = document.getElementById("hours");
  minutesEl = document.getElementById("minutes");
  secondsEl = document.getElementById("seconds");
}
