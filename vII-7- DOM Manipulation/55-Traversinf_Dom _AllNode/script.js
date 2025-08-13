let output;
const parent =document.querySelector('.parent')
output=parent.childNodes;
output=parent.childNodes[0].textContent;
output=parent.childNodes[0].nodeName;
output=parent.childNodes[3].textContent;
output=parent.childNodes[5].outerHTML;
output=parent.childNodes[5].style.color="blue";
const textUpcase ="i'm passionate aboutr coding and resolve problems"
 const d=textUpcase.split().map(test=>test.charAt(0).toUpperCase() +test.slice(1))

console.log(d)