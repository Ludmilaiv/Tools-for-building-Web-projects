import { dateCalc } from "./datecalc.js";
import { formatError } from "./utils.js";
import { change } from "./change.js";
import { startTimer, stopTimer } from "./timer.js";

const calcBtn = document.querySelector(".calc-button");
const timerBtn = document.querySelector(".timer-button");
const calc = document.getElementById("datecalc");
const timer = document.getElementById("timer");

const stopBtn = document.getElementById("stop");
const startBtn = document.getElementById("start");

change(calcBtn, timerBtn, calc, timer);

document.addEventListener("submit", handleCalcDates); 

function handleCalcDates(event) { 
    event.preventDefault(); 
    
    const dateCalcResult = event.target.querySelector(".datecalc__result"); 
    dateCalcResult.innerHTML = ""; 

    const { firstDateInput, secondDateInput } = event.target.elements; 
    const firstDate = firstDateInput.value; 
    const secondDate = secondDateInput.value; 
    
    if (firstDate && secondDate) { 
        if (event.target.id === "datecalc") {
            dateCalcResult.innerHTML = dateCalc(firstDate, secondDate);
        } else if (event.target.id === "timer"){
            const timer = startTimer(firstDateInput, secondDate, dateCalcResult, stopBtn);
            startBtn.setAttribute("disabled", true);
            stopBtn.addEventListener("click", function handleClick() {
                stopTimer(timer);
                stopBtn.removeEventListener("click", handleClick);
                stopBtn.setAttribute("disabled", true);
                startBtn.removeAttribute("disabled");
            })
            stopBtn.removeAttribute("disabled");
        }
    }
    else dateCalcResult.innerHTML = formatError("Необходимо заполнить оба поля");
}