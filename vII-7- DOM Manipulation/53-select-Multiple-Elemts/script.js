const items =document.querySelectorAll('li')
// items.forEach((item,index) => {
//     item.style.color="blue"
//   if(index ===1 ){
//     item.remove()
//   }
// if(index===0){
//     item.innerHTML=`  
//           Orange Juice
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>
//        `
// }

    
// });
// console.log(items)

// gert element by className
 const listsItem =document.getElementsByClassName('items')

 const listsItemArray=Array.from(listsItem)
 listsItemArray.forEach(item => {
    console.log(item.innerText)
    
 });

//  By tag 
const lisitemByTag=document.getElementsByTagName('li')
console.log(lisitemByTag[0].innerText)



 