// Declare an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use map to double each number
const doubleNumbers = numbers.map((number) => number * 2);
// console.log(doubleNumbers);

// Same operation with forEach
const doubleNumbersEach2 = [];
numbers.forEach((number) => {
    doubleNumbersEach2.push(number * 2);
});
// console.log(doubleNumbersEach2);

// Declare an array of objects representing companies
const companies = [
    { name: 'company one', category: 'finance', start: 1985, end: 2004 },
    { name: 'company two', category: 'retail', start: 1992, end: 2008 },
    { name: 'company three', category: 'auto', start: 1999, end: 2007 },
    { name: 'company four', category: 'retail', start: 1987, end: 2010 },
    { name: 'company five', category: 'tech', start: 1987, end: 2010 },
    { name: 'company six', category: 'finance', start: 1987, end: 2005 },
];

// Create an array containing only the company names
const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// Create an array with name, category, start year, and end year
const companyNamesAndCategory = companies.map(
    (company) => `${company.name} - ${company.category} - ${company.start} - ${company.end}`
);
// console.log(companyNamesAndCategory);

// Another way to get company info with age
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,
        start: company.start,
        end: company.end,
        age: company.end - company.start,
    };
});
// console.log(companyInfo);

// Create an array with the name and number of years each company existed
const companiesYear = companies.map((company) => {
    return {
        name: company.name,
        years: company.end - company.start + " years",
    };
});
// console.log(companiesYear);

// Add 6 to the end of the numbers array
numbers.push(6);

// Add 0 to the beginning of the numbers array
numbers.unshift(0);

// Remove the last element from the numbers array
// numbers.pop(); // (uncomment if needed)

// Display the modified numbers array
console.log(numbers);

// Chain the map method to get the square root then round to 2 decimals
const chainMap = numbers
    .map((number) => Math.sqrt(number))
    .map((sqrt) => sqrt.toFixed(2));
console.log(chainMap);

// User object management
let user = {
    last_name: "Tounkara (mom)",
    first_name: "fanta",
};
// Add a 'full name' property
user['full name'] = "fanta tounkara";
// Add a 'role' property
user.role = "developer";
// Add an 'age' property
user.age = 25;

console.log(user); // Display the user object

// Declare an array of users
const user2 = [
    {
        name: "fMLD",
        age: 22,
        role: "Developer",
    },
    {
        name: "fanta",
        age: 25,
        role: "Developer",
    }
];

// Add a new user to the user2 array
user2.push({
    name: "Ousmane",
    age: 25,
    role: "Commercial",
});
console.log(user2);



