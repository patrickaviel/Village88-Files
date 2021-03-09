
var world=[
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,2,1,1,0,1,1,2,1,0,1,1,1,2,1,1,2,1,2],
    [2,0,2,2,2,1,2,2,2,2,1,1,0,1,2,1,1,2,1,2],
    [2,1,2,1,0,1,1,1,1,2,0,0,2,1,2,1,1,2,1,2],
    [2,1,1,1,2,2,2,2,2,1,1,1,2,1,2,1,2,2,0,2],
    [2,1,2,1,2,1,1,2,1,1,2,2,2,1,2,1,1,1,1,2],
    [2,1,2,1,1,1,2,2,1,2,2,1,2,1,2,2,1,2,1,2],
    [2,1,2,1,1,1,1,0,1,1,2,1,2,1,1,1,1,2,1,2],
    [2,1,2,1,2,1,0,1,1,0,0,1,2,1,1,2,1,2,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]

];
var rotate="pacman";
var pacman={x:1,y:1};
var score=0;
var numberPicker = Math.floor(Math.random() * 5) + 1 ;
console.log(numberPicker);
function displayWorld(){
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
        output+="\n</div>"
    }

    console.log(output);
    document.getElementById("world").innerHTML=output;
    document.getElementById("score").innerText=score;
}
function updatePacman(){
    document.getElementById("pacman").style.top=pacman.y*20+"px";
    document.getElementById("pacman").style.left=pacman.x*20+"px";
}

updatePacman();
displayWorld();
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
        score+=20;
        world[pacman.y][pacman.x]=0;
        displayWorld();
    }
    document.getElementById("pacman").style.backgroundImage="url(images/pacman"+rotate+".gif)";
    updatePacman();
}

