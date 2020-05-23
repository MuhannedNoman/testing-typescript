// // Using a union where you can accept more then one type of data.
// function combine(firstValue: number | string, secondValue: number | string) {
//   let result;
//   if (typeof firstValue === "number" && typeof secondValue === "number") {
//     result = firstValue + secondValue;
//   } else {
//       result = firstValue.toString() + secondValue.toString();
//   }
//   return result;
// }
function combine(firstValue, secondValue, resultType) {
    var result;
    if (typeof firstValue === "number" && typeof secondValue === "number" || resultType === 'number') {
        result = +firstValue + +secondValue;
    }
    else {
        result = firstValue.toString() + secondValue.toString();
    }
    return result;
}
console.log(combine(20, 30, 'number'));
console.log(combine('13', '22', 'number'));
console.log(combine('Hello', 'World!!', 'text'));
