// Object with basic functions

const operatorObj = {

    '+': function add(a, b) { return a + b; },
    '-': function sub(a, b) { return a - b; },
    '×': function multiply(a, b) { return a * b; },
    '÷': function divide(a, b) { return a / b; }    
}

// variables --------

let keyString = "";
let operator = "";
let keyArray = [];
let display = "";
let runningTotal = 0;

// queries ---------

let operatorKey = document.querySelectorAll(`.key`);
let numKey = document.querySelectorAll(`.num-key`);
let equalsKey = document.querySelector(`.equals`);
let clearKey = document.querySelector(`.clear`);
let botDisplay = document.querySelector('.number-display');

// eventListeners ---------

clearKey.addEventListener('click', function (e) {
    let opDisplayChild = document.querySelector('.operator-display');
    while (opDisplayChild.firstChild) {
        opDisplayChild.removeChild(opDisplayChild.firstChild)
    }
    let numDisplay = document.querySelector('.number-display');
        numDisplay.textContent = "0"
});

numKey.forEach((div) => {
    div.addEventListener(`click`, function (e) {
        console.log("------NUMBER--------")
        display = e.target.innerText;
        if (keyString.includes('.') && display.includes('.') || keyString.length > 14 ) {
            return
        } else
        value = e.target.innerText;
        keyString += value;
        console.log(keyString + " string")
        console.log(keyArray + " array")
        divCheck();
        topDisplay();
        displayNumKey();
        
    });
});
  
operatorKey.forEach((div) => {
    div.addEventListener(`click`, function(e) {
        if (display === "+" || display === "" || display === "÷" || display === "x" || display === "<") { 
            display = ""
            return
        } else
        console.log("------OPERATOR---------")
        console.log(operator)                                      
        pushKeyArray();
        currentResult(runningTotal); 
        display = e.target.innerText
        operator = e.target.innerText
        console.log(keyArray)
        divCheck(); 
        topDisplay();
        divCheck();                            
        console.log(operator)
        console.log(keyString + " string")          
        console.log(keyArray + " array")          
        keyString = "";
    });
});

equalsKey.addEventListener(`click`, function (e) {
    console.log("-------EQUALS-------")
    if (display === "" || keyArray.length < 1 && display.length > 0) {
        return
    } else
    pushKeyArray();
    console.log(keyArray)
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
    // console.log(keyString = "")
    // console.log(operator = "")
    // console.log(keyArray = [])
    // console.log(display = "")
});


// functions ------------

function currentResult(runningTotal) {
    if (keyArray.length > 1) {
        
        let zeroIndexToNumber = Number(keyArray[0])
        let firstIndexToNumber = Number(keyArray[1])
        
        runningTotal = operate(zeroIndexToNumber, firstIndexToNumber, operatorObj[operator])
        console.log(runningTotal)

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
        topDisplay.removeChild(displayDiv.firstChild);
    }
}

function topDisplay() {
    let operatorDisplay = document.querySelector(`.operator-display`);
    let content = document.createElement(`div`);
    content.textContent = display;
    content.classList.add(`top-display-numbers`)
    operatorDisplay.appendChild(content)
}