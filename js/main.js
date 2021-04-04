window.addEventListener('DOMContentLoaded', () => {
    const nav_menu = document.querySelector('.nav_menu'),
    nav_item = document.querySelectorAll('.nav_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        nav_menu.classList.toggle('nav_menu_active');
    });

    nav_item.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            nav_menu.classList.toggle('nav_menu_active');
        })
    })
})