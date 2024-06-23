const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const faq = toggle.parentNode;
        faq.classList.toggle('active');
        const expanded = faq.classList.contains('active');
        toggle.setAttribute('aria-expanded', expanded);
    });
});
