const navLink = document.querySelectorAll('.header .nav-link');
const header = document.querySelector('.header');
const headerCta = document.querySelector('.h-cta');
const navList = document.querySelector('.nav-list')
const counter = document.querySelector('.counter');
const counterVal = document.querySelectorAll('.counter-value');
const backTop = document.querySelector('.back-top');
const filterBtn = document.querySelectorAll('.filter-btn');
const portfolioItem = document.querySelectorAll('.portfolio-item');




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

// ADD EVENT LISENTER TO HEADER CTA BUTTON 
headerCta.addEventListener('click', (cta) => {
    cta.preventDefault();
    const ctaTarget = headerCta.getAttribute('href');
    const sectionTop = document.querySelector(ctaTarget).offsetTop - 80;
    window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
    });

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



// window.addEventListener('scroll', () => {
//     const windowPosition = window.scrollY;
//     const counterPosition = counter.offsetTop;

//     if (windowPosition > counterPosition) {
//         // COUNTER SECTION
//         counterVal.forEach((counter) => {
//             counter.innerText = '0';

//             const counterUpdate = () => {
//                 const target = +counter.getAttribute('data-target');
//                 const c = +counter.innerText;
//                 const increment = target / 500;

//                 if (c < target) {
//                     counter.innerText = `${Math.ceil(c + increment)}`
//                     setTimeout(counterUpdate, 1);
//                 }

//             }
//             counterUpdate();
//         })
//     }
// })

// ADD EVENT LISENTER TO BACK TO TOP BUTTON
backTop.addEventListener('click', (back) => {
    back.preventDefault();
    const backTarget = backTop.getAttribute('href');
    const sectionTop = document.querySelector(backTarget).offsetTop;
    window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
    });
})

// PORTFOLIO FILTER
filterBtn.forEach((filter) => {
    filter.addEventListener('click', (filElement) => {
        filElement.preventDefault();
        for (let btn of filterBtn) {
            btn.classList.remove('active');
        }
        filter.classList.add('active');

        // SHOW PORTFOLIO ITEM 
        portfolioItem.forEach((item) => {
            item.style.display = "none";
            let folio = filter.getAttribute('data-target');

            if (item.getAttribute('data-item') === folio || folio === 'all') {
                item.style.display = "block";
            }
        })
    })



});