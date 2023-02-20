// Object with basic functions

const operatorObj = {

    '+': function add(a, b) { return a + b; },
    '-': function sub(a, b) { return a - b; },
    'x': function multiply(a, b) { return a * b; },
    '÷': function divide(a, b) { return a / b; }    
}

// variables --------

let keyString = "";
let operator = "";
let keyArray = [];
let operatorArray = [];
let display = "";
let runningTotal = 0;


// queries ---------

let operatorKey = document.querySelectorAll(`.key`);
let numKey = document.querySelectorAll(`.num-key`);
let equalsKey = document.querySelector(`.equals`);


numKey.forEach((div) => {
    div.addEventListener(`click`, function (e) {
        
        value = e.target.innerText;
        console.log(typeof e.target.innerText)
        display = e.target.innerText;
        keyString += value;
        console.log("num: " + keyString + " string")
        console.log("num: " + keyArray + " array")
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
        console.log("--------------")
        // console.log("operator: " + runningTotal + " running total") // 0
        console.log(operator)                                      
        pushKeyArray();
        currentResult(runningTotal); 
        display = e.target.innerText
        operator = e.target.innerText
        console.log(keyArray)
        
        pushOperator();
        topDisplay();
                                       
        console.log("operator: " + operator)
        console.log("operator: " + keyString + " string")          
        console.log("operator: " + keyArray + " array")          
        console.log("operator: " + runningTotal + " running total") 
        keyString = "";
        
        // if (keyArray.length > 1 ) {
        //     keyArray.splice(0, 2, runningTotal)
        // } else
        // return  
    });
});

function currentResult(runningTotal) {
    if (keyArray.length > 1) {
        
        let zeroIndexToNumber = Number(keyArray[0])
        let firstIndexToNumber = Number(keyArray[1])
        
        runningTotal = operate(zeroIndexToNumber, firstIndexToNumber, operatorObj[operator])
        
        let displayCurrentResult = document.querySelector(`.number-display`)
        displayCurrentResult.textContent = parseFloat(runningTotal.toFixed(13));
                                             
        console.log("currentResult: " + runningTotal + " running total") 
        if (keyArray.length > 1 ) {
            keyArray.splice(0, 2, runningTotal)
        } else
        return 
    } 
}

function runningArray(runningTotal) { 
    //console.log(runningTotal) 
}

equalsKey.addEventListener(`click`, function (e) {
    // if (display = typeof Number) {
    //     display = display
    //     return
    // } else
    pushKeyArray();
    display = e.target.innerText;
    
    let zeroIndexToNumber = Number(keyArray[0])
    let firstIndexToNumber = Number(keyArray[1])
    
    let result = operate(zeroIndexToNumber, firstIndexToNumber, operatorObj[operator])

    let displayEqualResult = document.querySelector(`.number-display`)
    displayEqualResult.textContent = parseFloat(result.toPrecision(13));   
});


function operate(a, b, callBack) {
   return callBack(a, b); 
   //console.log(callBack(a, b));  
}


function pushOperator() {
    operatorArray.push(operator);
   // console.log(operatorArray)
}

function pushKeyArray() {
    keyArray.push(keyString);
   // console.log(keyArray);   
}


function displayNumKey() {
    let numDisplay = document.querySelector(`.number-display`);
    numDisplay.textContent = keyString;
    //console.log(keyStringChoice)
}


function topDisplay() {
    let operatorDisplay = document.querySelector(`.operator-display`);
    let content = document.createElement(`div`);
    content.textContent = display;
    content.classList.add(`top-display-numbers`)
    operatorDisplay.appendChild(content)
}



// function log() {
//     console.log(keyString = "")
//     console.log(operator = "")
//     console.log(keyArray = [])
//     console.log(operatorArray = [])
//     console.log(display = "")
// }