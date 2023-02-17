
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

function operate(a, b, callBack) {
    return callBack(a, b);
}

console.log(operate(5, 6, add))

// key press


