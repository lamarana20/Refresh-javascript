const x=function(){}
 if(x){
    console.log('x is truthy')
 }else{
    console.log('x is falsy')
 }
//truthy caviats
const children=1
if(children){
    console.log(`you have ${children} children`)
}else{
    console.log('you have no children')
}
//checking for a empty array
const post=['hdhjzh']
if(post.length>0){
    console.log('post exists')
}else{
    console.log('post does not exist')
}
// checking for a empty object
const user={
    name:'john',
    age:30
}
if(Object.keys(user).length>0){
    console.log('user exists')
}else{
    console.log('user does not exist')
}
//looser equality
console.log(false ==0)
console.log(false ===0)
console.log(''==0)
console.log(''===0)