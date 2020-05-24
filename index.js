var userInput;
var userName;
// type unknown allows you to store any type without errors.
userInput = 4;
userInput = 'Hello';
// unknown doesn't allo assigning to other types, any on the other hande allow that.
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Something went wrong', 500);
