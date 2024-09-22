const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

let currentInput = '';
let operator = '';
let firstOperand = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value) {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (currentInput && operator) {
        const secondOperand = currentInput;
        const result = calculate(firstOperand, secondOperand, operator);
        display.value = result;
        currentInput = '';
        firstOperand = result; 
        operator = '';
    }
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    operator = '';
    firstOperand = '';
    display.value = '';
});

// Function to perform calculation
function calculate(first, second, operator) {
    first = parseFloat(first);
    second = parseFloat(second);
    
    switch (operator) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return first / second;
        default:
            return second;
    }
}

// Handle operator clicks
document.querySelectorAll('.operator').forEach(opButton => {
    opButton.addEventListener('click', () => {
        if (currentInput) {
            if (firstOperand === '') {
                firstOperand = currentInput;
            } else if (operator) {
                const result = calculate(firstOperand, currentInput, operator);
                display.value = result;
                firstOperand = result;
            }
            operator = opButton.getAttribute('data-value');
            currentInput = '';
        }
    });
});
