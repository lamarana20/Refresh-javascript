// ||= assignment the right side value only if the left side is falsy
let a=false;
if(!a){
    a=10;
}

 a || 10;
console.log(a)
//  &&= assignment the right side value only if the left side is truthy
let b=20;
if(b){
    b=30;
}
b &&= 40;
console.log(b)
//  ??= assignment the right side value only if the left side is null or undefined

let c=null;
c ??= 50;
console.log(c)
