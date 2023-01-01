import { BASE_URL_IMAGES } from '../constants/constants.js'
import services from '../data/services.json' assert {type: "json"};
import jobs from '../data/jobs.json' assert {type: "json"};

export const printCardServices = () => {

    const servicesContainer = document.querySelector('.service__container')
    const {
        card,
        containerText,
        description: descriptionClass,
        img,
        title: titleClass
    } = services['class']

    services['data'].forEach(({ description, image, title }) => {

        //Elements
        const serviceCard = document.createElement('div')
        const cardTextContainer = document.createElement('div')

        const imgCard = document.createElement('img')
        const cardTitle = document.createElement('h3')
        const cardDescription = document.createElement('p')

        serviceCard.setAttribute('class', card)
        imgCard.setAttribute('class', img)
        cardTitle.setAttribute('class', titleClass)
        cardTextContainer.setAttribute('class', containerText)
        cardDescription.setAttribute('class', descriptionClass)

        imgCard.setAttribute('src', `${BASE_URL_IMAGES.concat(image)}`)
        imgCard.setAttribute('alt', title)

        cardTitle.textContent = title
        cardDescription.textContent = description

        cardTextContainer.appendChild(cardTitle)
        cardTextContainer.appendChild(cardDescription)

        serviceCard.appendChild(imgCard)
        serviceCard.appendChild(cardTextContainer)

        servicesContainer.appendChild(serviceCard)

    });

}

export const printJobsGallery = () => {

    const jobsContainer = document.querySelector('.job__container')


    jobs['data'].forEach(({ alt, image }) => {

        const { div, img } = jobs['class']

        const jobContainer = document.createElement('div')
        const imageElement = document.createElement('img')

        imageElement.setAttribute('class', img)
        jobContainer.setAttribute('class', div)

        imageElement.setAttribute('src', `${BASE_URL_IMAGES.concat(image)}`)
        imageElement.setAttribute('alt', alt)

        jobContainer.appendChild(imageElement)
        jobsContainer.appendChild(jobContainer)
    })
}

