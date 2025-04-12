document.addEventListener('DOMContentLoaded', function() {
    // Counter animation
    const counters = [
      { id: 'members', end: 150 },
      { id: 'events', end: 25 },
      { id: 'workshops', end: 40 }
    ];
  
    counters.forEach(counter => {
      let el = document.getElementById(counter.id);
      let start = 0;
      const step = Math.ceil(counter.end / 100);
      const interval = setInterval(() => {
        start += step;
        if (start >= counter.end) {
          el.textContent = counter.end;
          clearInterval(interval);
        } else {
          el.textContent = start;
        }
      }, 20);
    });
  
    // Toggle mobile menu visibility
    document.getElementById('mobile-menu-btn').addEventListener('click', function () {
      var menu = document.getElementById('mobile-menu');
      menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
    });
});


  
  