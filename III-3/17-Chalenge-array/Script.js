//Chalenge 1

const arr = [1, 2, 3, 4, 5];
arr.unshift(0); // Adds 0 to the beginning of the array
arr.push(6); // Adds 6 to the end of the array
x=arr
x=arr.reverse(); // Reverses the array

console.log(x);
//Chalenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 =[...arr1, ...arr2];
arr3.splice(4, 1); // Removes 1 element starting from index 4
console.log(arr3); // Combines arr1 and arr2 into arr3
const styleTitle= document.getElementById('title');
styleTitle.style.color = 'blue';
styleTitle.style.fontSize = '24px';
styleTitle.style.fontWeight = 'bold';
styleTitle.style.textAlign = 'center';