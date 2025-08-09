// arrow funtion syntax example

const add =(a,b)=>{
    return a+b;
}
// console.log(add(2,3));
//implicit return
const multiply = (a, b) => a * b;
// console.log(multiply(4, 5));
// single parameter
// we can leave out the parentheses for a single parameter
const double = a => a * 2;
//
const createObject = () => ({
    name: 'John',
});
console.log(createObject());
const numbers =[1, 2, 3, 4, 5];
// function in callback
numbers.map((number)=>{
    const result= document.createElement('li');
    result.textContent = `Number: ${number*2}`;
  
    document.querySelector('ol').appendChild(result);
})
const tstApi = document.querySelector('.test-api');

tstApi.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            const postList = document.querySelector('.posts');
            postList.innerHTML = ''; // On vide la liste avant d'ajouter

            data.slice(0, 5).forEach(item => {
                const postElement = document.createElement('li');
                postElement.innerHTML = `<strong>${item.title}</strong><br>${item.body}`;
                postList.appendChild(postElement);
            });
        })
        .catch(err => alert('Error fetching posts: ' + err));
});

