document.addEventListener("DOMContentLoaded", function() {
  function openLightbox(img) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var largeSrc = img.getAttribute('data-large-src');

    if (largeSrc) {
      lightboxImg.src = largeSrc;
    } else {
      lightboxImg.src = img.src;
    }

    lightbox.style.display = 'block';
    lightbox.classList.add('fade-in'); // Add fade-in class to apply animation
  }

  var lightbox = document.getElementById('lightbox');
  var closeBtn = document.getElementsByClassName('close')[0];

  closeBtn.onclick = function() {
    lightbox.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == lightbox) {
      lightbox.style.display = 'none';
    }
  }

  // Export the openLightbox function to be used in the HTML
  window.openLightbox = openLightbox;

  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'block') {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev');
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next');
      }
    }
  });

  // Add ARIA labels and roles
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-label', 'Image preview');
  lightbox.querySelector('.close').setAttribute('aria-label', 'Close preview');

  // Add focus trap
  function trapFocus(e) {
    if (lightbox.style.display === 'block') {
      const focusableElements = lightbox.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    }
  }

  document.addEventListener('keydown', trapFocus);
});
