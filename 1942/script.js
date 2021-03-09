
var hero = {x:450,y:500};
var enemies = [{x:100,y:100},{x:200,y:100},{x:300,y:100},{x:400,y:100},{x:500,y:100}];
var bullets=[];
function displayHero(){
    document.getElementById('hero').style['top']=hero.y+"px";
    document.getElementById('hero').style['left']=hero.x+"px";
}

function displayEnemies(){
    var output=''
    for(var i=0;i<enemies.length;i++){
        output+="<div class='enemy1' style='top:"+enemies[i].y+"px; left:"+enemies[i].x+"px;'></div>";
    }
    document.getElementById("enemies").innerHTML=output;
}

function fireBullets(){
    bullets.push({x:hero.x,y:hero.y});
    console.log(bullets);
    var output='';
    //output+="<div class='bullet' style='top:"++"px; left:"++"px;'></div>";
}

function moveEnemies(){
    for(var i=0;i<enemies.length;i++){
        enemies[i].y+=5;
        if(enemies[i].y>520){
            enemies[i].y=0;
            enemies[i].x=Math.random()*500;
        }
    }
}
document.addEventListener("keydown",function(event){
        keyPressed(event.key);
    });
    
    function keyPressed(switchKey){
        switch(switchKey){
            case "ArrowUp":
                if(hero.y>0){
                    hero.y-=10;
                    console.log(hero.y);
                    displayHero();
                }
                break;
            case "ArrowDown":
                if(hero.y<520){
                    hero.y+=10;
                    console.log(hero.y);
                    displayHero();
                }
                break;
            case "ArrowLeft":
                if(hero.x>0){
                    hero.x-=10;
                    console.log(hero.y);
                    displayHero();
                }
                break;
            case "ArrowRight":
                if(hero.x<970){
                    hero.x+=10;
                    console.log(hero.y);
                    displayHero();
                }
                break;
            case " ":
                fireBullets();
                break;
            default:
                console.log(switchKey);
            }
    }
function gameLoop(){
    displayHero();
    moveEnemies();
    displayEnemies();
}
setInterval(gameLoop,30);
// displayHero();
// displayEnemies();