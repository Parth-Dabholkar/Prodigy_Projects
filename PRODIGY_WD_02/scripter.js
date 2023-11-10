const pauseBtn = document.querySelector(".pause");
const playBtn = document.querySelector(".play")
const resetBtn = document.querySelector(".reset")
const digitsTime = document.querySelector(".digits")
let circle = document.querySelector(".revCircle")
let timer = null

let seconds = 0
let minutes = 0
let hours = 0

playBtn.addEventListener('click', watchStart)
pauseBtn.addEventListener('click', watchStop)
resetBtn.addEventListener('click', watchReset)

function stopwatch(){
    seconds++
    if(seconds === 60)
    {
        seconds = 0
        minutes++
        if(minutes === 60)
        {
            minutes = 0
            hours++
        }
    }

    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds

    digitsTime.innerText = h + ":" + m + ":" + s
}

function watchStart(){
    if(timer !== null)
    {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000)
    circle.style.animationPlayState = 'running';
}

function watchStop(){
    clearInterval(timer)
    circle.style.animationPlayState = 'paused';
}

function watchReset()
{
    clearInterval(timer)
    seconds = 0
    minutes = 0
    hours = 0
    digitsTime.innerHTML = "00:00:00"
    circle.style.animation = "none"
    circle.offsetWidth
    circle.style.animation = null
}