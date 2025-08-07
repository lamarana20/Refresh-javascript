// const numbers=[1,2,3,4,5,6,7,8,9,10]
// const eventNumber= numbers.filter((n)=>{
//     return n %2 ===0
// })
// console.log(eventNumber)
// // odd Number test 
// const oddNumber= numbers.filter((num)=>{
// return num %2 !==0
// })
// console.log(oddNumber)
  
// // same with forEach
// numbers.forEach((num) => {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });
const compagnies =[
    {name:'compagny one',category:'finance',start:1985,end:2004},
    {name:'compagny two',category:'retail',start:1992,end:2008},
    {name:'compagny three',category:'auto',start:1999,end:2007},
    {name:'compagny four',category:'retail',start:1987,end:2010},
    {name:'compagny five',category:'tech',start:1987,end:2010},
    {name:'compagny six',category:'finance',start:1987,end:2005},
];
// get only reatil cmpany
const retsilCompany = compagnies.filter((compagny)=>{
    return compagny.category==="retail" 
})
// console.log(retsilCompany)

// get that conpany start  in or after 1980 and ended in of before
const compagnyStartAfter1980 =compagnies.filter((compagny)=>{
    return compagny.start>=1980 && compagny.end <=2005
})
// console.log(compagnyStartAfter1980)
//  get a company that lasted for 10 years or more
const compagnyLast10= compagnies.filter((laste10)=>{
    return laste10.end - laste10.start >=10
})
// console.log(compagnyLast10)
