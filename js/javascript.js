const shareButton = document.querySelector('.article__share-button');
const socialLinksBlock = document.querySelector('.social-links');
const socialLinks = document.querySelectorAll('.social-links__link');
const shareArrow = document.querySelector('svg path');

shareButton.addEventListener('click', () => {
  socialLinksBlock.classList.toggle('hidden');
  shareButton.classList.toggle('open');
  shareArrow.classList.toggle('open');
  if (shareButton.attributes['aria-expanded'].nodeValue === 'false') {
    shareButton.attributes['aria-expanded'].nodeValue = 'true';
  } else {
    shareButton.attributes['aria-expanded'].nodeValue = 'false';
  }
});

socialLinks.forEach((link) => {
  link.addEventListener('focusout', (event) => {
    if (event.relatedTarget === null) {
      return;
    }
    if (event.relatedTarget.classList.contains('social-links__link')) {
      return;
    } else {
      socialLinksBlock.classList.toggle('hidden');
    }
  });
});