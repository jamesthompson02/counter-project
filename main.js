let node = document.getElementById('counter-number-display');
let number_variable = 0;

node.innerText = number_variable;

const increase_btn = document.getElementById('increase-btn');
const decrease_btn = document.getElementById('decrease-btn');
const reset_btn = document.getElementById('reset-btn');
const randomise_btn = document.getElementById('randomise-btn');
const prime_btn = document.getElementById('prime-btn');
const need_help_btn = document.getElementById('need-help-btn');
const close_btn = document.getElementById('close-btn');

// function range(min, max) {
//     let range_array = [];
//     for (let range_var = min; range_var <= max; range_var++) {
//         range_array.push(range_var);
//     }
// } 


function primeTest() {
    if (number_variable < 2) {
        return 'This number is not a prime';
    }
    if (number_variable >= 2 && number_variable < 4) {
        let prime_array = [];
        for (let prime_var = 2; prime_var <= number_variable; prime_var++) {
            if (number_variable % prime_var == 0 && number_variable !== prime_var) {
                prime_array.push(prime_var);
            }
        }
        if (prime_array.length > 0) {
            return 'This is not a prime number';
        } else {
            return 'This is a prime number';
        }
    }
    if (number_variable >= 4) {
        let prime_array = [];
        for (let prime_var = 2; prime_var <= Math.sqrt(number_variable); prime_var++) {
            if (number_variable % prime_var == 0 && number_variable !== prime_var) {
                prime_array.push(prime_var);
            }
        }
        if (prime_array.length > 0) {
            return 'This is not a prime number';
        } else {
            return 'This is a prime number';
        }
    }
}



function increaseByOne() {
    number_variable += 1;
    node.innerText = number_variable;
    document.getElementById('prime-result-container').style.display = 'none';
    if (Number(node.innerText) > 0) {
        node.style.color = 'green';
    } else if (Number(node.innerText) < 0) {
        node.style.color = 'red';
    } else {
        node.style.color = 'black';
    }
}

function decreaseByOne() {
    number_variable -= 1;
    node.innerText = number_variable;
    document.getElementById('prime-result-container').style.display = 'none';
    if (Number(node.innerText) > 0) {
        node.style.color = 'green';
    } else if (Number(node.innerText) < 0) {
        node.style.color = 'red';
    } else {
        node.style.color = 'black';
    }
}

function resetCounter() {
    number_variable = 0;
    node.innerText = number_variable;
    document.getElementById('prime-result-container').style.display = 'none';
    if (Number(node.innerText) > 0) {
        node.style.color = 'green';
    } else if (Number(node.innerText) < 0) {
        node.style.color = 'red';
    } else {
        node.style.color = 'black';
    }
}

function randomise() {
    number_variable = Math.floor(Math.random() * 2000) - 1000;
    node.innerText = number_variable;
    document.getElementById('prime-result-container').style.display = 'none';
    if (Number(node.innerText) > 0) {
        node.style.color = 'green';
    } else if (Number(node.innerText) < 0) {
        node.style.color = 'red';
    } else {
        node.style.color = 'black';
    }
}

increase_btn.addEventListener('click', () => {
    increaseByOne();
})

decrease_btn.addEventListener('click', () => {
    decreaseByOne();
})

reset_btn.addEventListener('click', () => {
    resetCounter();
})

randomise_btn.addEventListener('click', () => {
    randomise();
})

prime_btn.addEventListener('click', () => {
    document.getElementById('prime-result-container').innerText = primeTest();
    document.getElementById('prime-result-container').style.textAlign = 'center';
    document.getElementById('prime-result-container').style.fontFamily = 'Lato';
    document.getElementById('prime-result-container').style.fontSize = '16px';
    document.getElementById('prime-result-container').style.height = '40px';
    document.getElementById('prime-result-container').style.justifyContent = 'center';
    document.getElementById('prime-result-container').style.alignItems = 'center';
    document.getElementById('prime-result-container').style.display = 'flex';
})

need_help_btn.addEventListener('click', () => {
    need_help_btn.style.display = 'none';
    document.getElementById('instructions-container').style.display = 'block';
})

close_btn.addEventListener('click', () => {
    document.getElementById('instructions-container').style.display = 'none';
    need_help_btn.style.display = 'block';
})

window.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        increaseByOne();
    }
    if (event.key === "ArrowDown") {
        decreaseByOne();
    }
})


