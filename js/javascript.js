// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// The onclick event occurs when the user clicks on an HTML element.

// scorll sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => { // this is a neat way to add an event listener, so basically, we can do this instead: 
    
    sections.forEach(sec => {
        let top = window.scrollY; // it shows you how much you scrolled
        let offset = sec.offsetTop - 100; // This shows you the distance between the top edge of the element and its ancestor
        let height = sec.offsetHeight; // the height of the element including everything like borders and padding
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); // if the user scrolls at least 100px, the class will be added

    // remove toggle icon and navbar when click navbar links (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
} 


/* window.addEventListener("scroll", function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}); */



