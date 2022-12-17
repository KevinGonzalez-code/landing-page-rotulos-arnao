import { REGEX_NAME, REGEX_PHONE, WIDTH_DESKTOP } from "./constants.js"

const navbarMenu = document.querySelector('.navbar__menu')
const navbarLikns = document.querySelector('.navbar__links')
const navbarClose = document.querySelector('.navbar__close-icon')

const form = document.querySelector('.form')
const inputName = document.querySelector('form__input--name')
const inputPhone = document.querySelector('form__input--phone')

const resizeObserver = new ResizeObserver(() => {
    navbarLikns.style.display = window.innerWidth >= WIDTH_DESKTOP ? 'block' : 'none'
})

const openMenuMobile = () => {
    navbarLikns.classList.add('navbar__links-open')
    navbarLikns.style.display = 'flex'
}

const closeMenuMobile = () => {
    navbarLikns.classList.remove('navbar__links-open')
    navbarLikns.style.display = window.innerWidth >= WIDTH_DESKTOP ? 'block' : 'none'
}

const checkInputValid = (text, regex) => regex.test(text)


const submitForm = (event) => {
    event.preventDefault()

    const isValidName = checkInputValid(inputName.value, REGEX_NAME)
    const isValidPhone = checkInputValid(inputName.value, REGEX_PHONE)

    if (isValidName && isValidPhone) {
        form.submit()
    }

}

navbarMenu.addEventListener('click', openMenuMobile)
navbarClose.addEventListener('click', closeMenuMobile)
document.addEventListener('scroll', closeMenuMobile)
form.addEventListener("submit", submitForm)
resizeObserver.observe(document.body)