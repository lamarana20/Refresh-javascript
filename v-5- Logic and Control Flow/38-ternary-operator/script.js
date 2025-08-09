// using an if stqatement 
const age=18;
if(age>=18){
    console.log("you can vote!");
}
else{
    console.log("you can't vote");
}
// using ternary operator
age>=18 ? console.log("you can vote!") : console.log("you can't vote");


// using ternary operator with variable
// syntax 
// valuable = condition ? true : false
const canVote=age>=18 ? "you can vote!" : "you can't vote";
console.log(canVote);
// Multle statement
 const auth = false;
// let redirect;
// auth ? (alert('you logget'), redirect = "/dashboard") : alert('acced dinied'),redirect = "/login";
// console.log(redirect);


if(auth){
    alert('you logget');
    redirect = "/dashboard";
}
else{
    alert('acced dinied');
    redirect = "/login";
}
console.log(redirect);
