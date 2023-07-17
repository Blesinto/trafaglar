// preloader
let loader = document.getElementById("preload");
let header = document.querySelector("header");


// window.addEventListener("load",()=>{
//  loader.style.display="none"
// } )
window.addEventListener("scroll", () => {
    header.classList.toggle("head", window.scrollY > 0);
});
setTimeout(() => {
    loader.style.display = "none"
}, 5000)

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')

// scroll reveal animation 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
    reset: true
})
sr.reveal('.home__data,.user_img,.right_icon', {
    origin: 'left'
})
sr.reveal('.home__img-bg,.left_icon', {
    origin: 'right'
})
sr.reveal('.service__title p,.section__head,.service__card,.newsletter__bg h1,.name div,.row,.copy,.nav__btn', {
    delay: 400
})