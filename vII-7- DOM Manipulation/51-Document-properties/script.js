let output;
output=document.all;
output=document.all[1];
output=document.documentElement;
output=document.head.children;
output=document.body;
output=document.domain;
output=document.URL;
output=document.contentType.length;

// output=document.forms[0].id='new one ';
output=document.links;
output=document.links[0].href='https:lamaranadiallo.com';
output=document.links[0].innerHTML='lamarana Diallo porfolio';
output=document.links[0].className='portfolio-class';
output=document.images
output=document.images[0].src
const forms= Array.from(document.forms)
forms.forEach((form)=>console.log(form))
console.log(output)