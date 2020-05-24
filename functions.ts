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


function addAndHandle(firstNumber: number, secondNumber: number, callBack: (value: number) => void){
    const result = firstNumber + secondNumber;
    callBack(result)
}

combinedValues = add;

addAndHandle(4,6, (result) => {
    console.log(result);
})

// combinedValues = printResult;

printResult(combinedValues(10,13));