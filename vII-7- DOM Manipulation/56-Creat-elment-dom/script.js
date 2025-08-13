const div=document.createElement('li')
div.className="my-div"
div.id="my-id"
div.setAttribute('title','element')
// div.innerHTML="hello word"
const text =document.createTextNode('Hello word')
div.appendChild(text)
console.log(div)
// document.body.appendChild(div)
const ul=document.querySelector('ul')
ul.appendChild(div)