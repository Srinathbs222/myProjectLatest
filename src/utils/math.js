/**
 * Function to add two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
    return a + b;
}

/**
 * Function to subtract two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The difference between the two numbers.
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Function to divide two numbers.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient of the division.
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Divisor cannot be zero.");
    }
    return a / b;
}

/**
 * Function to multiply two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of the two numbers.
 */
function multiply(a, b) {
    return a * b;
}
module.exports = {
    add,
    subtract,
    divide,
    multiply
};

  

