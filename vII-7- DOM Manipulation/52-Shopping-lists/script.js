// docuemnt getElementById()
// console.log(document.getElementById('item-form'))
// console.log(document.getElementById('item-form').id)
// console.log(document.getElementById('item-form').className)


// set atribute
const title = document.getElementById('title')
//  formItem.style.fontSize="200px"

// get/change content
console.log(title.textContent)
title.textContent="hello"
title.innerText="Hello"
title.innerHTML='<strong>hello word for inne html</strong>'
title.innerText='Shopping Lists'

console.log(title.textContent)
// chamging the style
title.style.color='blue';
title.style.backgroundColor='black'
//  select by docuemnt.querySelctor()
console.log(document.querySelector('h1'))
// by id
console.log(document.querySelector('#title'))
// by class
console.log(document.querySelector('.container'))
// const container =document.querySelector('.container')
// container.style.backgroundColor="black"

// by atribute
// firt methode
const sectByAtribut= document.querySelectorAll('input[type="text"]')[1]
sectByAtribut.style.color="red"
// second methode
const selctWithNtH=document.querySelector('li:nth-child(2)')
 selctWithNtH.innerText="apple juice"

//  use the lement on other element 
const lists =document.querySelector('ul')
const firstItem=lists.querySelectorAll('li')[3,1]
firstItem.style.color='green'