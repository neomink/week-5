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
    let period = "AM";

    if (hour > 12) {
        hour = hour - 12;
        period = "PM";
    }
    if (7 > hour){
        document.getElementById("sun").style.display = "none"
        document.getElementById("moon").style.display = "initial"
    }
    if (7 < hour){
        document.getElementById("sun").style.display = "initial"
        document.getElementById("moon").style.display = "none"
    }
   

    clock.innerHTML = `${hour<10 ? `0${hour}`:hour} : ${minutes<10 ? `0${minutes}`:minutes} : ${seconds<10 ? `0${seconds}`:seconds} ${period}`
}

getTime()

function init(){
    setInterval( ()=>{ getTime(); } , 100)
}

init();


