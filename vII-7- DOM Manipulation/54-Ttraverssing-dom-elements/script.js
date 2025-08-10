let output;

const parent = document.querySelector('.parent')
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].nodeName
output = parent.children[1].textContent;
output = parent.children[1].style.color = "orange";



// Get parent ELement  from child

const child = document.querySelector('.child')
output = child.parentElement;
output = child.parentElement.style.border = "1px solid #ccc"
output = child.parentElement.style.padding = "10px "
// subling element

const secondItem = document.querySelector('.child:nth-child(2)')
output = secondItem;
output = secondItem.nextElementSibling.style.color = "green"
output = secondItem.previousElementSibling.style.color = "red"


console.log(output)

