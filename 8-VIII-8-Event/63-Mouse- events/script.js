const logo = document.querySelector('img')
const onClick = () => {
    // window.open("https://www.google.com",'_blank')
    // window.location.href="https:lamaranadiallo.com"
    console.log('click event')
}
const DoubleClick = () => {

    if (document.body.style.background !== "gray") {
        document.body.style.background = "gray"
        document.body.style.color = "white"
    } else {
        document.body.style.background = "white"
        document.body.style.color = "black"
    }
}
const rightClick = () => {

    console.log('right click event')
}

const MouseDown = () => {

    console.log('Mouse down')
}
const mouseup = () => {

    console.log('Mouse Up')
}

const dragstart = () => {

    console.log('drag start')
}



const drag = () => {

    console.log('drag ')
}

const dragend = () => {

    console.log('drag end  ')
}


// //  logo.addEventListener('click',onClick)
logo.addEventListener('click', onClick)

logo.addEventListener('dblclick', DoubleClick)

logo.addEventListener('contextmenu', rightClick)
logo.addEventListener('mousedown', MouseDown)
logo.addEventListener('mouseup', mouseup)
logo.addEventListener('dragstart', dragstart)
logo.addEventListener('drag', drag)

logo.addEventListener('dragend', dragend)






// const logo = document.querySelector('img');

// logo.addEventListener('mouseenter', () => {
//   alert('You are hovering over the logo');
// });

// logo.addEventListener('mouseleave', () => {
//   alert('You left the logo');
// });
let timer;

// function when user is inactive
function userInactive() {
    alert("User inactive!");
    // Example: show popup or disconnect
}

// function when user performs an action
function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(userInactive, 5000); // 5s of inactivity
}

// events that prove user is active
window.addEventListener("mousemove", resetTimer);  // mouse moves
window.addEventListener("keydown", resetTimer);    // keyboard
window.addEventListener("click", resetTimer);      // mouse click
window.addEventListener("scroll", resetTimer);     // scroll

// timer initialization
resetTimer();
