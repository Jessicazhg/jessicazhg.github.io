document.addEventListener('DOMContentLoaded', function() {
  const cardFrontRow = document.querySelector('.card-front-row');
  const cardSecondRow = document.querySelector('.card-second-row');

  function makeVisible(element) {
      if (element) {
          const elementPos = element.getBoundingClientRect().top;
          const screenPos = window.innerHeight / 1.3;
          if (elementPos < screenPos) {
              element.classList.add('visible');
          }
      }
  }

  window.addEventListener('scroll', function() {
      makeVisible(cardFrontRow);
      makeVisible(cardSecondRow);
  });

  document.querySelectorAll('.portfolio-categories-centered a').forEach(link => {
      link.addEventListener('click', function(event) {
          showSection(event, link.dataset.section, link.id);
      });
  });
});

function showSection(event, sectionId, linkId) {
  event.preventDefault();
  console.log("showSection called with:", sectionId, linkId);

  // Hide all sections
  document.querySelectorAll('.portfolio-items').forEach(section => {
      section.style.display = 'none';
  });

  // Remove 'current' class from all links
  document.querySelectorAll('.portfolio-categories-centered a').forEach(link => {
      link.classList.remove('current');
      link.classList.add('not-current');
  });

  // Show the selected section
  const newSection = document.getElementById(sectionId);
  console.log("New section:", newSection);
  if (newSection) {
      newSection.style.display = 'block';
      setTimeout(() => {
          newSection.classList.add('slide-in');
      }, 0);
  }

  // Add 'current' class to the clicked link
  const clickedLink = document.getElementById(linkId);
  console.log("Clicked link:", clickedLink);
  if (clickedLink) {
      clickedLink.classList.add('current');
      clickedLink.classList.remove('not-current');
  }

  // Trigger visibility check for the new section (if needed)
  makeVisible(newSection.querySelector('.card-front-row'));
  makeVisible(newSection.querySelector('.card-second-row'));
}

