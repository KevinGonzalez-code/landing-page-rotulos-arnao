import { WIDTH_DESKTOP } from "../constants/constants.js"

const navbarLikns = document.querySelector('.navbar__container-links')

export const resizeObserver = new ResizeObserver(() => {
    navbarLikns.style.display = window.innerWidth >= WIDTH_DESKTOP ? 'flex' : 'none'
})
resizeObserver.observe(document.body)

export const openMenuMobile = () => {
    navbarLikns.classList.add('navbar__links-open')
    navbarLikns.style.display = 'block'
}

export const closeMenuMobile = () => {
    navbarLikns.classList.remove('navbar__links-open')
    navbarLikns.style.display = window.innerWidth >= WIDTH_DESKTOP ? 'block' : 'none'
}
