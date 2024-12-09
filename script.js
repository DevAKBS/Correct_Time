'use strict'
const correctTime = document.querySelector('.time');
const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');
const clickThis = document.querySelector('.time-button')
const show = document.querySelector('.displayTime')
const displayStuff = document.querySelector('.name')
setInterval(
    function (params) {
        const thisTime = new Date();
        // correctTime.textContent = `${thisTime.getHours()}:${thisTime.getMinutes()}:${thisTime.getSeconds()}`;
        hour.textContent = `${thisTime.getHours()}`
        minute.textContent = `${String(thisTime.getMinutes()).padStart(2, 0)}`
        second.textContent = `${String(thisTime.getSeconds()).padStart(2, 0)}`
    }, 1000
)
clickThis.addEventListener('click',
    function (params) {
        show.style.opacity = 1;
        displayStuff.textContent = 'THIS IS THE CORRECT TIME'
        clickThis.textContent = 'JavaScript Projects'
    }
)
