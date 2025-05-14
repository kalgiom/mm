const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.backgroundColor = '#c0392b';
});

ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.backgroundColor = '#e74c3c';
});