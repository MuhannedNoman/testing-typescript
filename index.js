function add(firstValue, secondValue, showResult, phrase) {
    var result;
    result = firstNumber + secondNumber;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var firstNumber = 5;
var secondNumber = 2.8;
var printResult = true;
var resultText = 'The result is: ';
add(firstNumber, secondNumber, printResult, resultText);
