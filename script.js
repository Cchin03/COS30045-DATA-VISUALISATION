  // Get current page file name (e.g. "aboutus.html")
  const currentPage = window.location.pathname.split("/").pop();

  // Select all nav links
  const navLinks = document.querySelectorAll(".cs-nav-list a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active"); // Add highlight
    }
  });