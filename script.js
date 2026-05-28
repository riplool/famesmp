// Example: smooth scroll to sections
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').slice(1);
        document.getElementById(targetID).scrollIntoView({ behavior: 'smooth' });
    });
});
