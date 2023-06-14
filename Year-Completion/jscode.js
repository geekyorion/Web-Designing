const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let currTimeEl;
let percentEl;
let yearEl;
let monthsEl;
let daysEl;
let hoursEl;
let minutesEl;
let secondsEl;

const getTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  let pastDays = 0;
  let totalSeconds = 31536000;
  let pastTime = 0;
  let completion = 0;
  
  const months = date.getMonth();
  const hours = date.getHours()
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  const isLeap = (year%4 === 0 && year%100 !== 0) || (year%400 === 0);
  
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
