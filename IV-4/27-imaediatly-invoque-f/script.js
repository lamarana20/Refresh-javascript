//1 chalenge
// This function converts a temperature from Fahrenheit to Celsius
const getCelsius = (fahrenheit) => {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return Math.round(celsius); // Rounds the result to the nearest whole number
}

// Test the function with 32°F
console.log(getCelsius(32)); // Output: 0


// second chalenge
 const numbers = [20,4,56,66,100]
const minMax = () => {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}

// Store the result
const result = minMax();

// Display it
console.log(`The minimum is ${result.min}, the maximum is ${result.max}`);
// challenge 3
((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;

  console.log(output);
})(10, 4);

// //suntax
// ((l,y)=>{
//     a=y*l
//     console.log(a)


// })(2,4)\
const showContry =document.getElementById('contry')

fetch('https://ipapi.co/json/')
  .then(res => res.json())
  .then(data => {
    const country = data.country_name;
    console.log(`You are located in: ${country}`);
    showContry.textContent=`You are located in in ${country}`
  })
  .catch(err => {
    console.error('Failed to fetch location data:', err);
  });
