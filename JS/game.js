const colors=["green","red", "yellow","blue"];
const randomNumberList=[];
var levelNumber=1;
var randomNumber= (Math.floor(Math.random() * 4)+1);
randomNumberList.push(randomNumber);
console.log(randomNumber);
detectGameStart();
function detectGameStart(){
    $(document).on('keypress',function(e) {
        // checking if space key is pressed
        if(e.which == 32) {
            console.log('Space key pressed');
            $(".headline").text("Level "+levelNumber);
            gameStart();
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
}

function gameStart(){
    var audio = new Audio('./sounds/'+colors[randomNumber-1]+'.mp3');
    audio.play();
    document.querySelector(".box"+randomNumber).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(".box"+randomNumber).classList.remove("pressed");
    },300);
    console.log(colors[randomNumber-1]+' box selected');
    console.log('list of random numbers -> '+randomNumberList[0]);
    console.log('length of random number array -> '+randomNumberList.length);
}

