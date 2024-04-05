
// Elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');

// Variables
let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';

// Updating display
function updateDisplay(value) {
    display.textContent = value;
}

// Function for clicks
function handleNumberClick(number) {
    if (operator === '') {
        firstNumber += number;
        updateDisplay(firstNumber);
    } else {
        secondNumber += number;
        updateDisplay(secondNumber);
    }
}

// Function for button clicks
function handleOperatorClick(op) {
    operator = op;
    updateDisplay(op);
}

// Function for operation
function operate() {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Error: Division by zero';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            break;
    }

    updateDisplay(result);
}

// Function to clear
function clearCalculator() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    result = '';
    updateDisplay('0');
}

// Event listeners for buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (Number.isInteger(parseFloat(value))) {
            handleNumberClick(value);
        } else if (value === '.' && !display.textContent.includes('.')) {
            handleNumberClick(value);
        } else if (value === 'C') {
            clearCalculator();
        } else if (value === '=') {
            operate();
        } else {
            handleOperatorClick(value);
        }
    });
});

// Clear button event listener
clearButton.addEventListener('click', clearCalculator);
