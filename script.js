"use strict";

let currentNumber = "";
let previousNumber = null;
let operation = null;
let expression = '';

function handleNumber(number) {
    currentNumber += number;
    expression += number;
    document.getElementById("output").value = expression;
}

function handleOperation(op) {
    if (currentNumber === "") return;
    if (operation !== null) calculate(); // Calculate if there's a pending operation
    previousNumber = parseFloat(currentNumber);
    currentNumber = "";
    operation = op;
    expression += op;
    document.getElementById("output").value = expression;
}

function calculate() {
    if (previousNumber === null || currentNumber === "" || operation === null) return;

    let result;
    const NUM1 = previousNumber;
    const NUM2 = parseFloat(currentNumber);

    switch (operation) {
        case "+":
            result = NUM1 + NUM2;
            break;
        case "-":
            result = NUM1 - NUM2;
            break;
        case "×":
            result = NUM1 * NUM2;
            break;
        case "%":
            result = NUM1 % NUM2;
            break;
        case "÷":
            if (NUM2 === 0) {
                document.getElementById("output").value = "Error: Division by zero";
                return;
            }
            result = NUM1 / NUM2;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    previousNumber = null;
    operation = null;
    expression = currentNumber; // Reset expression to the result
    document.getElementById("output").value = currentNumber;
}

function clearOutput() {
    currentNumber = "";
    previousNumber = null;
    operation = null;
    expression = "";
    document.getElementById("output").value = "0";
}
