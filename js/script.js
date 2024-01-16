

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


const btn_number = document.querySelectorAll('.btn_number');
const btn_options = document.querySelectorAll('.btn_options');
const btn_operators = document.querySelectorAll('.btn_operators');


btn_number.forEach((el, i) => {
    el.addEventListener('click', () => console.log(el.textContent))
})
console.log(btn_number)
console.log(btn_options)
console.log(btn_operators)