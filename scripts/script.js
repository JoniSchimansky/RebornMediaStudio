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

    const primaryBtnLinks = document.querySelectorAll('.primary-btn.smooth-scroll');

    primaryBtnLinks.forEach(function(btnLink) {
        btnLink.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.parentElement.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// FAQs
document.querySelectorAll('.question').forEach((question) => {
    question.addEventListener('click', () => {
        const icon = question.querySelector('.toggle-icon');
        question.parentElement.classList.toggle('show-answer');
        icon.classList.toggle('rotate-icon');
    });
});

// Year
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Back to top
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top-btn").classList.add("show");
    } else {
        document.getElementById("back-to-top-btn").classList.remove("show");
    }
}

function scrollToTop() {
    const scrollToTopBtn = document.documentElement;

    scrollToTopBtn.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}





