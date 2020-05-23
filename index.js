// Return type of a function
function add(firstValue, secondValue) {
    return firstValue + secondValue;
}
function printResult(value) {
    console.log('Resut is: ' + value);
}
// This can store any function
// let combinedValues: Function;
// We want a specific type of functions to be stored in this variable
var combinedValues;
combinedValues = add;
// combinedValues = printResult;
printResult(combinedValues(10, 13));
