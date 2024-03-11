let result = document.getElementById('result');
let currentOperation = null;
let firstOperand = null;
let secondOperand = null;

function appendDigit(digit) {
    if (result.value === '0' || currentOperation === '=') {
        result.value = digit;
    } else {
        result.value += digit;
    }
}

function calculate(operation) {
    if (currentOperation === null) {
        firstOperand = parseFloat(result.value);
        currentOperation = operation;
        result.value = '0';
    } else if (operation === '=') {
        secondOperand = parseFloat(result.value);
        let finalResult = performOperation(currentOperation, firstOperand, secondOperand);
        result.value = finalResult;
        currentOperation = null;
        firstOperand = null;
        secondOperand = null;
    } else {
        secondOperand = parseFloat(result.value);
        let tempResult = performOperation(currentOperation, firstOperand, secondOperand);
        firstOperand = tempResult;
        currentOperation = operation;
        result.value = '0';
    }
}

function performOperation(operation, operand1, operand2) {
    switch (operation) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        case '%':
            return operand1 % operand2;
        default:
            return 0;
    }
}

function clearResult() {
    result.value = '0';
    currentOperation = null;
    firstOperand = null;
    secondOperand = null;
}

function deleteLastDigit() {
    result.value = result.value.slice(0, -1);
    if (result.value === '') {
        result.value = '0';
    }
}