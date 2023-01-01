import { TypeValidation } from "../constants/constants.js"

const inputName = document.querySelector('.form__input--name')
const inputPhone = document.querySelector('.form__input--phone')
const inputEmail = document.querySelector('.form__input--email')
const textareaMessage = document.querySelector('.form__message')

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

const fetchSendEmail = () => {
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