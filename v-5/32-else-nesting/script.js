const d = new Date(10, 30, 2023, 14, 0, 0)
const hour = d.getHours()

if (hour < 12) {
    console.log("Good morning");
} else if (hour < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}
// nesting if statement
if (hour < 12) {
    console.log("Good morning");
    if (hour === 6) {
        console.log('wake up')
    }
} else if (hour < 18) {
    console.log("Good afternoon");
    if (hour === 17) {
        console.log('time for sport')
    }

} else {
    console.log("Good evening");
}


if (hour >= 7 && hour <= 15) {
    console.log('time for work')
}
 if(hour ===6 || hour ===17){
    console.log('time for sport')
}
