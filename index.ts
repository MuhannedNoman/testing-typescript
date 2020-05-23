// Return type of a function
function add( firstValue: number, secondValue: number): number {
    return firstValue + secondValue;
}

function printResult( value: number){
    console.log('Resut is: ' + value);
}

// This can store any function
// let combinedValues: Function;

// We want a specific type of functions to be stored in this variable
let combinedValues: (a: number, b:number) => number;

combinedValues = add;

// combinedValues = printResult;

printResult(combinedValues(10,13));