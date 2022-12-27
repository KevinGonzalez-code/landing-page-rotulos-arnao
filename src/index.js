import {
    REGEX_NAME,
    REGEX_PHONE,
    WIDTH_DESKTOP
} from "./constants.js"

import {
    printCardCatalogs,
    printCardServices,
    printJobsGallery
} from "./helpers/helpers.js"

//Navbar
const navbarMenu = document.querySelector('.navbar__menu')
const navbarLikns = document.querySelector('.navbar__container-links')
const navbarClose = document.querySelector('.navbar__close-icon')

//Form
const form = document.querySelector('.form')
const inputName = document.querySelector('form__input--name')
const inputPhone = document.querySelector('form__input--phone')

//Gallery
const galleryImage = document.querySelector('.jobs__container')

const resizeObserver = new ResizeObserver(() => {
    navbarLikns.style.display = window.innerWidth >= WIDTH_DESKTOP ? 'flex' : 'none'
})

const openMenuMobile = () => {
    navbarLikns.classList.add('navbar__links-open')
    navbarLikns.style.display = 'block'
}

const closeMenuMobile = () => {
    navbarLikns.classList.remove('navbar__links-open')
    navbarLikns.style.display = window.innerWidth >= WIDTH_DESKTOP ? 'block' : 'none'
}

const openModalGallery = (event) => {
    if(event.target.classList.contains("job__img")){
        const src = event.target.getAttribute('src')
        document.querySelector('.modal-img').src = src
        const modal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        modal.show()
    }
}

const checkInputValid = (text, regex) => regex.test(text)


const submitForm = (event) => {
    event.preventDefault()

    const isValidName = checkInputValid(inputName.value, REGEX_NAME)
    const isValidPhone = checkInputValid(inputPhone.value, REGEX_PHONE)

    if (isValidName && isValidPhone) {
        form.submit()
    }
}

navbarMenu.addEventListener('click', openMenuMobile)
navbarClose.addEventListener('click', closeMenuMobile)

document.addEventListener('scroll', closeMenuMobile)
form.addEventListener("submit", submitForm)
resizeObserver.observe(document.body)

printCardServices()
printJobsGallery()
printCardCatalogs()

galleryImage.addEventListener('click',openModalGallery)