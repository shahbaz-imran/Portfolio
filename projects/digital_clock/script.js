document.addEventListener('DOMContentLoaded', function () {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const greetingElement = document.getElementById('greeting');
    const alarmSound = document.getElementById('alarm-sound');
  
    function updateClock() {
      const now = new Date();
  
      // Time
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  
      // Date
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      dateElement.textContent = now.toLocaleDateString(undefined, options);
  
      // Greeting
      let greeting;
      if (hours < 12) {
        greeting = 'Good Morning';
      } else if (hours < 18) {
        greeting = 'Good Afternoon';
      } else {
        greeting = 'Good Evening';
      }
      greetingElement.textContent = greeting;
  
      // Background
      if (hours >= 6 && hours < 18) {
        document.body.classList.add('day');
        document.body.classList.remove('night');
      } else {
        document.body.classList.add('night');
        document.body.classList.remove('day');
      }
  
      // Alarm
      if (minutes === '00' && seconds === '00') {
        alarmSound.play();
      }
    }
  
    setInterval(updateClock, 1000);
    updateClock(); // Initial call to set the clock immediately
  });
  