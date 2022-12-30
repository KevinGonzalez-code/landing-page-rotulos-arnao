import {
    TypeValidation,
    WIDTH_DESKTOP
} from "./constants.js"

import {
    printCardCatalogs,
    printCardServices,
    printJobsGallery
} from "./helpers/cards.js"

//Navbar
const navbarMenu = document.querySelector('.navbar__menu')
const navbarLikns = document.querySelector('.navbar__container-links')
const navbarClose = document.querySelector('.navbar__close-icon')

//Form
const form = document.querySelector('.form')
const inputName = document.querySelector('.form__input--name')
const inputPhone = document.querySelector('.form__input--phone')
const textareaMessage = document.querySelector('.form__message')

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
    if (event.target.classList.contains("job__img")) {
        const src = event.target.getAttribute('src')
        document.querySelector('.modal-img').src = src
        const modal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        modal.show()
    }
}

const checkInputValid = (text, type) => {
    switch (type) {
        case TypeValidation.NAME:
            return /[A-Za-z]/.test(text);
        case TypeValidation.PHONE:
            return /[0-9]{9}/.test(text);
        case TypeValidation.MESSAGE:

            if (textareaMessage.value.length <= 20) {
                return false
            }
            return true;
    }
}

const submitForm = (event) => {
    event.preventDefault()


    const isValidName = checkInputValid(inputName.value, TypeValidation.NAME)
    const isValidPhone = checkInputValid(inputPhone.value, TypeValidation.PHONE)

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

galleryImage.addEventListener('click', openModalGallery)