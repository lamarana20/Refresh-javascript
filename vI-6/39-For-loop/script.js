// for loop syntax
//for([initialization]; [condition]; [increment-expression])
// const arrys={
//     name:"John",
//     age:30,
//     city:"New York"
// }
// for (let arry in arrys) {
//     console.log(arrys[arry]);
// }
// for(i=0;i<=10;i++){
//     if(i===7){
//         console.log('7 is my favorite number and lucky number')
//     }else{
//         console.log('number '+ i)
//     }

    
// }
//nest loops
for(i=0;i<=10;i++){
// console.log('number '+ i)
for (j=0;j<=10;j++){
//    console.log(`${i} * ${j} = ${i*j}`)
}
   
}
// loop with an array
const names=['John','Jane','Peter','Paul','sara']
for(let i=0;i<names.length;i++){
   if(names[i]==='John'){
    console.log('John is my friend')

   }else{
    console.log(names[i])
   }
}

//if you wanna test allremove the commments