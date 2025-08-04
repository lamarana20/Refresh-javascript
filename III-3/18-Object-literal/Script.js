const person={
    name: "MLD",
    email: "mld@example.com",
    age: 25,
    occupation: "Developer",
    isAdmin: true,
    address: {
        city: "Clinton Park",
        country: "USA",
        state: "NY"
    },
    hobbies: ["coding", "reading", "gaming","sports"],

}
x=person.name
x=person.address.city
delete person.isAdmin; // Deletes the isAdmin property
x=Object.keys(person); // Gets all keys of the object
console.log(x); 
