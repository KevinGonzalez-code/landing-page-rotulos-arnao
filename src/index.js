import {
    printCardServices,
    printJobsGallery
} from "/helpers/cards.js"
import { submitForm } from "/helpers/form.js"
import { openModalGallery } from "/helpers/modal.js"
import { closeMenuMobile, openMenuMobile } from "/helpers/navbar.js"


//Navbar
const navbarMenu = document.querySelector('.navbar__menu')
const navbarClose = document.querySelector('.navbar__close-icon')

//Form
const form = document.querySelector('.form__cta-link')

//Gallery
const galleryImage = document.querySelector('.jobs__container')

printCardServices()
printJobsGallery()

//Events
navbarMenu.addEventListener('click', openMenuMobile)
navbarClose.addEventListener('click', closeMenuMobile)
document.addEventListener('scroll', closeMenuMobile)
form.addEventListener("click", submitForm)
galleryImage.addEventListener('click', openModalGallery)

