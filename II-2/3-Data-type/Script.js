// string
const first_name = "John";
console.log(first_name, typeof first_name);
// number
const age = 25;
console.log(age, typeof age);
// boolean
const has_kids = true;
console.log(has_kids, typeof has_kids);
// bigInt
const big_num = 9007199254740991n;
console.log(big_num, typeof big_num);
// null
const empty = null;
console.log(empty, typeof empty);
// undefined
let undefined_var;
console.log(undefined_var, typeof undefined_var);
// symbol
const sym = Symbol('foo');
console.log(sym, typeof sym);
// object
const person = {
    name: "John",
    age: 30
};
console.log(person, typeof person);
// array (type is object)
const arr = [1, 2, 3];
console.log(arr, typeof arr);