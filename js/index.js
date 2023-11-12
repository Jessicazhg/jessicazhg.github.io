document.addEventListener('DOMContentLoaded', function() {
    const portfolioSection = document.querySelector('.portfolio-items');
  
    window.addEventListener('scroll', function() {
      const sectionPos = portfolioSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 1.3;
  
      if (sectionPos < screenPos) {
        portfolioSection.classList.add('visible');
      }
    });
  });