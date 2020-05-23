function add(firstValue: number, secondValue: number, showResult: boolean) {
    if(showResult) {
        console.log(firstNumber + secondNumber);
    } else {
        return firstNumber + secondNumber
    }
}

const firstNumber = 5;
const secondNumber = 2.8;
const printResult = true;

add(firstNumber, secondNumber, printResult);