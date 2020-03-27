'use strict';

//Hide show modal Window
const icon = document.querySelector('.calendar');
const pannel = document.querySelector('.pannel__modal');
const cancel = document.querySelector('.modal__cancel');
icon.addEventListener('click', () => {
    toggleModal();
})
cancel.addEventListener('click', () => {
    toggleModal();
})
function toggleModal(){
    pannel.classList.toggle('active-mod');
}
