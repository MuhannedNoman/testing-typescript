// const person: {
//     name: string;
//     age: number;
//     hoobies: string[];
//     role: [number, string];
//     // Setting a specific types and length for this array {Typle}
// } = {
//     name: 'James',
//     age: 28,
//     hoobies: ['Sports','Coding'],
//     role: [2, 'author']
// };
// enum Role { ADMIN, READ_ONLY, AUTHOR};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "Read";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
;
// Setting different value for the enum.
var person = {
    name: 'James',
    age: 28,
    Role: Role.ADMIN
};
if (person.Role === Role.ADMIN) {
    console.log('You are an Admin !!');
}
var definationOfArray;
definationOfArray = ['Hello', 'World'];
// for (const hoopy of person.hoobies){
//     console.log(hoopy)
// }
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'James',
//     age: 28,
// };
console.log(person.name);
