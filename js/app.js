/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const navBar = document.querySelector(".navbar__menu");
const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const sectionOne = document.querySelector("#section1");
const sectionTwo = document.querySelector("#section2");
const sectionThree = document.querySelector("#section3");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function chkSctions() {
    const n = sections.length;
    for (let i = 0; i < n; i++) {
        const list = document.createElement("li");
        navList.appendChild(list);
        const link = document.createElement("a");
        list.appendChild(link);
        link.className = "menu__link";
        // new loop
        link.innerText = sections[i].id;
        const attr = "#" + sections[i].id;
        link.setAttribute("href", attr);
    }
}
chkSctions();

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

// }
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

const btns = document.querySelectorAll(".menu__link");

btns.forEach((btn) => {
    btn.addEventListener("click", function() {
        // function
        // to Add
        // class
        // active
    });
});