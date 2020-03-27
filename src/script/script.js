'use strict';
const header = ['Пользователь', 'Дата регистрации', 'Последняя активность', 'Последнее действие']
let users = [
    { userEmail: "A@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "B@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "C@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "D@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "E@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "F@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "G@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "H@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "I@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
]

let btnUsers = document.querySelector('.users');
let text = document.querySelector('.contacts__text');
btnUsers.addEventListener('click', () => {
    getUsers(users, header);
    btnUsers.classList.add('active-btn');
});


let tableBody = document.querySelector('.contacts__table');

//Table
async function getUsers(arr, header) {
    try {
        text.classList.add('hide');


        let tableRow;
        let tableCell;
        let tableHeadRow;
        let tableHeadCell;


        // Table Head
        tableHeadRow = document.createElement('tr');
        tableHeadRow.classList.add('contacts__row')
        for (let k = 0; k < header.length; k++) {
            tableHeadCell = document.createElement('th');
            tableHeadCell.classList.add('contacts__cell')
            tableHeadCell.textContent = header[k];
            tableHeadRow.appendChild(tableHeadCell);
        }


        // Reset the table
        tableBody.innerHTML = '';
        tableBody.appendChild(tableHeadRow);

        // Table Body
        for (let i = 0; i < arr.length; i++) {
            tableRow = document.createElement('tr');
            tableRow.classList.add('contacts__row')
            tableBody.appendChild(tableRow);


            let values = Object.values(arr[i])
            for (let j = 0; j < values.length; j++) {
                tableCell = document.createElement('td');
                tableCell.classList.add('contacts__cell')
                tableCell.textContent = values[j];
                tableRow.appendChild(tableCell);
            }
        }


    } catch (err) {
        alert('Ошибка ' + err.name);
        let errText = document.createElement('p');
        errText.innerText = `Error is: ${err.name}`;
        tableBody.appendChild(errText);
    }
}


// Calendar
$(function() {
  $('#date_range').datepicker({
    range: 'period', // возможные значения: period, multiple
    range_multiple_max: 2, // максимальное число выбранных дат в режиме "Несколько дат"
    onSelect: function(dateText, inst, extensionRange) {
    	// extensionRange - объект расширения
      $('[name=startDate]').val(extensionRange.startDateText);
      $('[name=endDate]').val(extensionRange.endDateText);
    }
  });

  $('#date_range').datepicker('setDate', ['d', '']);
  var extensionRange = $('#date_range').datepicker('widget').data('datepickerExtensionRange');
  if(extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
  if(extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
  if(extensionRange.endDateText) $('[name=endDate]').val(extensionRange.endDateText);
});


//Modal Window
document.getElementsByClassName('modal__list')[0].addEventListener('click', (event) => {
    try {


        function swithActiveButton(event){
            [...document.getElementsByClassName('modal__item')].forEach(elem => { elem.classList.remove('modal__active') })
            event.target.classList.add('modal__active');//add current active
         };
         swithActiveButton(event);
         
         
         let date = new Date();
         let month = new Date().toLocaleString('ru', { month: 'long' });
         console.log(month[0].toUpperCase()+month.slice(1) + ' ' + date.getDay() + ',' + date.getFullYear() )
         
        
    }
    catch (err) {
        alert('Ошибка ' + err.name);
    }

     
 })


 function getRange( lastDay ){


    // return new Table sort
 }