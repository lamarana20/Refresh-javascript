

// quick and dirty
function createItem (item) {
    const li =document.createElement('li')

     li.innerHTML=`
         ${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xMax"></i>
          </button>
       `

      document.querySelector('.items').appendChild(li)
    

}
createItem('eggs')



function createNewItem (item) {
    const li =document.createElement('li');
  li.appendChild(document.createTextNode(item))
    const button =createButton('remove-item btn-link text-red')
    const icon=createIcon('fa-solid fa-mark')
    button.appendChild(icon);
    li.appendChild(button)

document.querySelector('.items').appendChild(li)

}
createNewItem('banana')


//factorization 
function createButton (className) {
const button=document.createElement('button');
button.className = className
   return button
}
 function createIcon (className) 
 {
    const icon=document.createElement('i')
    icon.className=className;
    return  icon
   
 }
//time out

const timeOut = setTimeout(() => {
  const message = document.getElementById('message');
  message.style.color = "black";
  message.innerText = 'welcome';
}, 1000);

setTimeout(() => {
  clearTimeout(timeOut); 
  const message = document.getElementById('message');
  message.style.color = 'green';
  /* The line `message.innerHTML="is you"` is setting the inner HTML content of the element with the id
  "message" to be "is you". This will replace any existing content within the element with the new
  text "is you". */
  message.innerHTML="is you "
}, 10000);

