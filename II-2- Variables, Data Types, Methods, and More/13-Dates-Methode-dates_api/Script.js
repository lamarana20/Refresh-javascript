const date = new Date();    
const month=date.getMonth() + 1; // Months are zero-based in JavaScript
const year=date.getFullYear();
const day=date.getDate();
const hours=date.getHours();
const minutes=date.getMinutes();
const seconds=date.getSeconds();
const Global=`${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
console.log(Global);
const dateElement = document.getElementById("date");
dateElement.textContent = "Current date and time: " + Global;
// Display the date in the specified format
const getLocation = ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,showError);
        
    }
    else{
       document.getElementById("location").innerHTML="Geolocation is not supported by this browser.";
    }
    function showPosition(position){
        const latitude=position.coords.latitude;
        const longitude=position.coords.longitude;
        const location=position.coords.location;
        document.getElementById("location").innerHTML="Latitude: " + latitude + ", Longitude: " + longitude + ", Location: " + location;

    }
   const showError = (error) => {
        document.getElementById("location").innerHTML="Error occurred: " + error.message;
    }
}


