import { BASE_URL } from '../constants.js'
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
    } = services.class

    services.data.forEach(service => {

        const serviceCard = document.createElement('div')
        const cardTextContainer = document.createElement('div')

        const imgCard = document.createElement('img')
        const cardTitle = document.createElement('h3')
        const cardDescription = document.createElement('p')

        const { image, title, description } = service

        serviceCard.setAttribute('class', card)
        imgCard.setAttribute('class', img)
        cardTitle.setAttribute('class', titleClass)
        cardTextContainer.setAttribute('class', containerText)
        cardDescription.setAttribute('class', descriptionClass)

        imgCard.setAttribute('src', `${BASE_URL.concat(image)}`)
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


    jobs.data.forEach(job => {

        const { div, img } = jobs.class

        const jobContainer = document.createElement('div')
        const image = document.createElement('img')

        image.setAttribute('class', img)
        jobContainer.setAttribute('class', div)

        image.setAttribute('src', `${BASE_URL.concat(job.image)}`)
        image.setAttribute('alt', `${BASE_URL.concat(job.alt)}`)

        jobContainer.appendChild(image)
        jobsContainer.appendChild(jobContainer)
    })
}

