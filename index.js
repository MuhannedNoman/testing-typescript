function add(firstValue, secondValue, showResult) {
    if (showResult) {
        console.log(firstNumber + secondNumber);
    }
    else {
        return firstNumber + secondNumber;
    }
}
var firstNumber = 5;
var secondNumber = 2.8;
var printResult = true;
add(firstNumber, secondNumber, printResult);
