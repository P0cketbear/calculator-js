

// input vars

let a, b;
let ops = "";

// operations functions

function add(a, b) {
    return a + b;

}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(a, ops, b) {

    switch (ops) {
        case "+":
            console.log(add(a, b))
            break;
        case "-":
            console.log(substract(a, b))
            break;
        case "*":
            console.log(multiply(a, b))
            break;
        case "/":
            console.log(divide(a, b))
            break;
    }

} 