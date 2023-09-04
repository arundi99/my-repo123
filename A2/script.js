// Dynamic Content

// Toggle additional information
const toggleButton = document.getElementById('toggle-button');
const additionalInfo = document.getElementById('additional-info');

toggleButton.addEventListener('click', () => {
    additionalInfo.classList.toggle('hidden');
});

// Image Slider

const images = ["Cocker-Spaniel-laying-down-in-the-grass.jpg", "English-Cocker-Spaniel-sitting-on-a-rug-near-the-door.jpg", "English-Springer-Spaniel-in-a-scent-work-trial-outdoors.jpg", "Cavalier-King-Charles-Spaniels-in-harnesses-on-leads-meeting-each-other.jpg", "ANC2016-Conformation-Sporting-Group-David-0E9A8484.jpg",
    "English-Toy-Spaniel-standing-in-profile-on-the-beach.jpg", "Field-Spaniel-running-in-a-field.jpg", "Papillon-laying-in-the-grass-outdoors.20200513145032873.jpg",
    "Sussex-Spaniel-sitting-on-a-park-bench.jpg", "Welsh-Springer-Spaniels-laying-side-by-side-in-the-grass.jpg"];
let currentIndex = 0;

const slider = document.getElementById('image-slider');

function changeImage() {
    slider.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 3000); // Change image every 3 seconds

// Form Validation

const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
    const email = emailInput.value;
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
    }
});

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Smooth Scrolling

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
