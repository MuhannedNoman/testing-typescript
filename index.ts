function add(firstValue: number, secondValue: number, showResult: boolean, phrase: string) {
    let result = firstNumber + secondNumber;
    if(showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

const firstNumber = 5;
const secondNumber = 2.8;
const printResult = true;
const resultText = 'The result is: '

add(firstNumber, secondNumber, printResult, resultText);