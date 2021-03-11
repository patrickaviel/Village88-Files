

//DECLARE VARIABLES
var world=[ 
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,2,2,0,0,2,0,1,0,0,2,0,1,0,0,0,0,0,0,0,2,2,0,2],
    [2,0,2,2,0,0,2,0,2,2,2,2,2,2,0,2,2,2,2,0,0,2,2,0,2],
    [2,0,2,2,0,0,0,0,0,1,0,0,0,0,0,2,0,2,1,0,0,2,2,0,2],
    [2,1,2,2,0,0,0,0,3,0,0,0,0,2,2,2,0,0,0,0,0,2,2,1,2],
    [2,0,2,2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,3,0,0,2,2,0,2],
    [2,0,2,2,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,2,2,0,2],
    [2,0,0,0,3,0,0,0,1,0,0,0,1,0,0,0,0,0,3,0,0,2,2,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,3,0,1,2],
    [2,0,1,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,4,0,0,1,0,0,0,0,0,0,1,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,3,0,0,0,0,0,2],
    [2,0,2,2,0,1,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,2,0,2],
    [2,0,2,2,0,3,0,0,0,0,0,2,0,0,1,0,0,3,0,0,1,2,2,0,2],
    [2,0,2,2,0,0,0,0,2,2,2,2,0,4,0,0,0,0,0,0,0,2,2,0,2],
    [2,0,2,2,0,0,0,0,2,2,0,0,0,0,0,0,1,0,0,0,0,2,2,0,2],
    [2,0,2,2,0,3,0,0,2,2,0,0,0,2,0,0,0,0,0,0,0,2,2,0,2],
    [2,0,2,2,0,0,0,0,2,2,0,3,0,2,0,0,0,0,0,0,0,2,2,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]

];
var world2=[
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,0,0,2,2,0,0,0,0,0,0,0,1,0,0,0,4,0,2,2,0,0,0,2],
    [2,0,0,0,2,2,0,0,2,2,2,0,3,0,2,2,2,0,0,2,2,0,0,0,2],
    [2,0,0,0,2,2,0,0,0,2,2,2,0,2,2,2,0,0,0,2,2,0,0,0,2],
    [2,0,0,0,2,2,0,0,0,0,2,2,0,2,2,0,0,1,0,2,2,0,0,0,2],
    [2,4,0,0,2,2,0,0,0,0,0,2,2,2,0,0,3,0,0,2,2,0,0,0,2],
    [2,0,0,0,2,2,0,0,3,0,0,0,2,0,0,1,0,0,0,2,2,0,0,0,2],
    [2,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2],
    [2,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,2],
    [2,0,0,0,2,2,2,2,0,0,0,0,3,0,0,0,0,2,2,2,2,0,0,0,2],
    [2,0,2,2,2,0,0,2,2,2,0,0,0,0,0,2,2,2,0,0,2,2,2,0,2],
    [2,0,2,2,2,0,0,2,2,2,0,0,0,0,0,2,2,2,0,0,2,2,2,3,2],
    [2,0,2,2,2,0,0,2,2,2,1,0,4,0,0,2,2,2,0,0,2,2,2,0,2],
    [2,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,2],
    [2,0,2,2,2,0,0,2,2,2,3,0,0,0,0,2,2,2,0,0,2,2,2,0,2],
    [2,0,2,2,2,0,0,2,2,2,0,0,0,0,0,2,2,2,0,0,2,2,2,0,2],
    [2,0,2,2,2,0,0,2,2,2,0,0,0,3,0,2,2,2,0,0,2,2,2,0,2],
    [2,0,3,0,2,2,2,2,0,0,0,0,4,0,0,0,0,2,2,2,2,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,4,0,0,0,1,0,0,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];
var world3=[
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,0,0,2,2,0,4,0,0,0,0,0,0,0,0,1,0,3,0,0,2,2,0,0,2],
        [2,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,1,2],
        [2,0,0,2,2,0,0,0,0,3,0,0,0,0,0,0,0,0,4,0,2,2,0,0,2],
        [2,0,0,0,0,0,0,0,0,0,2,2,0,2,2,0,0,0,0,0,0,0,0,0,2],
        [2,0,0,0,0,0,0,1,0,0,0,2,2,2,0,0,4,0,0,0,0,0,0,0,2],
        [2,0,0,0,2,2,0,0,0,0,0,0,2,0,0,1,0,0,0,2,2,0,0,0,2],
        [2,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2],
        [2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2],
        [2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2],
        [2,0,0,2,2,2,2,0,0,0,4,0,0,0,0,0,0,0,2,2,2,2,0,0,2],
        [2,0,0,0,2,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,2,0,0,0,2],
        [2,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,2],
        [2,0,1,0,0,0,0,4,0,0,2,2,0,2,2,0,0,0,0,0,0,0,0,0,2],
        [2,4,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,2],
        [2,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0,0,0,2],
        [2,0,0,2,2,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2],
        [2,1,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,2,2,0,0,2],
        [2,0,0,2,2,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,2,2,0,0,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];
var rotate="pacman";
var pacman={x:1,y:1};
var ghost={x:3,y:3};
var score=0;
var numberPicker = Math.floor(Math.random() * 3) + 1 ;
//FUNCTION CALL
updatePacman();
displayWorld();
console.log(numberPicker);

function displayWorld(){
    if(numberPicker==1){
        var output='';
        for(var i=0;i<world.length;i++){
        output+="\n<div class='row'>\n";
        for(var j=0;j<world[i].length;j++){
            if(world[i][j]==2){
                output+="<div class='brick'></div>";
            }else if(world[i][j]==1){
                output+="<div class='coins'></div>";
            }else if(world[i][j]==0){
                output+="<div class='empty'></div>";
            }else if(world[i][j]==3){
                output+="<div class='cherry'></div>";
            }else if(world[i][j]==4){
                output+="<div class='ghost'></div>";
            }
        }
        // console.log(i);
        // console.log(world[i][5]);
        output+="\n</div>";
        console.log("hello2");
    }
    }else if(numberPicker==2){
        
        var output='';
        for(var i=0;i<world2.length;i++){
            output+="\n<div class='row'>\n";
            for(var j=0;j<world2[i].length;j++){
                if(world2[i][j]==2){
                    output+="<div class='brick'></div>";
                }else if(world2[i][j]==1){
                    output+="<div class='coins'></div>";
                }else if(world2[i][j]==0){
                    output+="<div class='empty'></div>";
                }else if(world2[i][j]==3){
                    output+="<div class='cherry'></div>";
                }else if(world2[i][j]==4){
                    output+="<div class='ghost'></div>";
                }
            }
            // console.log(i);
            // console.log(world[i][5]);
            output+="\n</div>";
            console.log("hello2");
        }
    }else if(numberPicker==3){
        console.log("hello3");
        var output='';
        for(var i=0;i<world3.length;i++){
            output+="\n<div class='row'>\n";
            for(var j=0;j<world3[i].length;j++){
                if(world3[i][j]==2){
                    output+="<div class='brick'></div>";
                }else if(world3[i][j]==1){
                    output+="<div class='coins'></div>";
                }else if(world3[i][j]==0){
                    output+="<div class='empty'></div>";
                }else if(world3[i][j]==3){
                    output+="<div class='cherry'></div>";
                }else if(world3[i][j]==4){
                    output+="<div class='ghost'></div>";
                }
            }
            // console.log(i);
            // console.log(world[i][5]);
            output+="\n</div>";
            console.log("hello2");
        }  
}
console.log(output);
    document.getElementById("world").innerHTML=output;
    document.getElementById("score").innerText="Score: "+score;
}

function updatePacman(){
    document.getElementById("pacman").style.top=pacman.y*20+160+"px";
    document.getElementById("pacman").style.left=pacman.x*20+440+"px";
    document.getElementById("ghost").style.left=ghost.x*20+120+"px";
    document.getElementById("ghost").style.left=ghost.y*20+480+"px";
}
// document.addEventListener("keydown",function(event){
//     keyPressed(event.key);
//     if(world[pacman.y][pacman.x]==1){
//         world[pacman.y][pacman.x]=0;
//         displayWorld();
//     }
// });

// function keyPressed(switchKey){
    
//         switch(switchKey){
//             case "ArrowUp":
//                 pacman.y-=20;
//                 updatePacman();
//                 break;
//             case "ArrowDown":
//                 pacman.y+=20;
//                 updatePacman();
//                 break;
//             case "ArrowLeft":
//                 pacman.x-=20;
//                 updatePacman();
//                 break;
//             case "ArrowRight":
//                 pacman.x+=20;
//                 updatePacman();
//                 break;
//             default:
//                 console.log(switchCase);
//         }
// }
document.onkeydown=function(e){
    if(numberPicker==1){
        if(e.keyCode==37 && world[pacman.y][pacman.x-1] !=2){//left
            pacman.x--;
            rotate="-left";
        }else if(e.keyCode==38 && world[pacman.y-1][pacman.x] !=2){//up
            pacman.y--;
            rotate="-up";
        }else if(e.keyCode==39 && world[pacman.y][pacman.x+1] !=2){//right
            pacman.x++;
            rotate="";
        }else if(e.keyCode==40 && world[pacman.y+1][pacman.x] !=2){//down
            pacman.y++;
            rotate="-down";
        }
        if(world[pacman.y][pacman.x]==1){
            score+=5;
            world[pacman.y][pacman.x]=0;
            displayWorld();
            coinEffect();
        }
        if(world[pacman.y][pacman.x]==3){
            score+=20;
            world[pacman.y][pacman.x]=0;
            displayWorld();
            cherryEffect();
        }
        if(world[pacman.y][pacman.x]==4){
            gameOverEffect();
            document.getElementById("go").style.opacity=1;  
            //DISABLE KEYPRESS EVENTS
            document.onkeydown = function (e) {
                return false;
            }
        }
        document.getElementById("pacman").style.backgroundImage="url(images/pacman"+rotate+".gif)";
        updatePacman();
    }else if(numberPicker==2){
        if(e.keyCode==37 && world2[pacman.y][pacman.x-1] !=2){//left
            pacman.x--;
            rotate="-left";
        }else if(e.keyCode==38 && world2[pacman.y-1][pacman.x] !=2){//up
            pacman.y--;
            rotate="-up";
        }else if(e.keyCode==39 && world2[pacman.y][pacman.x+1] !=2){//right
            pacman.x++;
            rotate="";
        }else if(e.keyCode==40 && world2[pacman.y+1][pacman.x] !=2){//down
            pacman.y++;
            rotate="-down";
        }
        //ADD SCORES
        if(world2[pacman.y][pacman.x]==1){
            score+=5;
            world2[pacman.y][pacman.x]=0;
            displayWorld();
            coinEffect();
        }
        if(world2[pacman.y][pacman.x]==3){
            score+=20;
            world2[pacman.y][pacman.x]=0;
            displayWorld();
            cherryEffect();
        }
        if(world2[pacman.y][pacman.x]==4){
            gameOverEffect();
            document.getElementById("go").style.opacity=1;  
            //DISABLE KEYPRESS EVENTS
            document.onkeydown = function (e) {
                return false;
            }
        }
        document.getElementById("pacman").style.backgroundImage="url(images/pacman"+rotate+".gif)";
        updatePacman();
    }else if(numberPicker==3){
        if(e.keyCode==37 && world3[pacman.y][pacman.x-1] !=2){//left
            pacman.x--;
            rotate="-left";
        }else if(e.keyCode==38 && world3[pacman.y-1][pacman.x] !=2){//up
            pacman.y--;
            rotate="-up";
        }else if(e.keyCode==39 && world3[pacman.y][pacman.x+1] !=2){//right
            pacman.x++;
            rotate="";
        }else if(e.keyCode==40 && world3[pacman.y+1][pacman.x] !=2){//down
            pacman.y++;
            rotate="-down"; 
        }
        
        //ADD SCORES
        if(world3[pacman.y][pacman.x]==1){
            score+=5;
            world3[pacman.y][pacman.x]=0;
            displayWorld();
            coinEffect();
        }
        if(world3[pacman.y][pacman.x]==3){
            score+=20;
            world3[pacman.y][pacman.x]=0;
            displayWorld();
            cherryEffect();
        }
        if(world3[pacman.y][pacman.x]==4){
            gameOverEffect();
            document.getElementById("go").style.opacity=1;  
            //DISABLE KEYPRESS EVENTS
            document.onkeydown = function (e) {
                return false;
            }
        }
        document.getElementById("pacman").style.backgroundImage="url(images/pacman"+rotate+".gif)";
        updatePacman();
    }  
}

function coinEffect(){
    var explode = new Audio('sounds/coin.mp3');
    explode.play();
}
function cherryEffect(){
    var explode = new Audio('sounds/cherry.mp3');
    explode.play();
}
function gameOverEffect(){
    var explode = new Audio('sounds/game-over.mp3');
    explode.play();
}


