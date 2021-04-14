const navLink = document.querySelectorAll('.header .nav-link');
const header = document.querySelector('.header');
const navList = document.querySelector('.nav-list')
const counter = document.querySelectorAll('.counter-value');




// ADD EVENT LISENTER TO LINKS & Go To Target Section
navLink.forEach((nav) => {

    nav.addEventListener('click', (el) => {
        el.preventDefault();
        // Store Href for selected link
        const linkTarget = nav.getAttribute('href');
        const sectionTop = document.querySelector(linkTarget).offsetTop - 80;
        window.scrollTo({
            top: sectionTop,
            behavior: "smooth"
        });

        // ADD ACTIVE CLASS TO SELECTED LINK
        // nav.classList.add('active');
        allLinks = document.querySelectorAll('.nav-list .nav-link');
        for (li of allLinks) {
            li.classList.remove('active');

        }
        nav.classList.add('active');
    })
})

// ADD CLASS "IS SCROLLED" TO HEADER WHEN SCROLLING
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('is-scrolled');
    } else {
        header.classList.remove('is-scrolled');
    }

    const position = window.offsetTop || document.documentElement.scrollTop
        || document.body.scrollTop;

    navLink.forEach((link) => {
        let currLink = link;
        let linkHref = currLink.getAttribute('href');
        let elements = document.querySelector(linkHref);
        if (elements.offsetTop - 80 <= position &&
            (elements.offsetTop - 80 + elements.offsetHeight > position)) {
            document.querySelector('.nav-link').classList.remove('active');
            currLink.classList.add('active');
        } else {
            currLink.classList.remove('active');
        }
    })
});


// COUNTER SECTION
counter.forEach((counter) => {
    counter.innerText = '0';

    const counterUpdate = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(counterUpdate, 1);
        }

    }

    counterUpdate();

})