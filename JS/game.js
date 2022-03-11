const colors=["green","red", "yellow","blue"];
const randomNumberList=[];
const gamePattern=[];
const userPattern=[];
var levelNumber=1;
// generate random number between 1 to 4
var randomNumber= (Math.floor(Math.random() * 4)+1);
randomNumberList.push(randomNumber);
var gameStarted=false;
$(document).on('keypress',function(e) {
    // checking if space key is pressed
    if(e.which == 32) {
        console.log('Space key pressed');
        $(".headline").text("Level "+levelNumber);
        nextPattern()
        gameStarted=true;
    }
    // if any other key then error warning
    else{
        var audio = new Audio('./sounds/wrong.mp3');
        audio.play();
        document.querySelector("body").classList.add("wrong-key-pressed");
        setTimeout(function(){
            document.querySelector("body").classList.remove("wrong-key-pressed");
        },300);
    }
});

$(".btn").click(function(e){
    var userChosenColor = e.target.id;
    userPattern.push(userChosenColor);
    console.log(userPattern);
    playSound(userChosenColor);
    checkPattern();
});

function checkPattern(){
    
}

function nextPattern(){
    randomNumber= (Math.floor(Math.random() * 4)+1);
    console.log('Random number: '+randomNumber);
    gamePattern.push(randomNumber);
    playSound(colors[gamePattern[gamePattern.length-1]-1]);
    console.log("game pattern: "+gamePattern);
}

// name parameter is always taking color as input
function playSound(name){
    console.log('playing --> ./sounds/'+name+'.mp3');
    var audio = new Audio('./sounds/'+name+'.mp3');
    audio.play();
    document.querySelector("#"+name).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("#"+name).classList.remove("pressed");
    },300);
}
function startOver(){
    levelNumber=1;
    gamePattern=[];
    gameStarted=false;
}
