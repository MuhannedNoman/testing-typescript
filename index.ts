let userInput: unknown;
let userName: string;
// type unknown allows you to store any type without errors.

userInput = 4;
userInput = 'Hello';
// unknown doesn't allo assigning to other types, any on the other hande allow that.
if (typeof userInput === 'string'){
    userName = userInput;
}

//  This function return {never}, infinite loop returns a never as well
function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code};
}

generateError('Something went wrong', 500);
