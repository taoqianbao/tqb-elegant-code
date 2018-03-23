#!/usr/bin/env node --harmony

//example One

function add(a, b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

function subtract(a, b) {
    return a - b
}

var result = subtract(multiply(add(1, 2), 3), 4);    //(1 + 2) * 3 - 4

console.log(result)


// node index.js