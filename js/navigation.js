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
