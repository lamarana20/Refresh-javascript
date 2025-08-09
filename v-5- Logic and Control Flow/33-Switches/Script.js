const d = new Date(2023, 4, 15 ,8,0,0)
const month = d.getMonth()
const hour=d.getHours()
switch (month) {
  case 0:
    console.log("January")
    break;
  case 1:
    console.log("February")
    break;
  case 2:
    console.log("March")
    break;
  case 3:
    console.log("April")
    break;
  case 4:
    console.log("May")
    break;
  case 5:
    console.log("June")
    break;
  default:
    console.log("Check your number")
    break;
}

