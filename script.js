const menuIcon = document.querySelector('.hamburger-menu');
const page = document.querySelector('.page');
const modeIcon = document.querySelector('.mode');

// hamburger click

menuIcon.addEventListener('click', ()=> {
    page.classList.toggle('change');
    page.classList.toggle('btncls');
});

// Dark Mode Switcher

modeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
