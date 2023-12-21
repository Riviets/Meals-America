const backdrop = document.querySelector('.backdrop')
const openBtn = document.querySelector('.modal-open-btn')
const closeBtn = document.querySelector('.modal-close-btn')
openBtn.addEventListener('click', function () {
    backdrop.classList.remove('is-hidden')
})
closeBtn.addEventListener('click', function () {
    backdrop.classList.add('is-hidden')
})