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

    let second;
    let minute;
    let hourCounter;
    

function set() {
    let hint = parseInt(hourInput.value);
    let mint = parseInt(minInput.value);
    let sint = parseInt(secInput.value);
    if(hint >= 0 && hint < 24) {
        hourCounter = hint;
        hourNum.innerText = hourCounter;
    }
    if(mint >= 0 && mint < 60) {
        minute = mint;
        minNum.innerText = minute;
    }
    if(sint >= 0 && sint < 60) {
        second = sint;
        secNum.innerText = second;
    }
    clearInterval(secId);
    timeCounter();
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