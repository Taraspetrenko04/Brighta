// 'use strict';
const icon = document.querySelector('.calendar');
const pannel = document.querySelector('.pannel__modal');


icon.addEventListener('click', () => {
    toggleModal();
})


function toggleModal(){
    pannel.classList.toggle('active-mod');
}
