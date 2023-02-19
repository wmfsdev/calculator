// basic functions

const operatorObj = {

    '+': function add(a, b) { return a + b; },
    '-': function sub(a, b) { return a - b; },
    'X': function multiply(a, b) { return a * b; },
    '/': function divide(a, b) { return a / b; }    
}

// --------

let keyString = "";
let operator = "";
let keyArray = [];
let operatorArray = [];
let display = "";

let operatorKey = document.querySelectorAll(`.key`);
let numKey = document.querySelectorAll(`.num-key`);
let equalsKey = document.querySelector(`.equals`);


numKey.forEach((div) => {

    div.addEventListener(`click`, function (e) {
        value = e.target.innerText;
        display = e.target.innerText;
        keyString += + value;
        // console.log(`"1st" ${keyString}`)
        // console.log(display)
        topDisplay();
        displayNumKey(keyString); 
    });
});

   
operatorKey.forEach((div) => {
    div.addEventListener(`click`, function(e) {
        if (display === "+" || display === "" || display === "/" || display === "x" || display === "<") { 
            display = ""
            return
        } else
        
        display = e.target.innerText
        operator = e.target.innerText
        //console.log(keyArray)
        
        pushOperator();
        pushKeyArray();
        topDisplay();
        currentResult();
        //console.log(operator)
        console.log(keyString)
        console.log(keyArray)
        keyString = "";
    });
});

function currentResult() {
    if (keyArray.length > 1) {
        
        let zeroIndexToNumber = Number(keyArray[0])
        let firstIndexToNumber = Number(keyArray[1])

        let result = operate(zeroIndexToNumber, firstIndexToNumber, operatorObj[operator])

        let displayCurrentResult = document.querySelector(`.number-display`)
        displayCurrentResult.textContent = result;
    } 
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
    displayEqualResult.textContent = result;
    
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


function displayNumKey(keyStringChoice) {

    let numDisplay = document.querySelector(`.number-display`);
    numDisplay.textContent = keyStringChoice;
}


function topDisplay() {
    let operatorDisplay = document.querySelector(`.operator-display`);
    let content = document.createElement(`div`);
    content.textContent = display;
    operatorDisplay.appendChild(content)
}



// function log() {
//     console.log(keyString = "")
//     console.log(operator = "")
//     console.log(keyArray = [])
//     console.log(operatorArray = [])
//     console.log(display = "")
// }