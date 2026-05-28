function copyIP() {
  const ip =
    document.getElementById('serverIP').innerText;

  navigator.clipboard.writeText(ip);

  const button =
    document.querySelector('.copy-btn');

  button.innerText = 'Copied!';

  setTimeout(() => {
    button.innerText = 'Copy IP';
  }, 2000);
}

function showPage(pageId) {
  const pages =
    document.querySelectorAll('.page');

  pages.forEach(page => {
    page.classList.remove('active-page');
  });

  document
    .getElementById(pageId)
    .classList.add('active-page');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', () => {
  const navbar =
    document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.style.background =
      'rgba(0,0,0,.82)';
  } else {
    navbar.style.background =
      'rgba(0,0,0,.55)';
  }
});
