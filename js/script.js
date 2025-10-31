(() => {
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu-btn');
    const menuOptions = document.querySelector('.menu-options');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        if(menuOpen === false) {
            menu.classList.add('is-active');
            menuBtn.classList.add('open');
            menuOpen = true;
        } else {
            menu.classList.remove('is-active');
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    });

    menuOptions.addEventListener('click', () => {
        menu.classList.remove('is-active');
        menuBtn.classList.remove('open');
        menuOpen = false;
    });


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

    const projectsLink = document.querySelector('.projects-link');
    projectsLink.addEventListener('click', () => {
        smoothScroll('.projects', 1000);
    });

    const aboutLink = document.querySelector('.about-link');
    aboutLink.addEventListener('click', () => {
        smoothScroll('.about', 1000);
    });

    // Dark Mode Toggle Functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
})();
