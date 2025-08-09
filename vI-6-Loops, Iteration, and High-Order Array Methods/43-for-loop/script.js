// for with an array
const items=['book','pen','pencil','eraser','ruler']



// for with an object
 const users =[{name:'John',age:20},{name:'Jane',age:25}]
for (const user of users){

 console.log(user)
}
// for(let i=0;i<users.length;i++){

//     console.log(users[i]);
// }

// loop through  string
const str ='hello world'
for (const letter of str){
    console.log(letter)
}
// loop over Map
const  map=new Map()
 map.set('name','John')
 map.set('age',20)
 for(const [key,value] of map){
    console.log(key,value)
}
