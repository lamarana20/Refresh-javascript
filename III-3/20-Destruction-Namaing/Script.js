

const firstName1 = "MLD";
const lastName1= "Diallo";
const age2 = 22;
const person = {
   firstName1,
   lastName1,
   age2
}

const todo={
    id: 1,
    title: "take out the trash",
    user: {
        firstName: "MLD",
        lastName: "Diallo",
        age: 22
    }
}
// Destructuring the todo object we use a curly braces {}
const { id, title ,user:{firstName:prenom,lastName,age} } = todo;
console.log(id, title, prenom, lastName, age);   
//destructuring an array use brackets []
const numbers= [1, 2, 3, 4, 5];
const [first , second, third, ...rest] = numbers;
console.log(first, second, third, rest); // 1 2 3 [4