let playB = document.querySelector('#play')
let stopB = document.querySelector('#stop')
let increaseB = document.querySelector('#increase')
let decreaseB = document.querySelector('#decrease')

let forestB = document.querySelector('#forest')
let rainB = document.querySelector('#rain')
let coffeeShopB = document.querySelector('#coffeeShop')
let firePlaceyB = document.querySelector('#firePlace')

let minutesDisplay = document.querySelector('#minutes')
let secondsDisplay = document.querySelector('#seconds')

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut    

const somFloresta = new Audio("audios/Floresta.wav")
const somChuva = new Audio("audios/Chuva.wav")
const somCafeteria = new Audio("audios/Cafeteria.wav")
const somLareira = new Audio("audios/Lareira.wav")


let bgForest = document.getElementById("forestBg")
let bgRain = document.getElementById("rainBg")
let bgCoffee = document.getElementById("coffeeshopBg")
let bgFire = document.getElementById("fireplaceBg")

// FUNÇÕES REFERENTES AO BACKGROUND

function BackgroundNone(){
    bgForest.style.display = "none";
    bgRain.style.display = "none";
    bgCoffee.style.display = "none";
    bgFire.style.display = "none";
}
function forestBackground(){
    bgForest.style.display = "block";
    bgRain.style.display = "none";
    bgCoffee.style.display = "none";
    bgFire.style.display = "none";
}
function rainBackground(){
    bgForest.style.display = "none";
    bgRain.style.display = "block";
    bgCoffee.style.display = "none";
    bgFire.style.display = "none";
}
function coffeeBackground(){
    bgForest.style.display = "none";
    bgRain.style.display = "none";
    bgCoffee.style.display = "block";
    bgFire.style.display = "none";
}
function fireBackground(){
    bgForest.style.display = "none";
    bgRain.style.display = "none";
    bgCoffee.style.display = "none";
    bgFire.style.display = "block";
}

// FUNÇÕES DE TROCAR A COR DO TIME DEVIDO AO BACKGROUND

function colorTime(){
    document.getElementById("minutes").style.color = '#FFFFFF';
    document.getElementById("seconds").style.color = '#FFFFFF';
    document.getElementById("points").style.color = '#FFFFFF';
    document.getElementById("imgplay").src = "./images/play2.png";
    document.getElementById("imgstop").src = "./images/stop2.png";
    document.getElementById("img+").src = "./images/+2.png";
    document.getElementById("img-").src = "./images/-2.png";
}

function colorTimeReset(){
    document.getElementById("minutes").style.color = 'black';
    document.getElementById("seconds").style.color = 'black';
    document.getElementById("points").style.color = 'black';
    document.getElementById("imgplay").src = "./images/play.png";
    document.getElementById("imgstop").src = "./images/stop.png";
    document.getElementById("img+").src = "./images/+1.png";
    document.getElementById("img-").src = "./images/-1.png";
}

// FUNÇÕES DO CRONOMETRO

function countDown(){
    timerTimeOut = setTimeout(function(){
         let seconds = Number(secondsDisplay.textContent)
         let minutes = Number(minutesDisplay.textContent)
         let isFinish = minutes <= 0 && seconds <= 0
        
         updateDisplay(minutes, 0)
         
         if(isFinish){
             updateDisplay()
             resetTimer()
             return
         }
         if( seconds <= 0){
             seconds = 60
             --minutes
         }
         updateDisplay(minutes, String(seconds-1))
 
         countDown()
     }, 1000)
 }
 
function updateDisplay(minutes,seconds){
    minutesDisplay.textContent = String(minutes).padStart(2,"0") 
    secondsDisplay.textContent = String(seconds).padStart(2,"0")
}

function resetTimer(){
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

// FUNÇÕES DE ALTERAÇÃO DO SOM DE ACORDO COM O CARD ESCOLHIDO

function pauseSound(){
    somCafeteria.pause()
    somChuva.pause()
    somFloresta.pause()
    somLareira.pause()
}

function playSomFloresta(){
    pauseSound()
    somFloresta.play()
    somFloresta.loop = true
}
function playSomCafeteria(){
    pauseSound()
    somCafeteria.play()
    somCafeteria.loop = true
}
function playSomChuva(){
        pauseSound()
        somChuva.play()
        somChuva.loop = true
}
function playSomLareira(){
    pauseSound()
    somLareira.play()
    somLareira.loop = true
}

// EVENTOS DE CLICK DO TIME

playB.addEventListener('click',function(){
    countDown()
})

stopB.addEventListener('click',function(){
    resetTimer()
    pauseSound()
    BackgroundNone()
    colorTimeReset() 
})

increaseB.addEventListener('click',function(){
   minutesDisplay.textContent = String(parseInt(minutesDisplay.textContent) + 5).padStart(2, '0');
})

decreaseB.addEventListener('click',function(){
 
        minutesDisplay.textContent = String(parseInt(minutesDisplay.textContent) -5).padStart(2, '0');
        let newMinutes = Number(minutesDisplay.textContent)
        if(newMinutes < 0){
            alert("Não é possível informar valor NEGATIVO")
            resetTimer()
        }
})

// EVENTOS DE CLICK DOS CARDS ALTERANDO BACKGROUND E ADICIONANDO SOM

forestB.addEventListener('click',function(){
    playSomFloresta()
    forestBackground() 
    colorTime()
})

rainB.addEventListener('click',function(){
    playSomChuva()
    rainBackground()
    colorTime() 
})

coffeeShopB.addEventListener('click',function(){
    playSomCafeteria()
    coffeeBackground() 
    colorTime() 
})

firePlaceyB.addEventListener('click',function(){
    playSomLareira()
    fireBackground() 
    colorTime()
})
