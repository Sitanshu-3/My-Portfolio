// Select the menu icon and navbar elements from the DOM
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Add an event listener to the menu icon for click event
menuIcon.onclick = () => {
    // Toggle the 'bx-x' class on the menu icon to change its appearance (e.g., from a hamburger to a close icon)
    menuIcon.classList.toggle('bx-x');
    
    // Toggle the 'active' class on the navbar to show or hide the navigation links
    navbar.classList.toggle('active');
}
