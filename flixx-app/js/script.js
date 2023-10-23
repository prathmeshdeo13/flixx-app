// Function for getting the Current Page Path

const global = {
  currentPage: window.location.pathname,
};

console.log(global);

function highlightLink() {
  const links = document.querySelectorAll(".nav-link"); // Select all elements with the class 'nav-link'
  links.forEach((link) => {
    var hrefValue = link.getAttribute("href"); // Get the 'href' attribute value of the current 'link' element
    let url = '/flixx-app/' + hrefValue;
    if (url === global.currentPage) {
      link.classList.add("active"); // Add the 'active' class to the element with a matching 'href' value
    }
  });
}

function init() {
  localStorage.setItem("selectedURL", global.currentPage);
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      console.log("1. Home");
      break;
    case "/movies-details.html":
      console.log("2. Movie Details");
      highlightLink();
      break;
    case "/shows.html":
      console.log("3. Shows");
      break;
    case "/tv-details.html":
      console.log("3. Shows");
      break;
  }
  highlightLink();
}

document.addEventListener("DOMContentLoaded", init);
