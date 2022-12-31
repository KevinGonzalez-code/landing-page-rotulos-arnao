import {
    TypeValidation,
    WIDTH_DESKTOP
} from "./constants.js"

import {
    printCardServices,
    printJobsGallery
} from "./helpers/cards.js"

//Navbar
const navbarMenu = document.querySelector('.navbar__menu')
const navbarLikns = document.querySelector('.navbar__container-links')
const navbarClose = document.querySelector('.navbar__close-icon')

//Form
const form = document.querySelector('.form__cta-link')
const inputName = document.querySelector('.form__input--name')
const inputPhone = document.querySelector('.form__input--phone')
const inputEmail = document.querySelector('.form__input--email')
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

const createMessageError = (text) => {
    const elementError = document.createElement('p')
    elementError.setAttribute('class', 'form__input--error')
    elementError.textContent = text
    return elementError
}

const checkInputValid = (text, type) => {

    console.log(textareaMessage.value.length);

    switch (type) {
        case TypeValidation.NAME:
            return /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(text);
        case TypeValidation.PHONE:
            return /[0-9]{9}/.test(text);
        case TypeValidation.EMAIL:
            return /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(text);
        case TypeValidation.MESSAGE:
            return textareaMessage.value.length <= 20 ? false : true;
    }
}



const submitForm = (event) => {

    const isValidName = checkInputValid(inputName.value, TypeValidation.NAME)
    const isValidPhone = checkInputValid(inputPhone.value, TypeValidation.PHONE)
    const isValidMessage = checkInputValid(textareaMessage.value, TypeValidation.MESSAGE)
    const isValidEmail = checkInputValid(inputEmail.value, TypeValidation.EMAIL)

    inputName.style.border = !isValidName ? '1px solid red' : '1px solid #ccc'
    inputPhone.style.border = !isValidPhone ? '1px solid red' : '1px solid #ccc'
    textareaMessage.style.border = !isValidMessage ? '1px solid red' : '1px solid #ccc'
    inputEmail.style.border = !isValidEmail ? '1px solid red' : '1px solid #ccc'

    if (isValidName && isValidPhone && isValidMessage && isValidEmail) {
        fetch("https://formsubmit.co/ajax/info@rotulosarnao.es", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: inputName.value,
                phone: inputPhone.value,
                message: textareaMessage.value,
                email: inputEmail.value
            })
        }).then(data => {
            if (data.status === 200) {
                const modal = new bootstrap.Modal(document.getElementById('modalEmail'))
                modal.show()
                setTimeout(() => {
                    modal.hide()
                }, 4000)
            }
        })
            .catch(error => console.error(error))
    }

}

navbarMenu.addEventListener('click', openMenuMobile)
navbarClose.addEventListener('click', closeMenuMobile)

document.addEventListener('scroll', closeMenuMobile)
form.addEventListener("click", submitForm)
resizeObserver.observe(document.body)

printCardServices()
printJobsGallery()

galleryImage.addEventListener('click', openModalGallery)