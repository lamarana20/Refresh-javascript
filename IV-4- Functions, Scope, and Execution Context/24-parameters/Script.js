// function registerUser(username, password) {
//    return username && password ? username + ' registered successfully' : 'Registration failed';
// }
// console.log(registerUser('john_doe', 'password123'));




// default params
function registerUser(user='guest',){
    return user + ' registered successfully';
}
console.log(registerUser());
//rest params
function sum(...numbers) {
  let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5)); //
//objetct parameters
function loginUser(user){

return `the user with the id ${user.id} with email ${user.email} logged in successfully.`
}
const user={
    id: 1,
    name: 'Jane Doe',
    email: 'jane.doe@example.com'

}
console.log(loginUser(user))
// array parameters
function getRandomNumbers(arr) {
    return arr.map(() => Math.floor(Math.random() * 100));

}
const numbers = [1, 2, 3, 4, 5];
console.log(getRandomNumbers(numbers));