// Remove element examples

// 1. Remove by ID
function removeById(id) {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
    }
}
removeById()

// 2. Remove by class
function removeByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].remove();
    }
}

// 3. Remove first child
function removeFirstChild(parentId) {
    const parent = document.getElementById(parentId);
    if (parent && parent.firstElementChild) {
        parent.firstElementChild.remove();
    }
}
// removeFirstChild('item-list')

// 4. Remove last child
function removeLastChild(parentId) {
    const parent = document.getElementById(parentId);
    if (parent && parent.lastElementChild) {
        parent.lastElementChild.remove();
    }
}

// 5. Remove all children
function removeAllChildren(parentId) {
    const parent = document.getElementById(parentId);
    if (parent) {
        parent.innerHTML = '';
    }
}

const remove1= (ID) =>{
    const getId=document.getElementById(ID)
     getId.remove()
     
}
remove1(ID)
    // document.addEventListener('DOMContentLoaded',() => {
    //     setTimeout(()=>{
    //         alert('welcome back my G')
    //     })
    //     },2000)

// Example usage
document.addEventListener('DOMContentLoaded', function() {
    // Remove element after 3 seconds
    setTimeout(() => {
     console.log("Good morning")
    }, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
  const url=document.getElementById("url")

    setTimeout(() => {
       url.innerText="Your URL  : " + window.location.href
    }, 3000);
    
});





