const arrowR = document.querySelector('.fa-caret-right')
const arrowL = document.querySelector('.fa-caret-left')
const about = document.querySelector('#about')
const events = document.querySelector('#events')
const findUs = document.querySelector('#findUs')
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