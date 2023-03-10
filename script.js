// Object with basic functions

const operatorObj = {

    '+': function add(a, b) { return a + b; },
    '-': function sub(a, b) { return a - b; },
    '×': function multiply(a, b) { return a * b; },
    '÷': function divide(a, b) { return a / b; },
    '%': function squared(a, b) { return a % b }  
    } 

// VARIABLES --------

let keyString = "";
let operator = "";
let keyArray = [];
let display = "";
let runningTotal = 0;
let count = "0"
let secondCount = "0"

// QUERIES ---------

let operatorKey = document.querySelectorAll(`.key`);
let numKey = document.querySelectorAll(`.num-key`);
let equalsKey = document.querySelector(`.equals`);
let clearKey = document.querySelector(`.clear`);
let botDisplay = document.querySelector('.number-display');
let buttons = document.querySelectorAll('.key, .num-key, .equals, .clear, .go-back')

// EVENT LISTENERS ---------

buttons.forEach((div) => {
    div.addEventListener(`mouseenter`, function (e) {
        e.target.style.backgroundColor = `#aec4ef`;
        div.classList.add('button-hover');  
        div.addEventListener(`mouseleave`, function (e) {   
            e.target.style.backgroundColor = `rgb(240, 255, 255)`; 
            div.classList.remove('button-hover') ;  
        });
    });
});  

clearKey.addEventListener('click', function (e) {
    let opDisplayChild = document.querySelector('.operator-display');
    while (opDisplayChild.firstChild) {
        opDisplayChild.removeChild(opDisplayChild.firstChild)
    }
    let numDisplay = document.querySelector('.number-display');
        numDisplay.textContent = "0"
        // Reset variables to default values
        keyString = "";
        operator = "";
        keyArray = [];
        display = "";
        runningTotal = 0;
        count = "0";
        secondCount = "0";
});

numKey.forEach((div) => {
    div.addEventListener(`click`, function (e) {
        //console.log("------NUMBER--------")
        display = e.target.innerText;
        const divDisplay = document.querySelector('.operator-display');
        displayCount = divDisplay.querySelectorAll('.operator-display>div').length;
        if (keyString.includes('.') && display.includes('.') || 
            keyString.length > 14 || displayCount > 15 ||
            botDisplay.innerText === "" ) {
            return
        } else if (display == "00" || keyString.length > 14 || displayCount > 15) {
            value = "00"
        } else if (keyString === "") {
        value = e.target.innerText;
        } else
        value = e.target.innerText;
        keyString += value;
        divCheck();
        topDisplay();
        displayNumKey(); 
    });
});

operatorKey.forEach((div) => {
    div.addEventListener(`click`, function(e) {
        //console.log("------OPERATOR---------")
        const divDisplay = document.querySelector('.operator-display');
        displayCount = divDisplay.querySelectorAll('.operator-display>div').length;
        if (keyString === "" && (!display) || 
            display === "+" || 
            display === ""  || 
            display === "÷" || 
            display === "x" || 
            display === "<" ||
            display === "%" ||
            displayCount > 15) { 
            display = ""
            return
        } else                                 
        pushKeyArray();
        currentResult(runningTotal); 
        display = e.target.innerText
        operator = e.target.innerText
        divCheck(); 
        topDisplay();
        divCheck();                                 
        keyString = "";
    });
});

equalsKey.addEventListener(`click`, function (e) {
    // console.log("-------EQUALS-------")
    if (display === "" || keyArray.length < 1 && display.length > 0) {
        return
    } else
    pushKeyArray();
    if (keyArray[0] === "." || keyArray[1] === "." && keyString.length > 0) {
        return
    } else
    display = e.target.innerText;
    let zeroIndexToNumber = Number(keyArray[0])
    let firstIndexToNumber = Number(keyArray[1])
    let result = operate(zeroIndexToNumber, firstIndexToNumber, operatorObj[operator])
    let displayEqualResult = document.querySelector(`.number-display`)
    console.log(result)
    if (result === Infinity) {
        displayEqualResult.classList.add('to-infinity');
        displayEqualResult.textContent = "To Infinity and Beyond!"
    } else {
        displayEqualResult.textContent = parseFloat(result.toPrecision(13));
    }
});

// FUNCTIONS ------------

function currentResult(runningTotal) {
    if (keyArray.length > 1) {
        let zeroIndexToNumber = Number(keyArray[0])
        let firstIndexToNumber = Number(keyArray[1])
        runningTotal = operate(zeroIndexToNumber, firstIndexToNumber, operatorObj[operator])
        let displayCurrentResult = document.querySelector(`.number-display`)
        if (runningTotal === Infinity) {
            displayCurrentResult.classList.add('to-infinity');
            displayCurrentResult.textContent = "To Infinity and Beyond!"
        } else {
            let displayCurrentResult = document.querySelector(`.number-display`)
            displayCurrentResult.textContent = parseFloat(runningTotal.toFixed(13));
        }               
        console.log("currentResult: " + runningTotal + " running total") 
        if (keyArray.length > 1 ) {
            keyArray.splice(0, 2, runningTotal)
        } else
        return 
    } 
}

function operate(a, b, callBack) {
   return callBack(a, b);  
}

function pushKeyArray() {
    if (keyArray.length > 1) {
        keyArray.splice(1,1)
    } 
    keyArray.push(keyString);
}

function displayNumKey() {
    let numDisplay = document.querySelector(`.number-display`);
    numDisplay.textContent = keyString;
}

function divCheck() {
    let topDisplay = document.querySelector('.operator-display');
    let count = topDisplay.querySelectorAll('.operator-display>div').length;
    if (count > 22) {
        topDisplay.removeChild(topDisplay.firstChild);
    }
}

function topDisplay() {
    let operatorDisplay = document.querySelector(`.operator-display`);
    let content = document.createElement(`div`);
    content.textContent = display;
    content.classList.add(`top-display-numbers`)
    operatorDisplay.appendChild(content)
}


// REDUNDANT ------
// let goBack = document.querySelector('.go-back')
// goBack.addEventListener('click', function (e) {
//         console.log("-----GO BACK------")
//         console.log(keyString + " string") 
//         console.log(keyArray + " array")
//         console.log(operator)
//         console.log(keyString + " string")          
//         console.log(keyArray + " array")
//         let topDisplay = document.querySelector('.operator-display');
//         count = topDisplay.querySelectorAll('.operator-display>div').length;
//         if (topDisplay.lastChild.innerText === "+" ||
//             topDisplay.lastChild.innerText === "-" ||
//             topDisplay.lastChild.innerText === "×" ||
//             topDisplay.lastChild.innerText === "÷") {
//             topDisplay.removeChild(topDisplay.lastChild);
//         } else
//         console.log(operator)
//         if (count !== secondCount) {
//             for (let i = 0 ; i < keyString.length ; i++) {
//             topDisplay.removeChild(topDisplay.lastChild);
//             }
//         }
//         secondCount = topDisplay.querySelectorAll('.operator-display>div').length;
//         botDisplay.innerText = "";
//         if (keyString){
//              keyString = ""
//         } 
//         console.log(keyString);
//         console.log(display)
// });