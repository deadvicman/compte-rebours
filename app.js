let valHours = document.getElementById('hrValue')
let valMin = document.getElementById('minValue')
let valSec = document.getElementById('secValue')

let textHours = document.getElementById('affichHr')
let textMin = document.getElementById('affichMin')
let textSec = document.getElementById('affichSec')

let myPause = document.getElementById('pause')
let myReset = document.getElementById('reset')
let myStart = document.getElementById('start')
let send = document.getElementById('send')

let affich = document.getElementById("afficher")

let isPaused = false;

let mySec = 0;
let myMin = 0;
let myHours = 0;

function myCounter(sec, min, hours){

    mySec = sec
    myHours = hours
    myMin = min

    this.getStart = function (){
        isPaused = false
        let myTime = setInterval(function (){
            if (!isPaused){
                affich.innerHTML = "COMPTEUR LANCER"
                affich.style.color = "green"
                if (mySec > 0 && !isPaused){
                    --mySec;
                    textSec.innerHTML = mySec
                }
                if (mySec === 0 & myMin > 0 && !isPaused){
                    --myMin
                    mySec+=60;
                    textMin.innerHTML = myMin
                }
                if (myMin > 0 && mySec <= 0 && !isPaused){
                    --myMin
                    mySec+=60;
                    textMin.innerHTML = myMin
                    textSec.innerHTML = mySec
                }
                if (myMin <= 0 && mySec <= 0 && myHours > 0 && !isPaused){
                    --myHours
                    myMin+=60;
                    textMin.innerHTML = myMin
                    textHours.innerHTML = myHours
                }
                if (myMin <= 0 && mySec <= 0 && myHours <=0 && !isPaused){
                    affich.innerHTML = "TERMINER"
                    clearInterval(myTime)
                }
            }
        },1000)
    }

    this.getStop = function (){
        isPaused = true
        affich.innerHTML = "COMPTEUR EN PAUSE"
        affich.style.color = "orange"
    }

    this.getReset = function (){
        textSec.innerHTML = "0"
        textMin.innerHTML = "0"
        textHours.innerHTML = "0"
        myMin = 0
        myHours = 0
        mySec = 0
        clearInterval()
        affich.innerHTML = "COMPTEUR COUPER"
        affich.style.color = "red"
    }
    this.getSend = function (){
        textSec.innerHTML = mySec
        textMin.innerHTML = myMin
        textHours.innerHTML = myHours
        console.log(mySec)
    }
}

let one = new myCounter(mySec, valMin, valHours)
send.addEventListener("click", function (){
    mySec = valSec.value
    myHours = valHours.value
    myMin = valMin.value
    one.getSend()
})
myReset.addEventListener("click", function (){
    one.getReset()
})
myStart.addEventListener("click", function (){
    one.getStart()
})
myPause.addEventListener("click", function (){
    one.getStop()
})