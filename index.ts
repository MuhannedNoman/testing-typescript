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

// console.log(combine(20,30));
// console.log(combine('Hello','World!!'));


// // Using a literal type where you specifie the value of the type
// function combine(firstValue: number | string, secondValue: number | string, resultType: 'number' | 'string') {
//     let result;
//     if (typeof firstValue === "number" && typeof secondValue === "number" || resultType === 'number') {
//       result = +firstValue + +secondValue;
//     } else {
//         result = firstValue.toString() + secondValue.toString();
//     }
//     return result;
//   }
  
//   console.log(combine(20,30,'number'));
//   console.log(combine('13','22','number'));
//   console.log(combine('Hello','World!!','string'));
  


  // Using a type alies to store custome types
  type Combinable = string | number;
  type ResultType = 'number' | 'text';
function combine(firstValue: Combinable, secondValue: Combinable, resultType: ResultType) {
    let result;
    if (typeof firstValue === "number" && typeof secondValue === "number" || resultType === 'number') {
      result = +firstValue + +secondValue;
    } else {
        result = firstValue.toString() + secondValue.toString();
    }
    return result;
  }
  
  console.log(combine(20,30,'number'));
  console.log(combine('13','22','number'));
  console.log(combine('Hello','World!!','text'));
  