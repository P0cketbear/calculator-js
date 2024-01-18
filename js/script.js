

// input vars

let a = "";
let b = "";
let ops = "";

// operations functions

function add(a, b) {

    return parseFloat(a) + parseFloat(b);

}
function substract(a, b) {
    return parseFloat(a) - parseFloat(b);;
}
function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}
function divide(a, b) {
    return parseFloat(a) / parseFloat(b);;
}

function operate(a, ops, b) {

    switch (ops) {
        case "+":
            result.textContent = add(a, b);
            break;
        case "-":
            result.textContent = substract(a, b)
            break;
        case "x":
            result.textContent = multiply(a, b)
            break;
        case "*":
            result.textContent = multiply(a, b)
            break;
        case "/":
            result.textContent = divide(a, b).toFixed(1)
            break;
    }

}

// inputs buttons selectors
const btn_options = document.querySelectorAll('.btn_options');
const btn_operators = document.querySelectorAll('.btn_operators');
const btn_number = document.querySelectorAll('.btn_number');
const btn_equals = document.querySelector('.btn_equals')


// Screen selectors
const inputs = document.querySelector('.inputs');
const result = document.querySelector('.result');


btn_number.forEach((btnN) => {
    btnN.addEventListener('click', () => {
        if (ops === "") {
            a += btnN.textContent;
            inputs.textContent = a
        } else {
            b += btnN.textContent;
            inputs.textContent = b
        }

    });
});

btn_operators.forEach((btnOp) => {
    btnOp.addEventListener('click', () => {
        ops = btnOp.textContent;
        inputs.textContent += ops;
    })

})

btn_equals.addEventListener('click', () => operate(a, ops, b))



