"use strict"

const months = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31];
const inputs = document.querySelectorAll("[id$=Inp");
const yearInpEl = document.querySelector('#yearInp');
const monthInpEl = document.querySelector('#monthInp');
const dayInpEl = document.querySelector('#dayInp');
const calcBtnEl = document.querySelector(".calc-btn");
const resultEl = document.querySelector('.result');
const resultYearEl = document.querySelector('.year-result');
const resultMonthEl = document.querySelector('.month-result');
const resultDayEl = document.querySelector('.day-result');

const date = new Date();
const [currentYear, currentMonth, currnetDay] = [date.getFullYear(), date.getMonth() + 1, date.getDate()];



calcBtnEl.addEventListener('click', function () {
    // Check validation
    for (let i = 0; i < inputs.length; i++) {
        // Reset
        inputs[i].classList.remove('wrong-input')
        document.querySelector(`.message-${i}`).textContent = '';
        if (inputs[i].value === '') {
            inputs[i].classList.add('wrong-input')
            document.querySelector(`.message-${i}`).textContent = 'Field is requiered'
            return 0;
        } else if (inputs[i].value < 1) {
            inputs[i].classList.add('wrong-input')
            document.querySelector(`.message-${i}`).textContent = "Must be valid"
            return 0;
        } else if (i === 0) {
            if (inputs[i].value > currentYear) {
                inputs[i].classList.add('wrong-input');
                document.querySelector(`.message-${i}`).textContent = "Must be valid";
                return 0;
            }
        } else if (i === 1) {
            if (inputs[i].value > 12) {
                inputs[i].classList.add('wrong-input');
                document.querySelector(`.message-${i}`).textContent = "Must be valid";
                return 0;
            }
        } else if (i === 2) {
            if (inputs[i].value > months[inputs[i - 1].value - 1]) {
                inputs[i].classList.add('wrong-input');
                document.querySelector(`.message-${i}`).textContent = "Must be valid";
                return 0;
            }
        }
    }
    let ageYear = currentYear - yearInpEl.value;
    let ageMonth = currentMonth - monthInpEl.value;
    if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
    }
    if (ageYear < 0) {
        resultEl.textContent = "Are you born in future?";
    }
    let ageDay = currnetDay - dayInpEl.value;
    if (ageDay < 0) {
        ageMonth--;
        ageDay += 30;
    }
    // if ((ageYear <= 0 && ageMonth < 0) || (ageYear <= 0 && ageDay < 0)) {
    //     console.log("Error");
    // }
    resultYearEl.textContent = ageYear;
    resultMonthEl.textContent = ageMonth;
    resultDayEl.textContent = ageDay;
})