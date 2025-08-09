library = [
    {
        title: "first book",
        author:"Elon Musk",
        status:  {
            own: true,
            reading: false,
            read: false
        },
    },
    {
        title: "Object Challenge",
        author: "Bill Gates",
        status: {
            own: true,
            reading: false,
            read: false
        },
      
    },
    {
        title: "Advanced CSS",
        author: "MLd",
        status: {
            own: true,
            reading: false,
            read: false
        },
        
    }
]
//1 solution
 x=library[0].status.read = true;
x=library[1].status.read = true;
x=library[2].status.read = true;
console.log(library[0].status.read);
console.log(library[1].status.read);
console.log(library[2].status.read);
// destructure the first book to firstBook
const { title: firstBook } = library[0];
console.log(firstBook);
//js to son 
const jsonLibrary =JSON.stringify(library);
console.log(jsonLibrary);
//json to js
const jsLibrary = JSON.parse(jsonLibrary);
console.log(jsLibrary);