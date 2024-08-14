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

function isInViewport(section) {
    var rect = section.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
}

function addHighlight(section) {
  let curSection = section.getAttribute('data-nav');
  let li = document.getElementsByClassName('menu__link');

  // Loop through the HTMLCollection of li elements
  for (let item of li) {
    // Holds the dataset of the current item in the li
    let navData = item.dataset.nav;

    // If the dataset in the item matches the current section, apply highlight class, else remove it.
    if (navData === curSection) {
      item.classList.add("highlight");
    } else {
      item.classList.remove("highlight");
    }
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
      newElement.dataset.nav = sections[i].getAttribute('data-nav');
      newElement.innerText = sections[i].getAttribute('data-nav');

      myDocFrag.appendChild(newElement);
  }

  ul.appendChild(myDocFrag);
}

// Add class 'active' to section when near top of viewport
function setClassActive(){
    for (let i=0; i < sections.length; i++){
        if (isInViewport(sections[i])){
            addHighlight(sections[i]);
            sections[i].classList.add("your-active-class");
        }else{
            sections[i].classList.remove("your-active-class");
        }
    }
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
document.addEventListener('scroll', function(){
  setClassActive();
});
