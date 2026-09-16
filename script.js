const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const modal = document.querySelector('#enquiry-modal');
const form = document.querySelector('#enquiry-form');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-open-enquiry]').forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

document.querySelectorAll('[data-close-modal]').forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  status.textContent = 'Thank you! We will be in touch shortly.';
  form.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();

const phoneNumber = '0710 241 295';
const phoneLink = 'tel:+254710241295';
const emailAddress = 'edisonkipkemoi319@gmail.com';
const whatsappLink = 'https://wa.me/254710241295';
const contactLinks = document.querySelectorAll('.contact-details a');
contactLinks[0].href = phoneLink;
contactLinks[0].lastChild.textContent = ` ${phoneNumber}`;
contactLinks[1].href = `mailto:${emailAddress}`;
contactLinks[1].lastChild.textContent = ` ${emailAddress}`;
contactLinks[2].href = whatsappLink;
document.querySelector('.socials a[aria-label="WhatsApp"]').href = whatsappLink;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
