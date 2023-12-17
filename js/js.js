// Execute the following code when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    
  // Get references to HTML elements
  const sections = document.querySelectorAll("section");
  const header = document.querySelector("header");
  const body = document.body;
  const navItems = document.querySelectorAll("nav ul li a");

  // Update the active navigation item based on the current section
  function updateActiveNavItem(currentSectionId) {
      navItems.forEach((navItem) => {
          const navItemId = navItem.getAttribute("href").substring(1);
          if (navItemId === currentSectionId) {
              navItem.classList.add("active");
          } else {
              navItem.classList.remove("active");
          }
      });
  }

  // Listen for scroll events
  window.addEventListener("scroll", function () {
      let currentSectionId = "";

      // Determine the current section based on scroll position
      sections.forEach((section) => {
          const sectionTop = section.offsetTop - header.clientHeight;
          const sectionBottom = sectionTop + section.clientHeight;

          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
              currentSectionId = section.id;
          }
      });

      // Apply different styles based on the current section
      switch (currentSectionId) {
          case "PageStart":
          case "FBMain":
              setSectionStyles("var(--mainC1)", "var(--background1)");
              break;
          case "MSMain":
              setSectionStyles("var(--mainC2)", "var(--background2)");
              break;
          case "LQMain":
          case "FooterMain":
              setSectionStyles("var(--mainC3)", "var(--background3)");
              break;
          default:
              setSectionStyles("var(--mainC1)", "var(--background1)");
      }

      // Update the active navigation item
      updateActiveNavItem(currentSectionId);
  });

  // Function to set styles for header and body based on section
  function setSectionStyles(headerColor, bodyColor) {
      header.style.backgroundColor = headerColor;
      body.style.backgroundColor = bodyColor;
  }
});

// Function to scroll to a specific section with a smooth animation
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Function to scroll to the top of the document with a smooth animation
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', function () {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');

});

// Function to redirect to Frederiksbjerg.html
function referToFB() {
  window.location.href = 'Frederiksbjerg.html';
}

// Function to redirect to Mollestien.html
function referToMS() {
  window.location.href = 'Mollestien.html';
}

// Function to redirect to LatinQuarter.html
function referToLQ() {
  window.location.href = 'LatinQuarter.html';
}
