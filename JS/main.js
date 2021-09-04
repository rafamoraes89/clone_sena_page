let img1 = document.querySelector('#carousel-img1')
let img2 = document.querySelector('#carousel-img2')
let img3 = document.querySelector('#carousel-img3')
let windowWidth = window.innerWidth

if (windowWidth <= 1142) {
  img1.src = 'Assets/Images/slide_senac_mobile.jpg'
  img2.src = 'Assets/Images/slide_transparencia_mobile.jpg'
  img3.src = 'Assets/Images/slide_ead_mobile.jpg'
}

let menu = document.querySelector('#menu-principal')

let menu_icon = document.querySelector('.bi-list')

menu_icon.addEventListener('click', () => {
  menu.classList.toggle('active')
})
