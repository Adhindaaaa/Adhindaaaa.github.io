const transitionBlock = document.getElementById("transitionBlock");
const links = document.querySelectorAll(".transition-link");
const linksImg1 = document.querySelectorAll(".transition-link-img1");
const linksImg2 = document.querySelectorAll(".transition-link-img2");
const linksImg3 = document.querySelectorAll(".transition-link-img3");
const linksImg4 = document.querySelectorAll(".transition-link-img4");

// Function to show the transition block
function showTransition() {
  transitionBlock.classList.remove("hide");
  transitionBlock.classList.add("show");
}

// Function to hide the transition block
function hideTransition() {
  setTimeout(() => {
    transitionBlock.classList.add("hide"); // Slide up to reveal content
    transitionBlock.classList.remove("show");
  }, 500); // Wait for a slight delay
}

// Show the transition block on page load
window.addEventListener("DOMContentLoaded", () => {
  hideTransition();
});

// Handle link clicks
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent immediate navigation
    const targetUrl = e.target.href;

    showTransition();

    setTimeout(() => {
      window.location.href = targetUrl;
    }, 500); // Match the CSS transition duration
  });
});

// Handle browser back/forward navigation
window.addEventListener("popstate", () => {
  showTransition();

  // Ensure the content is hidden before loading the new page
  setTimeout(() => {
    hideTransition();
  }, 500); // Match the CSS transition duration
});

// Handle link clicks for Atom2Atom
linksImg1.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent immediate navigation
    const targetUrl = "Atom2Atom.html";

    // Add the show class to block and navigate after transition
    transitionBlock.classList.remove("hide");
    transitionBlock.classList.add("show");

    setTimeout(() => {
      window.location.href = targetUrl;
    }, 500); // Match the CSS transition duration
  });
});

linksImg2.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent immediate navigation
    const targetUrl = "EchoSpeaker.html";

    // Add the show class to block and navigate after transition
    transitionBlock.classList.remove("hide");
    transitionBlock.classList.add("show");

    setTimeout(() => {
      window.location.href = targetUrl;
    }, 500); // Match the CSS transition duration
  });
});

linksImg3.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent immediate navigation
    const targetUrl = "GELIS.html";

    // Add the show class to block and navigate after transition
    transitionBlock.classList.remove("hide");
    transitionBlock.classList.add("show");

    setTimeout(() => {
      window.location.href = targetUrl;
    }, 500); // Match the CSS transition duration
  });
});

linksImg4.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent immediate navigation
    const targetUrl = "Traveloka.html";

    // Add the show class to block and navigate after transition
    transitionBlock.classList.remove("hide");
    transitionBlock.classList.add("show");

    setTimeout(() => {
      window.location.href = targetUrl;
    }, 500); // Match the CSS transition duration
  });
});