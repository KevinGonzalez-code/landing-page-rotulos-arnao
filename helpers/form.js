import { TypeValidation } from "../constants/constants.js"

const inputName = document.querySelector('.form__input--name')
const inputPhone = document.querySelector('.form__input--phone')
const inputEmail = document.querySelector('.form__input--email')
const textareaMessage = document.querySelector('.form__message')

const requestOptions = {
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
}

const checkInputValid = (text, type) => {
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

const changeTextErrorModal = () => {
    document.getElementById('title-modal').innerHTML = 'Error, no se a podido enviar el correo'
    document.getElementById('copy-modal').innerHTML = 'Por favor intentelo de nuevo mas tarde, disculpe las molestias.'
}

const fetchSendEmail = () => {
    const modal = new bootstrap.Modal(document.getElementById('modalEmail'))

    fetch("https://formsubmit.co/ajax/info@rotulosarnao.es", requestOptions)
        .then(({ status }) => {
            if (status === 200) {
                modal.show()
                document.querySelector('.form').reset()
            } else {
                changeTextErrorModal()
                modal.show()
            }
        }).finally(() => {
            setTimeout(() => {
                modal.hide()
            }, 4000)
        })
}

export const submitForm = (event) => {

    const isValidName = checkInputValid(inputName.value, TypeValidation.NAME)
    const isValidPhone = checkInputValid(inputPhone.value, TypeValidation.PHONE)
    const isValidMessage = checkInputValid(textareaMessage.value, TypeValidation.MESSAGE)
    const isValidEmail = checkInputValid(inputEmail.value, TypeValidation.EMAIL)

    inputName.style.border = !isValidName ? '1px solid red' : '1px solid #ccc'
    inputPhone.style.border = !isValidPhone ? '1px solid red' : '1px solid #ccc'
    textareaMessage.style.border = !isValidMessage ? '1px solid red' : '1px solid #ccc'
    inputEmail.style.border = !isValidEmail ? '1px solid red' : '1px solid #ccc'

    if (isValidName && isValidPhone && isValidMessage && isValidEmail) {
        fetchSendEmail()
    }

}

