const transitionBlock = document.getElementById("transitionBlock");
const links = document.querySelectorAll(".transition-link");
const linksImg1 = document.querySelectorAll(".transition-link-img1");
const linksImg2 = document.querySelectorAll(".transition-link-img2");
const linksImg3 = document.querySelectorAll(".transition-link-img3");
const linksImg4 = document.querySelectorAll(".transition-link-img4");

    // Show the transition block on page load
    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        transitionBlock.classList.add("hide"); // Slide up to reveal content
      }, 800); // Wait for a slight delay
    });

    // Handle link clicks
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent immediate navigation
        const targetUrl = e.target.href;

        // Add the show class to block and navigate after transition
        transitionBlock.classList.remove("hide");
        transitionBlock.classList.add("show");

        setTimeout(() => {
          window.location.href = targetUrl;
        }, 800); // Match the CSS transition duration
      });
    });

    // Refresh the page on back/forward navigation
    window.addEventListener("popstate", () => {
      location.reload(); // Reload the page when navigating through history
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
