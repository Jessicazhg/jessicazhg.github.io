function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Add scroll event listener
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbarcontainer');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '↑';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Sidebar visibility
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.sidebar-nav a');
  const sidebar = document.querySelector('.sidebar');
  const projectDetails = document.querySelector('.project-details');

  function updateSidebarVisibility() {
    const projectDetailsBottom = projectDetails.offsetTop + projectDetails.offsetHeight;
    if (window.scrollY > projectDetailsBottom) {
      sidebar.classList.add('visible');
    } else {
      sidebar.classList.remove('visible');
    }
  }

  function updateActiveLink() {
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 200)) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  }

  // Smooth scroll for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Update active link and sidebar visibility on scroll
  window.addEventListener('scroll', () => {
    updateActiveLink();
    updateSidebarVisibility();
  });
  
  // Initial calls
  updateActiveLink();
  updateSidebarVisibility();
});

// Update Toronto time
function updateTorontoTime() {
  const torontoTime = document.getElementById('toronto-time');
  if (torontoTime) {
    const options = {
      timeZone: 'America/Toronto',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    const time = new Date().toLocaleTimeString('en-US', options);
    torontoTime.textContent = time;
  }
}

// Update time every second
setInterval(updateTorontoTime, 1000);
updateTorontoTime(); // Initial call
