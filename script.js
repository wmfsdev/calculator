
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


//console.log(operate(5, 6, add))

// key press


let keyString = "";
let nextKeyString = "";
let operator = "";
let keyArray = [];
let operatorArray = [];

let operatorKey = document.querySelectorAll(`.key, .equals`);
let numKey = document.querySelectorAll(`.num-key`);
let equalsKey = document.querySelector(`.equals`);

    numKey.forEach((div) => {

        div.addEventListener(`click`, function (e) {
            if (operator === "") {
                value = e.target.innerText;
                keyString += + value;
                //console.log(`"1st" ${keyString}`)
                displayNumKey(keyString);
            } else {      
                value = e.target.innerText;
                keyString += + value;
                //console.log(`"1st" ${keyString}`)
                displayNumKey(keyString);
            }      
    });
});

function displayNumKey(keyStringChoice) {

    let numDisplay = document.querySelector(`.number-display`);
    numDisplay.textContent = keyStringChoice;
}

    operatorKey.forEach((div) => {
        div.addEventListener(`click`, function(e) {
                operator = e.target.innerText;
                operatorArray.push(operator);
                //console.log(operatorArray)
                displayOperatorKey();
                keyString = "";
        });
    });




function displayOperatorKey() {
    let operatorDisplay = document.querySelector(`.operator-display`);
    operatorDisplay.textContent = operator;
}

// when you click operator the value stored in keyValueString is pushed into an array

equalsKey.addEventListener(`click`, function (e) {
    
    pushKeyArray();
  
});

function pushKeyArray() {

  keyArray.push(keyValueString);
  console.log(keyArray);
    
}

function operate(a, b, callBack) {
    return callBack(a, b);
}
