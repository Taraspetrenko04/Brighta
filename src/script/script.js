'use strict';
const header = ['Пользователь', 'Дата регистрации', 'Последняя активность', 'Последнее действие']
const users = [
    { userEmail: "Oleg@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "Oleg@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "Oleg@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "Oleg@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "Oleg@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "Oleg@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "Oleg@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "Oleg@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "Oleg@ukr.net", registrationDate: "Март 20,2020", lastActivity: "Март 20,2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
]

let btnUsers = document.querySelector('.users');
let text = document.querySelector('.contacts__text');
btnUsers.addEventListener('click', () => {
    getUsers(users, header);
    btnUsers.classList.add('active-btn');
});


let tableBody = document.querySelector('.contacts__table');


async function getUsers(arr, header) {
    try {


        text.classList.add('hide');


        let tableRow;
        let tableCell;
        let tableHeadRow;
        let tableHeadCell;


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
