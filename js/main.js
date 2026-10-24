// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach((item) => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach((openItem) => {
      if (openItem !== item) openItem.classList.remove('open');
    });
    item.classList.toggle('open', !isOpen);
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Quote form submission (posts to contact-handler.php)
const quoteForm = document.getElementById('quote-form');
const formSuccess = document.getElementById('form-success');

quoteForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = quoteForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  try {
    const response = await fetch(quoteForm.action, {
      method: 'POST',
      body: new FormData(quoteForm),
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      quoteForm.hidden = true;
      formSuccess.hidden = false;
    } else {
      throw new Error('Submission failed');
    }
  } catch (err) {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
    alert('Something went wrong sending your request. Please call us at (773) 341-6521 instead.');
  }
});
