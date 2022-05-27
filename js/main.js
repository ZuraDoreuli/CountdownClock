const days = document.querySelector('.countdown__time-days');
const hours = document.querySelector('.countdown__time-hours');
const minutes = document.querySelector('.countdown__time-minutes');
const seconds = document.querySelector('.countdown__time-seconds');


// Get the current year
const currentYear = new Date().getFullYear();
// Get the date and time for next year 
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`)


function updateCountdown() {
   // Get the current date and time
   const currentTime = new Date();
   // Making a difference
   const difference = nextYear - currentTime;
   // Get how many days left
   const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
   // Get how many hours left
   const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;
   // Get how many minutes left
   const minutesLeft = Math.floor(difference / 1000 / 60) % 60;
   // Get how many seconds left
   const secondsLeft = Math.floor(difference / 1000) % 60;
   // Set date and time in our page 
   days.innerHTML = daysLeft;
   hours.innerHTML = hoursLeft < 10 ? '0' + hoursLeft: hoursLeft;
   minutes.innerHTML = minutesLeft < 10 ? '0' + minutesLeft: minutesLeft;
   seconds.innerHTML = secondsLeft < 10 ? '0' + secondsLeft: secondsLeft;
}
// Run our function
updateCountdown();
// Update our page every millisecond
setInterval(updateCountdown, 1000);