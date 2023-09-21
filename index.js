const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const timeToHolidaysSection = document.querySelector("#time-to-holidays");
const pastYearSection = document.querySelector("#past-year-summarize");

let holidayDate = new Date('2024', '7', '15', '17', '00', '00', '000');
const holidayMilliseconds = holidayDate.getTime();

differenceBetweenDates();

var interval = setInterval(() => {
  differenceBetweenDates();
}, 1000);

function differenceBetweenDates(){
  let now = new Date();
  let nowMilliseconds = now.getTime();
  let diff = holidayMilliseconds - nowMilliseconds;
  
  if(holidayMilliseconds < nowMilliseconds){
    clearInterval(interval);
    timeToHolidaysSection.style.display = "none";
    pastYearSection.style.display = "block";
  }
  
  let timeArray = convertMillisecondsToCountdown(diff);
  
  days.innerText = timeArray[0];
  hours.innerText = timeArray[1];
  minutes.innerText = timeArray[2];
  seconds.innerText = timeArray[3];
  
}


function convertMillisecondsToCountdown(time){
    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        cm = 60 * 1000,
        d = Math.floor(time / cd),
        h = Math.floor( (time - d * cd) / ch),
        m = Math.floor( (time - d * cd - h * ch) / cm),
        s = Math.floor( (time - d * cd - h * ch - m * cm) / 1000)
  
  return [d, h, m, s];
}