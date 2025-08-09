const fruits =["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const berries = ["Strawberry", "Blueberry", "Raspberry"];
const AllFruits= [fruits, berries];

// Using the concat method
x= fruits.concat(berries);
// Spread operator
x = [...fruits, ...berries];
// flattening the nested array
const arrFlattened = [1, 2, [3, 4], [5, 6], 7, 8, 9];
x = arrFlattened.flat();
// static Methode array 
x=Array.isArray(x) ? 'yes' : 'no';
console.log(x);