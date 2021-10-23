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

const sections = document.querySelectorAll("section");
const navbarList = document.querySelector("#navbar__list");

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
function buildMenu() {
  sections.forEach((section, i) => {
    let elementFragment = document.createDocumentFragment();

    const newAnchor = document.createElement("a");
    const newList = document.createElement("li");

    newList.textContent = "Section " + (i + 1);
    newList.className = "section";
    newList.style.cssText = "color : black; padding : 20px;";

    newAnchor.href = "#section" + (i + 1);
    newList.className = "sectionAnchorList";

    newAnchor.appendChild(newList);
    elementFragment.appendChild(newAnchor);
    
    navbarList.appendChild(elementFragment);
  });
}

// Add class 'active' to section when near top of viewport
function setActive() {
  const sectionAnchorList = document.querySelectorAll(".sectionAnchorList");

  sections.forEach((section, i) => {
    window.addEventListener("scroll", function () {
      if (
        section.getBoundingClientRect().top >= 0 &&
        section.getBoundingClientRect().top <
          section.getBoundingClientRect().height
      ) {
        section.classList.add("active");
        sectionAnchorList[i].style.cssText =
          "background-color : grey;color:white; padding : 20px;";
      } else {
        section.classList.remove("active");
        sectionAnchorList[i].style.cssText = "color : black; padding : 20px;";
      }
    });
  });
}

// Scroll to anchor ID using scrollTO event
function scrollTo(section) {
  document.querySelector(section.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildMenu();
// Scroll to section on link click
document.querySelectorAll('a[href^="#"]').forEach((section) => {
  section.addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo(section);
  });
});
// Set sections as active
setActive();
