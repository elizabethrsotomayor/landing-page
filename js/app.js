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

// NodeList containing all sections
const sections = document.querySelectorAll('section');

// listHTML is an empty string to populate with list items
let listHTML="";

// log each section id
//sections.forEach((section) => console.log(section.id));
//console.log(sections);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function generateListItemHTML(item) {
    return `<li class="menu__link">${item.getAttribute('data-nav')}</li>`;
}

sections.forEach((el) => {
    listHTML += generateListItemHTML(el);
})

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(html) {
    let navList = document.getElementById('navbar__list');
    navList.insertAdjacentHTML('afterbegin', html);
}

// Add class 'active' to section when near top of viewport
function addActive(section) {
  const { top } = section.getBoundingClientRect();
 
  section.classList.toggle('your-active-class', top >= 0);
}

function toggleActiveClass() {
  sections.forEach(addActive);
}

// Scroll to anchor ID using scrollTO event
function scrollToID(id) {
    const element = document.querySelectorAll('[data-nav]')
    console.log(element);
    
    // const topPos = element.getBoundingClientRect().top + window.pageYOffset

    // window.scrollTo({
    //     top: topPos, // scroll so that the element is at the top of the view
    //     behavior: 'smooth' // smooth scroll
    // })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav(listHTML);

// Scroll to section on link click
// document.addEventListener("click", function(e){
//   const target = e.target.closest(".menu__link"); // Or any other selector.

//   if(target){
//     // Do something with `target`.
//     console.log(target.innerText);
//     scrollToID(target.innerText);
//   }
// });

// Set sections as active
document.addEventListener('scroll', toggleActiveClass);
