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

enum Role { ADMIN = 5, READ_ONLY = 'Read', AUTHOR = 200};
// Setting different value for the enum.

const person = {
    name: 'James',
    age: 28,
    Role: Role.ADMIN
};

if (person.Role === Role.ADMIN) {
    console.log('You are an Admin !!')
}


let definationOfArray: string[];
definationOfArray = ['Hello','World'];

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