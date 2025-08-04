// III-3/19-object - Spread operator
let x;
const todos ={
    id: 1,
    title: "Learn JavaScript",
    completed: true,
    tags: ["programming", "javascript", "web development"],
    details: {
        description: "Complete the JavaScript course on web development.",
        dueDate: "2025-07-31",
        priority: "high"
    }
}
const todoTitle = document.getElementById('title');
const todoCompleted = document.getElementById('completed');
const todoTags = document.getElementById('tags');
const todoDescription = document.getElementById('description');
const todoDueDate = document.getElementById('dueDate');
const todoPriority = document.getElementById('priority');


todoTitle.textContent = `Title: ${todos.title}`;
todoCompleted.textContent = `Completed: ${todos.completed ? "Yes" : "No"}`;
todoTags.textContent = `Tags: ${todos.tags.join(", ")}`;
todoDescription.textContent = `Description: ${todos.details.description}`;
todoDueDate.textContent = `Due Date: ${todos.details.dueDate}`;
todoPriority.textContent = `Priority: ${todos.details.priority}`;

todoTitle.style.color = 'blue';
todoTitle.style.fontSize = '24px';
//  spread operator
const obj1={a:1,b:2,c:3};
const obj2={d:4,e:5,f:6};
const obj3={...obj1,...obj2}
console.log({...obj3});
// filter method
const tableau= [1,3,4,5,6];
const filter = tableau.filter((item)=>{
    return item > 3;
})
console.log(filter);

// map method
const tableau2= [1,3,4,5,6];
const map2 = tableau2.map((item)=>{
    return item * 2;
})
console.log(map2)
// reduce method
const tableau3= [1,3,4,5,6];
const reduce = tableau3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(reduce);
//
const todoHomework = [
    { id: 1, title: "Math homework", completed: true },
    { id: 2, title: "Science project", completed: true },
    { id: 3, title: "History essay", completed: false }

];
x= todoHomework[0].completed;
// keys and values
x=Object.keys(todoHomework[0]);
// values
x=Object.values(todoHomework[0]);
// entries
x=Object.entries(todoHomework[0]);
// freeze
x=Object.freeze(todoHomework[1]);
console.log(x);