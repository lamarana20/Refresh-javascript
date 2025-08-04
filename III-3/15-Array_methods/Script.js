const arr = [10, 20, 30, 40, 50];
// arr.push(6); // Adds 6 to the end of the array
//  arr.pop();  
// arr.shift(); // Removes the first element (1)
// arr.unshift(0); // Adds 0 to the beginning of the array



// arr.splice(2,2,99); // Removes the element at index 2
// arr.reverse(); // Reverses the order of the array

x=arr.includes(270); // Checks if 270 is in the array
x=arr.indexOf(240); // Finds the index of 240 in the array if not found returns -1
x=arr.slice(1,3).reverse().join(" , ")   ; // Returns a shallow copy of a portion of the array
console.log(x);