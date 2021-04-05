let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.menu')
let links = document.querySelectorAll('.menu li')


// add event listener

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open')
    links.forEach(link => {
        link.classList.toggle('fade')
    })

})