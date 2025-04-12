document.addEventListener('DOMContentLoaded', function() {
  console.log('CivicLink website loaded!');

  // Get the search form and add event listener
  const searchBar = document.querySelector('.search-bar');
  if (searchBar) {
    searchBar.addEventListener('submit', function(event) {
      event.preventDefault();
      const searchInput = document.querySelector('.search-bar input');
      alert('Searching for: ' + searchInput.value);
      // Would normally send this to a backend to find representatives
    });
  }

  // Add hover effects to category links
  const categoryLinks = document.querySelectorAll('.category-link');
  categoryLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });

    link.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Add click events to service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', function() {
      const title = this.querySelector('h3').textContent;
      console.log('Service clicked: ' + title);
      // Would normally navigate to service page
    });
  });

  // Make the "More" links work
  const moreLinks = document.querySelectorAll('.more-link');
  moreLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const issueTitle = this.parentElement.querySelector('h3').textContent;
      alert('You clicked to view more about: ' + issueTitle);
      // Would normally navigate to issue detail page
    });
  });

  // Setup signup form
  const signupForm = document.querySelector('.signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const nameInput = signupForm.querySelector('input[placeholder="Full Name"]');
      const phoneInput = signupForm.querySelector('input[placeholder="Phone number"]');

      // Very basic validation - I'm learning!
      if (!nameInput.value) {
        alert('Please enter your name');
        return;
      }

      if (!phoneInput.value) {
        alert('Please enter your phone number');
        return;
      }

      alert('Thank you for signing up, ' + nameInput.value + '!');

      // Reset form
      nameInput.value = '';
      phoneInput.value = '';
    });
  }

  // This adds a small animation to the steps in How It Works section
  const steps = document.querySelectorAll('.step');
  steps.forEach((step, index) => {
    // Add a small delay for each step to create a cascading effect
    setTimeout(() => {
      step.style.transition = 'opacity 0.5s ease-in-out';
      step.style.opacity = '1';
    }, index * 300);
  });

  // I know I need to add a mobile menu toggle, but I'm still learning!
  /* 
  const menuToggle = document.createElement('button');
  menuToggle.classList.add('menu-toggle');
  menuToggle.textContent = '≡';

  const header = document.querySelector('.site-header');
  header.prepend(menuToggle);

  menuToggle.addEventListener('click', function() {
    document.querySelector('.main-nav').classList.toggle('active');
  });
  */
});