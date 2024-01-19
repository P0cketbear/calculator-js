

// input vars

let a = "";
let b = "";
let ops = "";
let result = "";


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
    console.log(a)
    console.log(ops)
    console.log(b)

    switch (ops) {
        case "+":
            result = add(a, b);
            results.textContent = result;
            break;
        case "-":
            result = substract(a, b);
            results.textContent = result;
            break;
        case "x":
            result = multiply(a, b);
            results.textContent = result;
            break;
        case "/":
            result = divide(a, b).toFixed(1);
            results.textContent = result;
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
const results = document.querySelector('.result');


btn_number.forEach((btnN) => {
    btnN.addEventListener('click', () => {
        if (ops === "") {
            a += btnN.textContent;

        } else if (result && !b) {
            a = result;
            b += btnN.textContent;
        } else {
            b += btnN.textContent;

        }

        inputs.textContent += btnN.textContent
    });
});

btn_operators.forEach((btnOp) => {
    btnOp.addEventListener('click', () => {


        if (a && b) {
            let prevOps = ops;
            operate(a, prevOps, b)
            ops = btnOp.textContent;
            b = "";

        } else {
            ops = btnOp.textContent;
        }

        inputs.textContent += ops;
    })

})

btn_equals.addEventListener('click', () => {
    operate(a, ops, b)
    a = "";
    b = "";
}
)


btn_options.forEach((btnO) => {
    btnO.addEventListener('click', () => {
        let option = btnO.textContent.toLowerCase();
        if (option === "clear") {
            inputs.textContent = "";
            results.textContent = "";
            a = "";
            b = "";
            ops = "";
            result = "";
            prevOps = "";
        } else {
            inputs.textContent = "tu pa tutupa tu pa tutu pa";

        }
        console.log(option)
    })
})

