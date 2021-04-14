const navLink = document.querySelectorAll('.header .nav-link');
const header = document.querySelector('.header');
const navList = document.querySelector('.nav-list')



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
})