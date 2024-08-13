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

// Document Fragment to hold all <li> elements
const myDocFrag = document.createDocumentFragment();

// Retrieve ul nav from page
const ul = document.querySelector('ul');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function toggleActiveClass() {
  sections.forEach(addActive);
}

function getEventTarget(e){
  const target = e.target.closest(".menu__link");

  if(target){
    scrollToID(target.innerText);
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function generateNav() {
  // Populate Fragment with each list item
  for (let i = 0; i < sections.length; i++) {
      const newElement = document.createElement('li');
      newElement.classList.add("menu__link")
      newElement.innerText = sections[i].getAttribute('data-nav');

      myDocFrag.appendChild(newElement);
  }

  ul.appendChild(myDocFrag);
}

// Add class 'active' to section when near top of viewport
function addActive(section) {
  const { top } = section.getBoundingClientRect();
 
  section.classList.toggle('your-active-class', top >= 0);
}

// Scroll to anchor ID using scrollTO event
function scrollToID(id) {
    const sectionNum = "section" + id.slice(-1);
    
    const section = document.getElementById(sectionNum);
    
    const topPos = section.getBoundingClientRect().top + window.pageYOffset

    window.scrollTo({
        top: topPos, // scroll so that the element is at the top of the view
        behavior: 'smooth' // smooth scroll
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
generateNav();

// Scroll to section on link click
document.addEventListener("click", (e) => getEventTarget(e));

// Set sections as active
document.addEventListener('scroll', toggleActiveClass);
