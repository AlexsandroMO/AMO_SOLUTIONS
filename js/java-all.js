function loadPage(url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;

      // Atualiza menu ativo
      document.querySelectorAll('.menu a').forEach(link => link.classList.remove('active'));
      const activeLink = Array.from(document.querySelectorAll('.menu a'))
        .find(link => link.getAttribute('onclick')?.includes(url));
      if (activeLink) activeLink.classList.add('active');
    });
}
