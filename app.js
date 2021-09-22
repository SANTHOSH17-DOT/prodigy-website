const arrowR = document.querySelector('.fa-caret-right')
const arrowL = document.querySelector('.fa-caret-left')
const about = document.querySelector('#about')
const events = document.querySelector('#events')
const findUs = document.querySelector('#findUs')
const aboutLink = document.querySelector('#aboutL')
const eventLink = document.querySelector('#eventL')
const findLink = document.querySelector('#findUsL')
arrowL.style.opacity = '0';
arrowR.addEventListener('click', () => {
    if (about.style.display != 'none') {
        about.style.display = 'none'
        events.style.display = 'block'

        arrowL.style.opacity = 1;
    } else if (events.style.display != 'none') {

        events.style.display = 'none'
        findUs.style.display = 'block'
        arrowR.style.opacity = 0;
    }
})
arrowL.addEventListener('click', () => {
    if (events.style.display != 'none') {
        about.style.display = 'block'
        events.style.display = 'none'
        arrowL.style.opacity = 0;
    } else if (findUs.style.display != 'none') {
        findUs.style.display = 'none'
        events.style.display = 'block'
        arrowR.style.opacity = 1;
    }


})
eventLink.addEventListener('click', () => {
    about.style.display = 'none'
    events.style.display = 'block'
    findUs.style.display = 'none'
    arrowL.style.opacity = 1;
    arrowR.style.opacity = 1;
})
findLink.addEventListener('click', () => {
    about.style.display = 'none'
    events.style.display = 'none'
    findUs.style.display = 'block'
    arrowL.style.opacity = 1;
    arrowR.style.opacity = 0;

})
aboutLink.addEventListener('click', () => {
    about.style.display = 'block'
    events.style.display = 'none'
    findUs.style.display = 'none'
    arrowL.style.opacity = 0;
    arrowR.style.opacity = 1;

})