
// YOUR WHATSAPP NUMBER
// Replace with your real number including 91.
// Do not use +, spaces or dashes.
const WHATSAPP_NUMBER = "919876543210";

// CURRENT YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();


// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", isOpen);
});


// CLOSE MOBILE MENU AFTER CLICK
document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});


// WHATSAPP ENQUIRY FUNCTION
function sendWhatsAppMessage(details) {
  const message = Object.entries(details)
    .filter(([key, value]) => value && String(value).trim())
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}


// HERO BOOKING FORM
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(bookingForm);

  sendWhatsAppMessage({
    "AC SERVICE BOOKING": "",
    "Name": formData.get("name"),
    "Mobile": formData.get("phone"),
    "Service": formData.get("service"),
    "Location": formData.get("location")
  });

});


// CONTACT FORM
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(contactForm);

  sendWhatsAppMessage({
    "NEW WEBSITE ENQUIRY": "",
    "Name": formData.get("name"),
    "Mobile": formData.get("phone"),
    "Service": formData.get("service"),
    "Location": formData.get("location"),
    "Message": formData.get("message")
  });

});


// SELECT SERVICE FROM SERVICE CARD
document.querySelectorAll("[data-service]").forEach(function (link) {
  link.addEventListener("click", function () {
    const selectedService = link.dataset.service;

    const bookingSelect =
      document.querySelector('#bookingForm select[name="service"]');

    const contactSelect =
      document.querySelector('#contactForm select[name="service"]');

    [bookingSelect, contactSelect].forEach(function (select) {
      if (!select) return;

      const option = [...select.options].find(function (item) {
        return item.value.toLowerCase() === selectedService.toLowerCase();
      });

      if (option) {
        select.value = option.value;
      }
    });
  });
});
