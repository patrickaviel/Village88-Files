
var hero = {x:450,y:500};
var enemies = [{x:100,y:50},{x:300,y:80},{x:500,y:10},{x:700,y:20},{x:900,y:80}];
var bullets=[];
var score=0;

function displayHero(){
    document.getElementById('hero').style['top']=hero.y+"px";
    document.getElementById('hero').style['left']=hero.x+"px";
    document.getElementById("scorer").innerText="Score: "+score;
}

function displayEnemies(){
    var output='';
    for(var i=0;i<enemies.length;i++){
        output+="<div class='enemy1' style='top:"+enemies[i].y+"px; left:"+enemies[i].x+"px;'></div>";
    }
    document.getElementById("enemies").innerHTML=output;
}

function fireBullets(){
    var output='';
    for(var i=0;i<bullets.length;i++){
        output+="<div class='bullet' style='top:"+(bullets[i].y)+"px; left:"+(bullets[i].x)+"px;'></div>";
    }
    document.getElementById("bullets").innerHTML=output;
    //output+="<div class='bullet' style='top:"++"px; left:"++"px;'></div>";
    moveBullets();
}

function moveEnemies(){
    for(var i=0;i<enemies.length;i++){
        enemies[i].y+=5;
        if(enemies[i].y>520){
            enemies[i].y=Math.random()*50;
            enemies[i].x=Math.random()*900;
        }
    }
}
function moveBullets(){
    for(var i=0;i<bullets.length;i++){
        bullets[i].y-=5;
        if(bullets[i].y<0){
            bullets[i] = bullets[bullets.length-1];
            bullets.pop();
        }
    }
}

function collisionDetectionShip(){
    for(var i=0;i<enemies.length;i++){
        if(Math.abs(enemies[i].x-hero.x)<10&&Math.abs(enemies[i].y-hero.y)<10){
            console.log("Collision with Ship!");
            document.getElementById("gameOver").style.opacity=1;
            explosionEffect();
            setTimeout(gameOverEffect,2000);
            hero.x=-1000;
            hero.y=0;
            var destroy='';
            destroy+="<div class='explosionEffect' style='top:"+(enemies[i].y)+"px; left:"+(enemies[i].x)+"px;'></div>";
            enemies.splice(i,1);
            document.getElementById("explosion").innerHTML=destroy;
        }
    }
    
}

function collisionDetectionBullets(){
    for(var i=0;i<bullets.length;i++){
        for(var j=0;j<enemies.length;j++){
            if(Math.abs(bullets[i].x-enemies[j].x)<10&&Math.abs(bullets[i].y-enemies[j].y)<10){
                console.log("Bullet",i, "and Enemy",j,"collided");
                score+=5;
                explosionEffect();
                enemies.splice(j,1);
                bullets.splice(i,1);
            }
        }
    }
}

function explosionEffect(){
    var explode = new Audio('sounds/explode.mp3');
    explode.play();
}

function gameOverEffect(){
    var gameOver = new Audio('sounds/game-over.mp3');
    gameOver.play();
}
document.addEventListener("keydown",function(event){
        keyPressed(event.key);
});
    
function keyPressed(switchKey){
    switch(switchKey){
        case "ArrowUp":
            if(hero.y>0){
                hero.y-=10;
                //console.log(hero.y);
                displayHero();
            }
            break;
        case "ArrowDown":
            if(hero.y<520){
                hero.y+=10;
                //console.log(hero.y);
                displayHero();
            }
            break;
        case "ArrowLeft":
            if(hero.x>0){
                hero.x-=10;
                //console.log(hero.y);
                displayHero();
            }
            break;
        case "ArrowRight":
            if(hero.x<970){
                hero.x+=10;
                //console.log(hero.y);
                displayHero();
            }
            break;
        case " ":
            bullets.push({x:hero.x+7,y:hero.y-10});
            console.log(bullets);
            fireBullets();
            break;
        default:  
            }
    }

function gameLoop(){
    displayHero();
    moveEnemies();
    displayEnemies();
    moveBullets();
    fireBullets();
    collisionDetectionShip();
    collisionDetectionBullets();
}

setInterval(gameLoop,30);
// displayHero();
// displayEnemies();