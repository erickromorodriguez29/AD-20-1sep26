

module.exports = {add, subtract};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

function divide(a, b) {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
}

function multiply(a, b) {
    return a * b;
}


module.exports = { add, subtract, divide, multiply };
