let userInput: unknown;
let userName: string;
// type unknown allows you to store any type without errors.

userInput = 4;
userInput = 'Hello';
// unknown doesn't allo assigning to other types, any on the other hande allow that.
if (typeof userInput === 'string'){
    userName = userInput;
}
