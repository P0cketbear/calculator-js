//sounds 

let keySnd = new Audio('./assets/sound/key.mp3');
keySnd.load();

let punk = new Audio('./assets/sound/punk.mp3');
punk.load();

// input vars

let a = "";
let b = "";
let ops = "";
let result = 0;


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
    a = parseFloat(a);
    b = parseFloat(b);

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
            result = multiply(a, b)
            if (result.toString().includes('.')) {
                result = result.toFixed(2);
            }
            results.textContent = result
            break;
        case "/":
            if (a === 0 || b === 0) {
                result = "ERROR, PRESS CLEAR";
            } else {
                result = divide(a, b);
                if (result.toString().includes('.')) {
                    result = result.toFixed(3);
                }
            }
            results.textContent = result;
            break;

    }

}

// inputs buttons selectors
const btnOptions = document.querySelectorAll('.btnOptions');
const btnOperators = document.querySelectorAll('.btnOperators');
const btnNumber = document.querySelectorAll('.btnNumber');
const btnEquals = document.querySelector('.btnEquals');


// Screen selectors
const inputs = document.querySelector('.inputs');
const results = document.querySelector('.result');


btnNumber.forEach((btnN) => {
    btnN.addEventListener('click', () => {
        keySnd.currentTime = 0;
        keySnd.play();
        let pushed = btnN.textContent;
        if (!ops) {
            if (!a && pushed === '.') {
                pushed = "";
            }
            a += pushed;

        } else if (result && !b) {
            a = result;
            b += pushed;
        } else {
            if (!b && pushed === '.') {
                pushed = "";
            }
            b += pushed;

        }

        inputs.textContent += pushed;
    });
});

btnOperators.forEach((btnOp) => {
    btnOp.addEventListener('click', () => {
        keySnd.currentTime = 0;
        keySnd.play();
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

btnEquals.addEventListener('click', () => {
    keySnd.currentTime = 0;
    keySnd.play();
    if (a && b) {
        operate(a, ops, b);
        a = "";
        b = "";
    }

}
)


btnOptions.forEach((btnO) => {
    btnO.addEventListener('click', () => {
        let option = btnO.textContent.toLowerCase();
        if (option === "clear") {
            keySnd.currentTime = 0;
            keySnd.play();
            inputs.textContent = "";
            results.textContent = "";
            a = "";
            b = "";
            ops = "";
            result = "";
            prevOps = "";
            punk.pause()

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

            punk.currentTime = 0;
            punk.play();

        }
        console.log(option)
    })
})

