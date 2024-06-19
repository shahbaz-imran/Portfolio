document.addEventListener('DOMContentLoaded', function () {
    const targetDate = new Date('2024-07-31T23:59:59'); // Set your target launch date here
  
    function updateCountdown() {
      const now = new Date();
      const timeRemaining = targetDate - now;
  
      if (timeRemaining <= 0) {
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('message').textContent = 'We are live!';
        return;
      }
  
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;
    }
  
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to set the countdown immediately
  });
  