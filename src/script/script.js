'use strict';
const header = ['Пользователь', 'Дата регистрации', 'Последняя активность', 'Последнее действие']
let users = [
    { userEmail: "A@ukr.net", registrationDate: "Март 29, 2020", lastActivity: "Март 29, 2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "A@ukr.net", registrationDate: "Март 28, 2020", lastActivity: "Март 28, 2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "A@ukr.net", registrationDate: "Март 28, 2020", lastActivity: "Март 28, 2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "B@ukr.net", registrationDate: "Март 27, 2020", lastActivity: "Март 27, 2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "C@ukr.net", registrationDate: "Март 27, 2020", lastActivity: "Март 27, 2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "D@ukr.net", registrationDate: "Март 20, 2020", lastActivity: "Март 20, 2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "E@ukr.net", registrationDate: "Март 15, 2020", lastActivity: "Март 15, 2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "F@ukr.net", registrationDate: "Март 10, 2020", lastActivity: "Март 10, 2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "G@ukr.net", registrationDate: "Март 02, 2020", lastActivity: "Март 02, 2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "H@ukr.net", registrationDate: "Февраль 06, 2020", lastActivity: "Март 20, 2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
    { userEmail: "I@ukr.net", registrationDate: "Февраль 20, 2020", lastActivity: "Март 20, 2020", lastAction: "How to fix relationship How to fix relationship How to fix relationship" },
]

let btnUsers = document.querySelector('.users');
let text = document.querySelector('.contacts__text');
btnUsers.addEventListener('click', () => {
    getUsers(users, header);
    btnUsers.classList.add('active-btn');
});


//Hide show modal Window
const icon = document.querySelector('.calendar');
const pannel = document.querySelector('.pannel__modal');
const cancel = document.querySelector('.modal__cancel');
const refresh = document.querySelector('.modal__refresh');
icon.addEventListener('click', () => {
    toggleModal();
})
cancel.addEventListener('click', () => {
    toggleModal();
})
refresh.addEventListener('click', () => {
    toggleModal();
})
function toggleModal(){
    pannel.classList.toggle('active-mod');
}




//Table
let tableBody = document.querySelector('.contacts__table');
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
$(function () {
    $('#date_range').datepicker({
        range: 'period', // возможные значения: period, multiple
        range_multiple_max: 2, // максимальное число выбранных дат в режиме "Несколько дат"
        onSelect: function (dateText, inst, extensionRange) {
            // extensionRange - объект расширения
            $('[name=startDate]').val(extensionRange.startDateText);
            $('[name=endDate]').val(extensionRange.endDateText);
        }
    });

    $('#date_range').datepicker('setDate', ['d', '']);
    var extensionRange = $('#date_range').datepicker('widget').data('datepickerExtensionRange');
    if (extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
    if (extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
    if (extensionRange.endDateText) $('[name=endDate]').val(extensionRange.endDateText);
});


//Modal Window
let timeRange = '';

document.getElementsByClassName('modal__list')[0].addEventListener('click', (event) => {
    try {
        function swithActiveButton(event) {
            [...document.getElementsByClassName('modal__item')].forEach(elem => { elem.classList.remove('modal__active') })
            event.target.classList.add('modal__active');//add current active
            document.querySelector('.modal__list').classList.remove('modal__active');
        };
        swithActiveButton(event);

        timeRange = event.target.dataset.range; //return data range
        return
    }
    catch (err) {
        alert('Ошибка ' + err.name);
    }
})

// массив и промежуток времени
document.getElementsByClassName('modal__refresh')[0].addEventListener('click', () => {
    try {
        let newUsers = [];
        let date = new Date();
        let rangeFrom = '';
        let rangeTo = '';

        if (timeRange === '') {
            getUsers(users, header);
            showRange('Весь срок');


        } else if (timeRange === '1') {
            newUsers = users.filter(user => {
                let currDate = (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
                rangeFrom = 'Сегодня';
                return currDate === convertFormatData(user.registrationDate)
            });
            getUsers(newUsers, header);
            showRange(rangeFrom);


        } else if (timeRange === '-1') {
            newUsers = users.filter(user => {
                let yestDate = (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() - 1));
                rangeFrom = 'Вчера';
                return yestDate === convertFormatData(user.registrationDate)
            });
            getUsers(newUsers, header);
            showRange(rangeFrom);


        } else {
            newUsers = users.filter(user => {
                let currDate = (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
                let sevenDay = (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() - 7));
                rangeFrom = sevenDay;
                rangeTo = currDate;
                return convertFormatData(user.registrationDate) <= currDate && convertFormatData(user.registrationDate) >= sevenDay;
            });
            getUsers(newUsers, header);
            // showRange(sevenDay, currDate);
            showRange(rangeFrom, rangeTo);
        }
        //         return new Date(convertFormatData(user.registrationDate)) >= new Date('2020-03-02') && new Date(convertFormatData(user.registrationDate)) <= new Date('2020-03-27')
        





        function convertFormatData(date) {
            const arrMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
            let newDate = date.replace(/[,]/g, "").split(' ');
            arrMonth.forEach((month, index) => {
                if (newDate[0] == month) {
                    newDate[0] = index + 1;
                    return newDate;
                }
            })
            date = newDate[2] + '-' + newDate[0] + '-' + newDate[1];
            return date
        }


        function showRange(rangeFrom='', rangeTo=''){
            document.getElementsByClassName('pannel__range')[0].classList.remove('hide');
            let text = document.querySelector('.pannel__range--text');
            if ( !rangeTo ){
                text.innerText = rangeFrom;
            }else{
//вывести коректно формат
                text.innerText = 'Fistashka'
            }
            
            // showRange.addEventListener('click', () => {
            //     console.log('hi')
            // });
            //         //  let date = new Date();
//         //  let month = new Date().toLocaleString('ru', { month: 'long' });
//         //  console.log(month[0].toUpperCase()+month.slice(1) + ' ' + date.getDay() + ', ' + date.getFullYear() )
        }



    } catch (err) {
        alert('Ошибка ' + err.name);
    }
})



//         function checkDateEntrance(date, period) {


            // let rusDate = "Декабрь 10, 2020"; // => 2020-03-10
            // function convertFormatData(date){
            //     const arrMonth=['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь', 'Октябрь','Ноябрь','Декабрь'];
            //     // let newRuDate = rusDate.toLowerCase().replace(/[,]/g, "").split(' ');
            //     let newDate = date.replace(/[,]/g, "").split(' ');
            //     arrMonth.forEach( (month, index) => {
            //         if( newDate[0] == month ){
            //             newDate[0] = index + 1 ;
            //             return newDate;
            //         }
            //     })
            //     newDate = newDate[2] + '-' + newDate[0]  + '-'  + newDate[1];
            //     return newDate
            // } 
            // console.log(  )




//             // let options = {
//             //     year: "numeric",
//             //     month: "long",
//             //     day: "numeric"
//             //   }
//             // console.log(new Date().toLocaleDateString("ru-RU", options));


//             //перевести date  в формат 2017-04-01
//             let periods = period.split(',');
//             //console.log(periods) ["2017-04-01", "2020-04-27"]
//             // console.log(new Date(periods[0]))
//             // console.log(new Date( Date.parse("2017-04-01") ))



//             if (new Date( convertFormatData(rusDate) ) >= new Date(periods[0]) && date <= new Date(periods[1]))
//               console.log('УРА!');
//             else
//               console.log('ЖАЛЬ :(');
//           }

//           checkDateEntrance(new Date(), '2017-04-01,2020-04-27');



//     }
//     catch (err) {
//         alert('Ошибка ' + err.name);
//     }


//  })


//  function getRange( lastDay ){


//     // return new Table sort
//  }