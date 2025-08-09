// for (let i = 1; i<=100;i++) {
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz")
//     }else if(i%3==0){
//         console.log("Fizz")
//     }else if(i%5==0){
//         console.log("Buzz")
//     } else if(i%2==0){
//         console.log("Even")
//     }else{
//         console.log(i)
//     }
    
// }
// let i=1
// while(i<=100){
  
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz")
//     }else if(i%3==0){
//         console.log("Fizz")
//     }else if(i%5==0){
//         console.log("Buzz")
//     } else if(i%2==0){
//         console.log("Even")
//     }else{
//         console.log(i)
//     }
//       i++
// }
//
const array = [2, 3, 4, 6, 8, 90];
const evenNumbers = [];
const oddNumbers = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenNumbers.push(array[i]);
    } else {
        oddNumbers.push(array[i]);
    }
}

evenNumbers.forEach(num => console.log(num));
oddNumbers.forEach(num => console.log(num + ' is not even number'));