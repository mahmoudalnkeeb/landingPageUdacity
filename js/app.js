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
const listLink = document.querySelectorAll("li a");
const header = document.querySelector(".page__header");

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
        // const attr = "#" + sections[i].id;
        // link.setAttribute("href", attr);
    }
}
chkSctions();

// addEventListener to menu__link and click on it make target section as active

const btns = document.querySelectorAll(".menu__link");

btns.forEach((btn) => {
    // addEventListener
    btn.addEventListener("click", function() {
        //because on 1st function i'm getting my link innerText from section id i will reverse that to use it to identfy the section by id

        const id = btn.innerText;
        const sectiona = document.getElementById(id);
        sectiona.getAttribute("class") == "your-active-class";
        sectiona.classList.add("your-active-class");
        //this to check if there is onther active sections and make it unactive
        sections.forEach((section) => {
            const not = section.getAttribute("id");
            if (not !== id) {
                section.classList.remove("your-active-class");
            }
        });

        sections.forEach((section) => {
            //looping over all sections to get their locations on page
            section = sectiona; //specify section by make it equal to needed section id
            const sectionNeeded = section.offsetTop;
            window.scroll({
                top: sectionNeeded + 100,
                behavior: "smooth",
            });
        });
    });
});

//scroll make sections active

window.addEventListener("scroll", () => {
    //this add event listener to user window with type of scroll
    let position = ""; //this empty variable will store the section id

    sections.forEach((section) => {
        //this forEach loops over section and find section that is nearest to top of user window and give it the class that will make it active
        const cur = section.offsetTop; //here i got help from referances like MDN to search about method useful
        const height = section.clientHeight;
        const pageY = pageYOffset + 200;
        if (pageY - 50 >= cur) {
            position = section.getAttribute("id");
        }
        //the following loop will remove the class active from all sections and add active class for element with id stored on variable called position on previous loop
        sections.forEach((section) => {
            section.classList.remove("your-active-class");
            if (section.getAttribute("id") === position) {
                section.classList.add("your-active-class");
            }
            //the following loop it's job to loop over all links or btns on navbar and the first step on loop like i did before to remove active class to prevent alot of links became active and the add the active class to btn with text equal to id which stored on postion
            btns.forEach((btn) => {
                btn.classList.remove("link__active");
                if (btn.innerText === position) {
                    btn.classList.add("link__active");
                }
            });
        });
    });
});

//smooth scroll to top button
const btnTop = document.querySelector("#btnTop");

window.addEventListener("scroll", () => {
    if (
        document.documentElement.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});
btnTop.addEventListener("click", scrollTop);

function scrollTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

//drop menu small screen

const drop = document.querySelector(".btnDrop");

drop.addEventListener("click", () => {
    navList.classList.toggle("closed");
});

//i was thinking that i need black navbar but at the same time it's covering content so way not to make funaction to give it some transparency when user scroll down
window.addEventListener("scroll", () => {
    if (
        document.documentElement.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
    ) {
        header.style.backgroundColor = "#00000080";
    } else {
        header.style.backgroundColor = "#000";
    }
});