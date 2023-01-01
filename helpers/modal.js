export const openModalGallery = (event) => {
    if (event.target.classList.contains("job__img")) {
        const src = event.target.getAttribute('src')
        document.querySelector('.modal-img').src = src
        const modal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        modal.show()
    }
}