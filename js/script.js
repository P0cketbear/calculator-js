

// input vars

let a = "";
let b = "";
let ops = "";
let result = "";


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
    parseFloat(a);
    parseFloat(b);

    switch (ops) {
        case "+":
            result = add(a, b).toFixed(5);
            results.textContent = result;
            break;
        case "-":
            result = substract(a, b).toFixed(5);
            results.textContent = result;
            break;
        case "x":
            result = multiply(a, b).toFixed(5);
            results.textContent = result;
            break;
        case "/":
            if (a === 0 || b === 0) {
                result = "ERROR, PRESS CLEAR"
            } else { result = divide(a, b).toFixed(5); }


            results.textContent = result;
            break;

    }

}

// inputs buttons selectors
const btn_options = document.querySelectorAll('.btn_options');
const btn_operators = document.querySelectorAll('.btn_operators');
const btn_number = document.querySelectorAll('.btn_number');
const btn_equals = document.querySelector('.btn_equals');


// Screen selectors
const inputs = document.querySelector('.inputs');
const results = document.querySelector('.result');


btn_number.forEach((btnN) => {
    btnN.addEventListener('click', () => {
        if (!ops) {
            a += btnN.textContent;
            console.log(a)
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
    operate(a, ops, b);
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
            const punkSongs = [
                "Anarchy in the UK",
                "Maxwell Murder",
                "The Press Corpse",
                "Sold as Freedom",
                "Bro Hynm",
                "F**k Authority",
                "American Jesus",
                "Punk Rock Song",
                "Stuck with me",
                "Luv Luv Luv",
                "The 11th Hour",
                "On a turntable"
            ];


            const random = Math.floor(Math.random() * punkSongs.length);
            inputs.textContent = punkSongs[random];

        }
        console.log(option)
    })
})

