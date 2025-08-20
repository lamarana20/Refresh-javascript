const text=document.querySelector('p');

const itemLists=document.querySelector('.item-list');
const items=document.querySelectorAll('li')

function run(){
    // console.log(itemLists.className)
    // text.className='dark'
// text.classList.add('dark')
// text.classList.remove('card')
// text.classList.toggle('hidden')
// text.classList.replace('card','dark')
// itemLists.style.lineHeight='3'
 items.forEach((item,index)=>{
    item.style.color='red'
    if(index === 1){
          item.style.color='blue' 
    }
 })
 i

}


document.querySelector('button').onclick=run;
