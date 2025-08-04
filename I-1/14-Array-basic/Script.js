//array literal
const Numbers=[1,2,3,4,5]
//array constructor
const fruits= new Array("Apple","Banana","Cherry","Date","Elderberry")



x=`My favorite fruits are:${fruits[1]} and ${fruits[3]}`
x=fruits.length
fruits[2]="Mango"
// adding a new element to end of the array
fruits[fruits.length]="Fig"
// adding a new element to the beginning of the array
fruits.unshift("Grapes")
console.log(fruits)

