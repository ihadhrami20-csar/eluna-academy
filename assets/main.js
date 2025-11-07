// Modal functionality

const signupBtn = document.getElementById('signupBtn');
const getStartedBtn = document.getElementById('getStartedBtn');
const signupModal = document.getElementById('signupModal');
const closeModal = document.getElementById('closeModal');
const signupForm = document.getElementById('signupForm');
const thankYouMsg = document.getElementById('thankYouMsg');
const logoLink = document.getElementById('logoLink');
const navLinks = document.querySelectorAll('.nav-link');

// Smooth scroll for navigation links and logo
function smoothScrollTo(targetId) {
  const target = document.querySelector(targetId);
  if (target) {
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: 'smooth'
    });
  }
}

if (logoLink) {
  logoLink.addEventListener('click', function(e) {
    e.preventDefault();
    smoothScrollTo('#home');
  });
}
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    smoothScrollTo(link.getAttribute('href'));
  });
});
// Also smooth scroll for Get Started button
if (getStartedBtn) {
  getStartedBtn.addEventListener('click', function(e) {
    e.preventDefault();
    openModal();
    smoothScrollTo('#signupModal');
  });
}

function openModal() {
  signupModal.style.display = 'flex';
  thankYouMsg.style.display = 'none';
  signupForm.style.display = 'block';
}
function closeModalFunc() {
  signupModal.style.display = 'none';
}
signupBtn.addEventListener('click', openModal);
getStartedBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalFunc);
window.onclick = function(event) {
  if (event.target === signupModal) {
    closeModalFunc();
  }
};
signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  signupForm.style.display = 'none';
  thankYouMsg.style.display = 'block';
  // Placeholder for backend integration
  // You can send the email to your backend here
});
// Animation on scroll for cards
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 1s';
    }
  });
}, { threshold: 0.2 });
cards.forEach(card => {
  observer.observe(card);
});
