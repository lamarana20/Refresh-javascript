function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child')
    const li = document.createElement('li')
    li.textContent = "Replace first"
    firstItem.replaceWith(li)


}
replaceFirstItem()

// replace second item
const replaceSecondItem = () => {
    const secondItem = document.querySelector('li:nth-child(2)')
    secondItem.outerHTML = "<li>Replace second item</li>"

}

replaceSecondItem()

// replace ALL item with forEach
const replaceAllItem = () => {
    const lis = document.querySelectorAll('li')
    // lis.forEach((item, index) => {
    //     // item.outerHTML="<li>replace all</li>"
    //     if (index === 1) {
    //         item.innerHTML = "second item"
    //     }
    //     else {
    //         item.outerHTML = "<li>replace all</li>"
    //     }
    // })
    // ternary method
   lis.forEach((item,index)=>item.outerHTML=index===1 ?"<li>second item </li>":"<li>item</li>")

}
replaceAllItem()

// Replace heading title
function replaceHead(){
    const header=document.querySelector('header')
  const h1=document.querySelector('header h1')
  const h2 =document.createElement('h2')
  h2.id="title-app"
  h2.textContent="Shopping lists"
  h2.style.color="green"
  header.replaceChild(h2,h1)

 
}
replaceHead()