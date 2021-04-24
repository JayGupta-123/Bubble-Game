
var canvas = document.querySelector("#canvas");
var bubble = document.querySelector(".bubble");
var timeValue = document.querySelector("#time");
var guessNum = document.querySelector("#guessNum");
var score = document.querySelector("#score");


function makeBubble(){
    for(var i = 0; i < 30; i++){
        var randomNumber = Math.floor( Math.random()*10);
        canvas.innerHTML = canvas.innerHTML + `<div class="bubble">${randomNumber}</div>`
    }
}

makeBubble();

var time = 60
function timer(){
    if(time > 0){
        time--;
        timeValue.innerHTML = `${time}`;
    }
    else{
        canvas.innerHTML = `<div><h1>Game Over</h1> <br> <h1>Score = ${score.innerHTML}</h1></div>`
    }
}

timer();

setInterval(timer , 700);

function guessNumber(){
    var randomNumber = Math.floor( Math.random()*10);
    guessNum.innerHTML = `${randomNumber}`;
}

guessNumber();

canvas.addEventListener('click', function (event){
    if(event.target.textContent == guessNum.innerHTML){
        guessNumber();
        canvas.innerHTML = " ";
        makeBubble();
        IncreaseScore();
    }
})

var scoreIncrease = 0;

function IncreaseScore(){
    var scoreVal = ++scoreIncrease;
    score.innerHTML = `${scoreVal}`;
}