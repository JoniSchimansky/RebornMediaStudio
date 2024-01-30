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
                smoothScrollTo(targetElement);
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
                smoothScrollTo(targetElement);
            }
        });
    });
});

function smoothScrollTo(target) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, 1000);
        window.scrollTo(0, run);
        if (timeElapsed < 1000) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
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
    const startPosition = window.pageYOffset;
    const distance = -startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, 1000);
        window.scrollTo(0, run);
        if (timeElapsed < 1000) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Info popups
const showWordpressModalBtn = document.getElementById('showWordpressModal');
const showEcommerceModalBtn = document.getElementById('showEcommerceModal');
const showCustomModalBtn = document.getElementById('showCustomModal');
const showAudioModalBtn = document.getElementById('showAudioModal');
const showWritingModal = document.getElementById('showWritingModal');
const showMultimediaModal = document.getElementById('showMultimediaModal');
const showSocialsModal = document.getElementById('showSocialsModal');
const showStrategyModal = document.getElementById('showStrategyModal');

const wordpressModal = document.getElementById('wordpressModal');
const ecommerceModal = document.getElementById('ecommerceModal');
const customModal = document.getElementById('customModal');
const audioModal = document.getElementById('audioModal');
const writingModal = document.getElementById('writingModal');
const multimediaModal = document.getElementById('multimediaModal');
const socialsModal = document.getElementById('socialsModal');
const strategyModal = document.getElementById('strategyModal');


const modals = [wordpressModal, ecommerceModal, customModal, audioModal, writingModal, multimediaModal, socialsModal, strategyModal];

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
    customModal.style.display = 'block';
});

showAudioModalBtn.addEventListener('click', function() {
    scrollTop = window.scrollY || document.documentElement.scrollTop; 
    audioModal.style.display = 'block';
});

showWritingModal.addEventListener('click', function() {
    scrollTop = window.scrollY || document.documentElement.scrollTop; 
    writingModal.style.display = 'block';
});

showMultimediaModal.addEventListener('click', function() {
    scrollTop = window.scrollY || document.documentElement.scrollTop; 
    multimediaModal.style.display = 'block';
});

showSocialsModal.addEventListener('click', function() {
    scrollTop = window.scrollY || document.documentElement.scrollTop; 
    socialsModal.style.display = 'block';
});

showStrategyModal.addEventListener('click', function() {
    scrollTop = window.scrollY || document.documentElement.scrollTop; 
    strategyModal.style.display = 'block';
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






