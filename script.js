const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');
const menuOptions = document.querySelector('.menu-selection'); 

var hide = () => {
    menu.classList.remove('is-active');
};

var hideShow = () => {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }
};

burgerButton.addEventListener('click', hideShow);
menuOptions.addEventListener('click', hide);

var prevScrollPos = window.pageYOffset;
window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = 0;
    } else {
        document.getElementById("navbar").style.top = "-98px";
    }
    prevScrollPos = currentScrollPos;
};

var smoothScroll = (target, duration) => {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition;
    var startTime = null; 

    var animation = (currentTime) => {
        if(startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if(timeElapsed < duration) requestAnimationFrame(animation);
            };

    var ease = (t, b, c, d) => {
    t /= d/2;
	if (t < 1) return c/2*t*t*t*t + b;
	t -= 2;
	return -c/2 * (t*t*t*t - 2) + b;
    };

    requestAnimationFrame(animation);
};

const projectsLink = document.querySelector('.projectsLink');
projectsLink.addEventListener('click', () => {
    smoothScroll('.projects', 1000);
});

const aboutLink = document.querySelector('.aboutLink');
aboutLink.addEventListener('click', () => {
    smoothScroll('.about', 1000);
});

const contactLink = document.querySelector('.contactLink');
contactLink.addEventListener('click', () => {
    smoothScroll('.contact', 1000);
});