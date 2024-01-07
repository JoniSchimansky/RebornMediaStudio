document.addEventListener("DOMContentLoaded", function() {
    const responsiveMenu = document.querySelector('.responsive-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const menuLinks = document.querySelectorAll('.mobile-nav a');

    responsiveMenu.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileNav.contains(event.target);
        const isClickInsideIcon = responsiveMenu.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideIcon) {
            mobileNav.classList.remove('active');
        }
    });

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    });
});

// Smooth menu scroll
document.addEventListener("DOMContentLoaded", function() {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

    smoothScrollLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


