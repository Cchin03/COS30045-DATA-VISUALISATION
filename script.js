  const currentPage = window.location.pathname.split("/").pop();
  
  const navLinks = document.querySelectorAll(".cs-nav-list a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active"); // Add highlight
    }
  });