const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

const currentDate = new Date();
const option={
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
}
dateElement.textContent = "Today's date is: " + currentDate.toLocaleDateString('en-US', option);
timeElement.textContent = "Current time is: " + currentDate.toLocaleTimeString('en-US', option);
// Display the date and time in the specified format
document.getElementById("date").style.display = "block";
document.getElementById("date").style.textAlign = "center";
document.getElementById("date").style.fontSize = "20px";
document.getElementById("date").style.color = "blue";
document.getElementById("date").style.fontFamily = "Arial, sans-serif";
document.getElementById("date").style.marginTop = "20px";
document.getElementById("date").style.marginBottom = "20px";
document.getElementById("time").style.display = "block";
document.getElementById("time").style.textAlign = "center";
document.getElementById("time").style.fontSize = "20px";
document.getElementById("time").style.color = "green";
document.getElementById("time").style.fontFamily = "Arial, sans-serif";
document.getElementById("time").style.marginTop = "20px";
document.getElementById("time").style.marginBottom = "20px";
