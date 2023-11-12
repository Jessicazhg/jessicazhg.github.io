document.addEventListener('DOMContentLoaded', function() {
    const cardFrontRow = document.querySelector('.card-front-row');
    const cardSecondRow = document.querySelector('.card-second-row');
  
    function makeVisible(element) {
      const elementPos = element.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 1.3;
  
      if (elementPos < screenPos) {
        element.classList.add('visible');
      }
    }
  
    window.addEventListener('scroll', function() {
      makeVisible(cardFrontRow);
      makeVisible(cardSecondRow);
    });
  });