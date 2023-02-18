
// basic functions

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


let keyString = "";
let operator = "";
let keyArray = [];
let operatorArray = [];
let display = ""

let operatorKey = document.querySelectorAll(`.key`);
let numKey = document.querySelectorAll(`.num-key`);
let equalsKey = document.querySelector(`.equals`);


numKey.forEach((div) => {

    div.addEventListener(`click`, function (e) {
        value = e.target.innerText;
        display = e.target.innerText;
        keyString += + value;
        console.log(`"1st" ${keyString}`)
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

        currentEval();

        pushOperator();
        pushKeyArray();
        //console.log(operator)
        topDisplay();
        keyString = "";
    });
});

function currentEval() {
    if (keyArray.length >= 2) {
        
    }
}


equalsKey.addEventListener(`click`, function (e) {
    pushKeyArray();
    display = e.target.innerText;
    let zeroIndexToNumber = Number(keyArray[0])
    let firstIndexToNumber = Number(keyArray[1])
    //console.log(zeroIndexToNumber, firstIndexToNumber)
    operate(zeroIndexToNumber, firstIndexToNumber, add)
});


function operate(a, b, callBack) {
   console.log(callBack(a, b));  
}


function pushOperator() {
    operatorArray.push(operator);
    console.log(operatorArray)
}

function pushKeyArray() {
    keyArray.push(keyString);
    console.log(keyArray);   
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