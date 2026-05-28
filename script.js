function showPage(pageId) {
  const pages = document.querySelectorAll('.page');

  pages.forEach(page => {
    page.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');
}

function copyIP() {
  const ip = document.getElementById("ip").innerText;

  navigator.clipboard.writeText(ip);

  alert("IP Copied!");
}
