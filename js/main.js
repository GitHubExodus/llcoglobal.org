// Custom JS (optional)

// Example: Submit Prayer Request (console log)
const prayerForm = document.querySelector('#prayer form');
if (prayerForm) {
  prayerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = prayerForm.querySelector('input').value;
    const request = prayerForm.querySelector('textarea').value;
    console.log(`Prayer request submitted: ${name} - ${request}`);
    alert('Thank you! Your prayer request has been submitted.');
    prayerForm.reset();
  });
}

// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// ===========================
// Dynamic Gallery Loader
// ===========================
const galleryContainer = document.getElementById("galleryGrid");

// Only run if gallery section exists
if (galleryContainer) {
  // Adjust this number to however many images you have
  const totalImages = 55; 

  for (let i = 41; i <= totalImages; i++) {
    const img = document.createElement("img");
    img.src = `gallery/image${i}.jpeg`;  // all images should be named image1.jpeg, image2.jpeg, etc.
    img.alt = `Gallery Image ${i}`;
    img.className = "w-full h-64 object-cover hover:scale-105 transition-transform duration-500";

    const wrapper = document.createElement("div");
    wrapper.className = "overflow-hidden rounded-lg shadow-lg";
    wrapper.appendChild(img);

    galleryContainer.appendChild(wrapper);
  }
}
