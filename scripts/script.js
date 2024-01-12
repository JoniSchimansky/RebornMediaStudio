// Responsive menu
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

// Info popups
const showWordpressModalBtn = document.getElementById('showWordpressModal');
const showEcommerceModalBtn = document.getElementById('showEcommerceModal');
const showCustomModalBtn = document.getElementById('showCustomModal');

const wordpressModal = document.getElementById('wordpressModal');
const ecommerceModal = document.getElementById('ecommerceModal');
const custoModal = document.getElementById('customModal');


const modals = [wordpressModal, ecommerceModal, custoModal];

const closeButtons = document.querySelectorAll(".close");

let scrollTop = 0;

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = button.closest('.modal');
        modal.style.display = "none";
        document.body.style.overflow = '';
        window.scrollTo(0, scrollTop); 
    });
});

showWordpressModalBtn.addEventListener('click', function() {
    scrollTop = window.scrollY || document.documentElement.scrollTop; //Avoid back to top when closing modal
    wordpressModal.style.display = 'block';
});

showEcommerceModalBtn.addEventListener('click', function() {
    scrollTop = window.scrollY || document.documentElement.scrollTop; 
    ecommerceModal.style.display = 'block';
});

showCustomModalBtn.addEventListener('click', function() {
    scrollTop = window.scrollY || document.documentElement.scrollTop; 
    custoModal.style.display = 'block';
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            window.scrollTo(0, scrollTop); 
        }
    });
});

// Close modal when clicking on price
document.addEventListener('DOMContentLoaded', function () {
    var closeModalButtons = document.querySelectorAll('.close-modal');

    for (var i = 0; i < closeModalButtons.length; i++) {
        closeModalButtons[i].addEventListener('click', function () {
            var modal = this.closest('.modal');
            
            if (modal) {
                modal.style.display = 'none';
            }
        });
    }
});






