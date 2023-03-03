console.log('Start ticking...')

// const hours = document.getElementById("hours")
// function getHour(){
//     const time = new Date();
//     const hour = time.getHours();
//     hours.innerHTML = `${hour<10 ? `0${hour}`:hour}`
// }
// getHour()

const clock = document.getElementById("time")

function getTime(){
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (hour > 12) {
        hour = hour - 12;
    }

    clock.innerHTML = `${hour<10 ? `0${hour}`:hour} : ${minutes<10 ? `0${minutes}`:minutes} : ${seconds<10 ? `0${seconds}`:seconds}`
}

getTime()

function init(){
    setInterval( ()=>{ getTime(); } , 100)
}

init();

