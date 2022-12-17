import { BASE_URL } from '../constants.js'
import services from '../data/services.json' assert {type: "json"};

// const printCardServices = () => {

//     const serviceCard = document.createElement('div')
//     const imgCard = document.createElement('img')
//     const cardTitle = document.createElement('h3')
//     const cardTextContainer = document.createElement('div')
//     const cardDescription = document.createElement('p')
//     const servicesContainer = document.querySelector('.service__container')

//     const { card, containerText, description, img, title } = services.class

//     services.data.forEach(service => {
//         const { image, title, description } = service

//         console.log(services)

//         serviceCard.setAttribute('class', card)
//         imgCard.setAttribute('class', img)
//         cardTitle.setAttribute('class', title)
//         cardTextContainer.setAttribute('class', containerText)
//         cardDescription.setAttribute('class', description)

//         imgCard.setAttribute('src', `${BASE_URL.concat(image)}`)
//         imgCard.setAttribute('alt', title)

//         cardTitle.createTextNode(title)
//         cardDescription.createTextNode(description)

//         containerText.appendChild(cardTitle)
//         containerText.appendChild(cardDescription)

//         serviceCard.appendChild(imgCard)
//         serviceCard.appendChild(containerText)

//         servicesContainer.appendChild(serviceCard)

//     });

//     serviceCard.classList.add('service__card')
// }

const setClassElements = (elements) => {

    elements.map(element => element.setAttribute('class', ''))
}