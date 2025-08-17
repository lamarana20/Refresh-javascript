//insertAdjacentElement
const insertElement = ()=>
    {
    const filter=document.querySelector('.filter')
    const newElement=document.createElement('h1')
newElement.textContent="insert Element";
filter.insertAdjacentElement('beforebegin',newElement)
}
insertElement();
//insertAdjacentText
const insertText= ()=>{
    const item=document.querySelector('li:first-child');
    item.insertAdjacentText('beforebegin','after end')

}
insertText()

// insertAdjacentHTML
const insertHTML=()=>
    {
const clearButton=document.querySelector('#clear')
 clearButton.insertAdjacentHTML('afterend','<h2>Hello my guys')

}
insertHTML()

// insertBefore
function insertBefore() {
    const parentUl =document.querySelector('ul')
    const li=document.createElement('li')
    li.textContent="banana"
    const Item3=document.querySelector('li:nth-child(4)')
    parentUl.insertBefore(li,Item3)
}
insertBefore()


