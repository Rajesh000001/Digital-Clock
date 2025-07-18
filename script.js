const clock = document.querySelector(".clock");
const clockBar = document.querySelector(".clock-bar");
const clockDigits = document.querySelector(".clock-digits");
const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const hourNum = document.querySelector("#hour-num");
const minNum = document.querySelector("#min-num");
const secNum = document.querySelector("#sec-num");
const hourInput = document.querySelector("#hour-input");
const minInput = document.querySelector("#min-input");
const secInput = document.querySelector("#sec-input");
const setBtn = document.querySelector("#set-btn");
const invalidHour = document.querySelector("#invalid-hour");
const invalidMin = document.querySelector("#invalid-min");
const invalidSec = document.querySelector("#invalid-sec");


    let second;
    let minute;
    let hourCounter;
    

function set() {
    let isValid = true;
    let hint = parseInt(hourInput.value);
    let mint = parseInt(minInput.value);
    let sint = parseInt(secInput.value);
    if(!isNaN(hint) && hint >= 0 && hint < 24) {
        hourCounter = hint;
        hourNum.innerText = hourCounter;
        invalidHour.classList.add("invalid");
    } else {
        isValid = false;
        if(hourInput.value === "") {
        invalidHour.innerText = "*field cannot be empty";
        invalidHour.classList.remove("invalid");
        } else {
        invalidHour.innerText = "*Hour must be 0-23";
        invalidHour.classList.remove("invalid");
        }
    }
    if(!isNaN(mint) && mint >= 0 && mint < 60) {
        minute = mint;
        minNum.innerText = minute;
        invalidMin.classList.add("invalid");
    } else {
        isValid = false;
        if(minInput.value === "") {
        invalidMin.innerText = "*field cannot be empty";
        invalidMin.classList.remove("invalid");
        } else {
        invalidMin.innerText = "*Min must be 0-59";
        invalidMin.classList.remove("invalid");
        }
    }
    if(!isNaN(sint) && sint >= 0 && sint < 60) {
        second = sint;
        secNum.innerText = second;
        invalidSec.classList.add("invalid");
    } else {
        if(secInput.value === "") {
        isValid = false;
        invalidSec.innerText = "*field cannot be empty";
        invalidSec.classList.remove("invalid");
        } else {
        invalidSec.innerText = "*Sec must be 0-59";
        invalidSec.classList.remove("invalid");
        }
    }
    clearInterval(secId);
    if(isValid){
        timeCounter();
    }
    
}

let secId;

function timeCounter() {

        secId = setInterval(() => {

        second++;


        if(second === 60) {
            minute++;
            minNum.innerText = minute;
            
            if(minute === 60) {
                hourCounter++;

                if(hourCounter === 24) {
                    hourCounter = 0;
                    minute = 0;
                    second = 0;
                }
                
                minute = 0;
            }
            
            second = 0;
        }
        secNum.innerText = second.toString().padStart(2, "0");
        minNum.innerText = minute.toString().padStart(2, "0");
        hourNum.innerText = hourCounter.toString().padStart(2, "0");
    }, 1000);
};



setBtn.addEventListener("click", () => {
    set();
    
})