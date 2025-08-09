
// syntaxe de reduce
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// )


const numbers =[1,2,3,4,5,6,7,8,9,10]

 const sum1= numbers.reduce((a,b)=> a+b,0)


console.log(sum1)
const mltible2=numbers.reduce(function(acc,curr){
    return acc*curr
},1)
console.log(`sum ${sum1} - multiple ${mltible2}`)

/**
 * Calculates the sum of all elements in the global `numbers` array.
 *
 * Iterates through each element of the `numbers` array and accumulates their sum.
 *
 * @returns {number} The total sum of all elements in the `numbers` array.
 */
const sum3 = ()=>{
    let acc=0
    for(const cur of numbers){
        acc+=cur
    }
    return acc

}
console.log(sum3())

// calcul otge cart
const cart =[
    {  id:1,
        name:"iphone",
        price:130,
        quantity:2
    },
    {
        id:2,
        name:"samsung",
        price:150,
        quantity:3
    },
    {
        id:3,
        name:"nokia",
        price:200,
        quantity:4
    }
]
const totalOfCart= cart.reduce((acc,prod2)=>acc+(prod2.quantity * prod2.price),0)
console.log(totalOfCart)

