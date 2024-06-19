function applyPadding() {
  const element = document.getElementById('specialElement');
  if (window.innerWidth <= 470) {
    element.style.paddingBottom = '50px';
  } else {
    element.style.paddingBottom = '40px'; // or any other default value
  }
}

// Initial check
applyPadding();

// Check on window resize
window.addEventListener('resize', applyPadding);