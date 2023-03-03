const h1 = document.getElementById("time")

function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    h1.innerHTML = `${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
}

getTime()

function init(){
    setInterval( ()=>{ getTime(); } , 100)
}

init();
