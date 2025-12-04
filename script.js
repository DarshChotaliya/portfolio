// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Close nav on link click (mobile)
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
}

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Simple contact form handling (front-end only)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Please fill in all required fields.";
      formStatus.style.color = "#f97373";
      return;
    }

    // This is only front-end, no backend email sending.
    // You can later connect this with Formspree / EmailJS / backend API.
    formStatus.textContent = "Thank you! Your message has been recorded locally.";
    formStatus.style.color = "#4ade80";

    this.reset();
  });
}
