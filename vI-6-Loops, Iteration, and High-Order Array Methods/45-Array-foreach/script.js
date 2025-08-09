const socials =['facebook','twitter','instagram','linkedin']
// console.log(social.__proto__)

// socials.forEach((item)=>{
//     console.log(item)
// })


// socials.forEach(function(item){
//     console.log(item)
// })
// socials.forEach((item)=>console.log(item))


// socials.forEach((item,index,arr)=>console.log(`${index}-${item}`,arr))

// objet forEach
const socialsObject=[
    {name:'facebook',url:'https://facebook.com'},
    {name:'twitter',url:'https://twitter.com'},
    {name:'instagram',url:'https://instagram.com'},
    {name:'linkedin',url:'https://linkedin.com'},
]
socialsObject.forEach((item)=>console.log(item.name,item.url))


// reverse
const  Reverse=socialsObject.reverse()
console.log(Reverse)





