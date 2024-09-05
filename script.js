const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('navlist');

// Toggle menu open/close and change icon
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // Toggle between the menu and close icon
    if (menuIcon.classList.contains('bx-menu')) {
        menuIcon.classList.remove('bx-menu');
        menuIcon.classList.add('bx-x');
    } else {
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    }
});


window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});
