const seeMoreButton = document.querySelector('#see-more-button')
const hiddenItems = document.querySelectorAll(
  ".gallery-item[style='display:none']"
)
let hiddenCount = hiddenItems.length
seeMoreButton.addEventListener('click', function () {
  hiddenItems.forEach(item => {
    item.style.display = 'block'
  })
  hiddenCount = 0
  seeMoreButton.style.display = 'none'
})
if (hiddenCount === 0) {
  seeMoreButton.style.display = 'none'
}

function toggleMenu () {
  const menu = document.getElementById('menu')
  menu.classList.toggle('hidden')
}

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    document.getElementById('scrollToTopBtn').style.display = 'block'
  } else {
    document.getElementById('scrollToTopBtn').style.display = 'none'
  }
})
document
  .getElementById('scrollToTopBtn')
  .addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
const closeFooterBtn = document.getElementById('closeFooterBtn')
const myFooter = document.getElementById('myFooter')

closeFooterBtn.addEventListener('click', () => {
  myFooter.style.display = 'none'
})

function closeFooter () {
  document.getElementById('myFooter').style.display = 'none'
}
