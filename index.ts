const person: {
    name: string;
    age: number;
    hoobies: string[];
    role: [number, string];
    // Setting a specific types and length for this array {Typle}
} = {
    name: 'James',
    age: 28,
    hoobies: ['Sports','Coding'],
    role: [2, 'author']
};

let definationOfArray: string[];
definationOfArray = ['Hello','World'];

for (const hoopy of person.hoobies){
    console.log(hoopy)
}

// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'James',
//     age: 28,
// };


console.log(person.name);