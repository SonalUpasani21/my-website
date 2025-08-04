const typewriterText = document.querySelector(".typewriter-text");
const words = ["Business Analyst","Data Analyst", "Blogger"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (!isDeleting && charIndex <= currentWord.length) {
        typewriterText.textContent = currentWord.substring(0, charIndex);
        charIndex++;
        setTimeout(type, 200); // Typing speed
    } else if (isDeleting && charIndex >= 0) {
        typewriterText.textContent = currentWord.substring(0, charIndex);
        charIndex--;
        setTimeout(type, 100); // Deleting speed
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length; // Move to next word
        }
        setTimeout(type, 1000); // Pause before typing/deleting
    }
}

type();

function adjustTypewriterFontSize() {
    const typewriterText = document.querySelector(".typewriter-text");
    const screenWidth = window.innerWidth;

    if (screenWidth <= 480) {
        typewriterText.style.fontSize = "1.2rem"; // Small screens
    } else if (screenWidth <= 768) {
        typewriterText.style.fontSize = "1.4rem"; // Medium screens
    } else {
        typewriterText.style.fontSize = "2.4rem"; // Larger screens
    }
}

// Adjust font size on page load
adjustTypewriterFontSize();

// Adjust font size on window resize
window.addEventListener("resize", adjustTypewriterFontSize);


function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}


document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                scrollTo: { y: target, offsetY: 50 }, // Add offset for fixed navbar
                duration: 1.5,
                ease: "power2.out" // Smooth easing effect
            });
        }
    });
});


// Function to Open the Modal
function openModal(title, description) {
    let modal = document.getElementById('projectModal');
    let modalTitle = document.getElementById('modal-title');
    let modalDescription = document.getElementById('modal-description');

    // Set content dynamically
    modalTitle.innerText = title;
    modalDescription.innerText = description;

    // Ensure modal is displayed only when clicked
    modal.style.display = 'flex';
}

// Function to Close the Modal
function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Close Modal When Clicking Outside
window.onclick = function(event) {
    let modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
};


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('projectModal').style.display = 'none';
});


(function () {
    "use strict";

    var items = document.querySelectorAll(".timeline li, .education li");

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("in-view"); // Remove the class
                    void entry.target.offsetWidth; // Force reflow (browser trick)
                    entry.target.classList.add("in-view"); // Reapply animation class
                }
            });
        },
        { threshold: 0.2 } // Adjust threshold for triggering animation (0.2 = 20% of section in view)
    );

    items.forEach(function (item) {
        observer.observe(item);
    });
})();

  
document.getElementById("year").textContent = new Date().getFullYear();

