
let x;
const name = 'Mld';
const age = 22;
favoriteID="vscode"
x = 'Hello ,my  name is '  + name  + ' ,and i am ' + age + ' years old';

//Template Literals
const s = `Hello ,my  name is ${name} ,and i am ${age} years old and i like playing games and coding vs my ${ favoriteID}`;
x=typeof s;
// access value by key or index
x=s[3];
x=s.toUpperCase();
x=s[0].toUpperCase();
x=s.indexOf('l');
x=s.charAt(0);
// 
x=s.substring(0,4);
// 
x=s.substring(s.indexOf('l'),s.lastIndexOf('l'));
// slice
x=s.slice(-95)

// check if string includes a substring
x=s.includes('Hello');

x=s.split('2')
console.log(x)