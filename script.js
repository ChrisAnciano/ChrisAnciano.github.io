document.getElementById('hamburger').addEventListener('click', function() {
    const headerMenu = document.querySelector('.header-nav ul');
    const icons = document.querySelector('.icons');
    headerMenu.classList.toggle('show');
    icons.classList.toggle('show');
    console.log('Header Menu Display:', window.getComputedStyle(headerMenu).display);
    console.log('Icons Display:', window.getComputedStyle(icons).display);
});
