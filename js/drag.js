document.addEventListener('DOMContentLoaded', function() {
    const portfolioCategories = document.querySelector('.portfolio-categories-centered');

    let isDown = false;
    let startX;
    let scrollLeft;

    portfolioCategories.addEventListener('mousedown', (e) => {
      isDown = true;
      portfolioCategories.classList.add('active');
      startX = e.pageX - portfolioCategories.offsetLeft;
      scrollLeft = portfolioCategories.scrollLeft;
    });

    portfolioCategories.addEventListener('mouseleave', () => {
      isDown = false;
      portfolioCategories.classList.remove('active');
    });

    portfolioCategories.addEventListener('mouseup', () => {
      isDown = false;
      portfolioCategories.classList.remove('active');
    });

    portfolioCategories.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - portfolioCategories.offsetLeft;
      const walk = (x - startX) * 2; //scroll-fast
      portfolioCategories.scrollLeft = scrollLeft - walk;
    });

    portfolioCategories.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - portfolioCategories.offsetLeft;
      scrollLeft = portfolioCategories.scrollLeft;
    });

    portfolioCategories.addEventListener('touchend', () => {
      isDown = false;
    });

    portfolioCategories.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - portfolioCategories.offsetLeft;
      const walk = (x - startX) * 2; //scroll-fast
      portfolioCategories.scrollLeft = scrollLeft - walk;
    });
  });