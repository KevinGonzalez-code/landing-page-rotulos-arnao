import { BASE_URL_CATALOGS, BASE_URL_IMAGES } from '../constants.js'
import services from '../data/services.json' assert {type: "json"};
import jobs from '../data/jobs.json' assert {type: "json"};
import catalogs from '../data/catalogs.json' assert {type: "json"};

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


    jobs.data.forEach(job => {

        const { div, img } = jobs.class

        const jobContainer = document.createElement('div')
        const image = document.createElement('img')

        image.setAttribute('class', img)
        jobContainer.setAttribute('class', div)

        image.setAttribute('src', `${BASE_URL_IMAGES.concat(job.image)}`)
        image.setAttribute('alt', `${BASE_URL_IMAGES.concat(job.alt)}`)

        jobContainer.appendChild(image)
        jobsContainer.appendChild(jobContainer)
    })
}

export const printCardCatalogs = () => {

    const catalogsContainer = document.querySelector('.catalog_container')
    const { data, label } = catalogs


    data.forEach(({ copy, file, title }) => {

        const { classContainer, classCopy, classLink, classTitle } = catalogs.class

        const catalogContainer = document.createElement('div')
        const catalogTitle = document.createElement('h3')
        const catalogCopy = document.createElement('p')
        const catalogLink = document.createElement('a')

        catalogContainer.setAttribute('class', classContainer)
        catalogTitle.setAttribute('class', classTitle)
        catalogCopy.setAttribute('class', classCopy)
        catalogLink.setAttribute('class', classLink)

        catalogLink.setAttribute('href', `${BASE_URL_CATALOGS.concat(file)}`)
        catalogLink.setAttribute('target', '_blank')
        catalogLink.setAttribute('alt', file)

        catalogCopy.textContent = copy
        catalogLink.textContent = label
        catalogTitle.textContent = title

        catalogContainer.appendChild(catalogTitle)
        catalogContainer.appendChild(catalogCopy)
        catalogContainer.appendChild(catalogLink)

        catalogsContainer.appendChild(catalogContainer)
    })
}

