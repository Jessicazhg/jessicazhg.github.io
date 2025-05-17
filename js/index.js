document.addEventListener('DOMContentLoaded', function() {
    const cardFrontRow = document.querySelector('.card-front-row');
    const cardSecondRow = document.querySelector('.card-second-row');
    const cardFullWidth = document.querySelector('.card-full-width');
    const cards = document.querySelectorAll('.card');
  
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
  
    function handleScroll() {
        // Check if full-width card is in viewport
        if (cardFullWidth && isElementInViewport(cardFullWidth)) {
            cardFullWidth.classList.add('visible');
            // Animate the card inside
            const fullWidthCard = cardFullWidth.querySelector('.card');
            if (fullWidthCard) {
                fullWidthCard.classList.add('visible');
            }
        }

        // Check if rows are in viewport
        if (cardFrontRow && isElementInViewport(cardFrontRow)) {
            cardFrontRow.classList.add('visible');
            // Animate individual cards in front row
            cardFrontRow.querySelectorAll('.card').forEach(card => {
                card.classList.add('visible');
            });
        }
        
        if (cardSecondRow && isElementInViewport(cardSecondRow)) {
            cardSecondRow.classList.add('visible');
            // Animate individual cards in second row
            cardSecondRow.querySelectorAll('.card').forEach(card => {
                card.classList.add('visible');
            });
        }
    }
  
    // Initial check on page load
    handleScroll();
  
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
  
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
        // Reset animations
        const fullWidthCard = newSection.querySelector('.card-full-width');
        if (fullWidthCard) {
            fullWidthCard.classList.remove('visible');
            const card = fullWidthCard.querySelector('.card');
            if (card) card.classList.remove('visible');
        }
        
        const cards = newSection.querySelectorAll('.card');
        cards.forEach(card => card.classList.remove('visible'));
        
        // Trigger scroll handler to check visibility
        setTimeout(() => {
            window.dispatchEvent(new Event('scroll'));
        }, 100);
    }
  
    // Add 'current' class to the clicked link
    const clickedLink = document.getElementById(linkId);
    console.log("Clicked link:", clickedLink);
    if (clickedLink) {
        clickedLink.classList.add('current');
        clickedLink.classList.remove('not-current');
    }
}