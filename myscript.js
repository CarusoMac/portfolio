let links = document.querySelectorAll('.nav-link');
let menu = document.querySelector('#navbarToggler');
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
  })
})
