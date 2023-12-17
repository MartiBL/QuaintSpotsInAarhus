function referToMain() {
    // Redirect to index.html
    window.location.href = 'index.html';
}


  // Function to scroll to the top of the document
  function scrollToTop() {
    // Scroll to the top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Show/hide scroll-to-top button based on scroll position
  window.addEventListener('scroll', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

  });
  
  function toggleMenu() {
    var nav = document.getElementById('MainNav');
    nav.classList.toggle('show');
  }
  
  