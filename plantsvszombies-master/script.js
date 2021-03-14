// Variable Declaration
var plants=[];

var plantsInfo=[
    {damage:"",health:50,speed:0},
    {damage:"",health:50,speed:0},
    {damage:"",health:50,speed:0},
    {damage:"",health:50,speed:0},
    {damage:"",health:50,speed:0}
];

var bulletSpawn=[100,200,300,400,500];
var counter=0;

var output='';

var zombies=[
    {x: 930,y: 60,speed:1,health:100},
    {x: 1100,y: 60,speed:1,health:100},
    {x: 930,y: 260,speed:1,health:100}
];

var zombies2=[
    {x: 1000,y: 150,speed:2,health:100},
    {x: 930,y: 340,speed:2,health:100},
    {x: 950,y: 450,speed:2,health:100}
    
];

var bullets=[
    // {x:330,y:80},
    // {x:330,y:190},
    // {x:330,y:300},
    // {x:330,y:410},
    // {x:330,y:520}
];

var spawnBullet=[];

var score=0;

function choosePlants(e){
    if(plants.length<5){
        counter+=1;
        plants.push(e);
        console.log(e);
        console.log("object",plantsInfo);
        console.log(plants);
        displayPlants(e);
    }else{
        console.log("You exceeded number of plants");
    }
}

function displayPlants(selectedPlant){
    var one=[{x:60,y:250},{x:160,y:250},{x:260,y:250},{x:360,y:250},{x:460,y:250}];
    if(counter==1){
        if(plants.length<=5){
            if(selectedPlant=="plant"){
                output += "<div class='plant' style='top:"+(60)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[0] = {...plantsInfo[0],damage:20,speed:5}
                console.log()
            }else if(selectedPlant=="plant2"){
                output += "<div class='plant2' style='top:"+(60)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[0] = {...plantsInfo[0],damage:40,speed:10}
            }else if(selectedPlant=="plant3"){
                output += "<div class='plant3' style='top:"+(60)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[0] = {...plantsInfo[0],damage:60,speed:15}
            }else if(selectedPlant=="plant4"){
                output += "<div class='plant4' style='top:"+(60)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[0] = {...plantsInfo[0],damage:80,speed:20}
            }else if(selectedPlant=="plant5"){
                output += "<div class='plant5' style='top:"+(60)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[0] = {...plantsInfo[0],damage:100,speed:25}
            }
            console.log(selectedPlant,plantsInfo[0].damage);
        }
    }if(counter==2){
        if(plants.length<=5){
            if(selectedPlant=="plant"){
                output += "<div class='plant' style='top:"+(160)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[1] = {...plantsInfo[1],damage:20}
            }else if(selectedPlant=="plant2"){
                output += "<div class='plant2' style='top:"+(160)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[1] = {...plantsInfo[1],damage:40}
            }else if(selectedPlant=="plant3"){
                output += "<div class='plant3' style='top:"+(160)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[1] = {...plantsInfo[1],damage:60}
            }else if(selectedPlant=="plant4"){
                output += "<div class='plant4' style='top:"+(160)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[1] = {...plantsInfo[1],damage:80}
            }else if(selectedPlant=="plant5"){
                output += "<div class='plant5' style='top:"+(160)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[1] = {...plantsInfo[1],damage:100}
            }
            console.log(selectedPlant, plantsInfo[1].damage);
            
        }
    }if(counter==3){
        if(plants.length<=5){
            if(selectedPlant=="plant"){
                output += "<div class='plant' style='top:"+(260)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[2] = {...plantsInfo[2],damage:20}
            }else if(selectedPlant=="plant2"){
                output += "<div class='plant2' style='top:"+(260)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[2] = {...plantsInfo[2],damage:40}
            }else if(selectedPlant=="plant3"){
                output += "<div class='plant3' style='top:"+(260)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[2] = {...plantsInfo[2],damage:60}
            }else if(selectedPlant=="plant4"){
                output += "<div class='plant4' style='top:"+(260)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[2] = {...plantsInfo[2],damage:80}
            }else if(selectedPlant=="plant5"){
                output += "<div class='plant5' style='top:"+(260)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[2] = {...plantsInfo[2],damage:100}
            }
            console.log(selectedPlant, plantsInfo[2].damage);
        }
    }if(counter==4){
        if(plants.length<=5){
            if(selectedPlant=="plant"){
                output += "<div class='plant' style='top:"+(360)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[3] = {...plantsInfo[3],damage:20}
            }else if(selectedPlant=="plant2"){
                output += "<div class='plant2' style='top:"+(360)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[3] = {...plantsInfo[3],damage:40}
            }else if(selectedPlant=="plant3"){
                output += "<div class='plant3' style='top:"+(360)+"px; left:"+(250)+"px;'></div>"; 
                plantsInfo[3] = {...plantsInfo[3],damage:60}
            }else if(selectedPlant=="plant4"){
                output += "<div class='plant4' style='top:"+(360)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[3] = {...plantsInfo[3],damage:80}
            }else if(selectedPlant=="plant5"){
                output += "<div class='plant5' style='top:"+(360)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[3] = {...plantsInfo[3],damage:100}
            }
            console.log(selectedPlant,plantsInfo[3].damage);
            
        }
    }if(counter==5){
        if(plants.length<=5){
            if(selectedPlant=="plant"){
                output += "<div class='plant' style='top:"+(460)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[4] = {...plantsInfo[4],damage:20}
            }else if(selectedPlant=="plant2"){
                output += "<div class='plant2' style='top:"+(460)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[4] = {...plantsInfo[4],damage:40}
            }else if(selectedPlant=="plant3"){
                output += "<div class='plant3' style='top:"+(460)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[4] = {...plantsInfo[4],damage:60}
            }else if(selectedPlant=="plant4"){
                output += "<div class='plant4' style='top:"+(460)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[4] = {...plantsInfo[4],damage:80}
            }else if(selectedPlant=="plant5"){
                output += "<div class='plant5' style='top:"+(460)+"px; left:"+(250)+"px;'></div>";
                plantsInfo[4] = {...plantsInfo[4],damage:100}
            }
            console.log(selectedPlant,plantsInfo[4].damage);
        }
    }
    document.getElementById('plants').innerHTML = output;
    if(counter==5){
        document.getElementById('startGame').style.opacity=1; 
    }
}

function startGame(){
    zombiesComing();
    //setInterval(drawZombies,100);
    drawZombies();
    setInterval(moveEnemies,100);
    //setInterval(zombieBulletCollision,100);
    setInterval(createBullet,2000);
    //createBullet();
    //drawBullets();
    setInterval(drawBullets,50);
    setInterval(moveBullets,50);
    
    //setInterval(moveBullets,30);
    //document.getElementById('startGame').remove();
}

setInterval(zombieBulletCollision,20);
function createBullet(){
    for(var i=0; i<plantsInfo.length; i++){
        bullets.push({
            x: 320,
            y:bulletSpawn[i]
        });
    }
}

function drawBullets(){
    //console.log(bullets);
    //console.log("This is buket");
    var html = '';
    for(var i=0; i<bullets.length; i++){
        html += "<div class='bullet' style='top: "+bullets[i].y+"px; left:"+bullets[i].x+"px;' ></div>";
    }
    document.getElementById('bullets').innerHTML = html;
    
}

function moveBullets(){
    // for(var i=0; i<bullets.length; i++){
    //     // if(bullets[i].x<1000){
    //     //     bullets[i].x += 10;
    //     // }else{
    //     //     bullets[i].pop();
    //     //     drawBullets();
    //     // }
    // }
    for(var i=0; i<bullets.length; i++){
        bullets[i].x += 5;
    }
    
    for(var i=0; i<bullets.length; i++){
        if(bullets[i].x > 900){
            bullets[i] = bullets[bullets.length-1];
            bullets.pop();
        }
    }
    
}

function drawZombies(){
    var html = '';
    var zmbi='';
    for(var i=0; i<zombies.length; i++){
        html += "<div class='zombie' style='top:"+zombies[i].y+"px; left:"+zombies[i].x+"px;'></div>";
        zmbi += "<div class='zombie2' style='top:"+zombies2[i].y+"px; left:"+zombies2[i].x+"px;'></div>";
    }
    document.getElementById('zombies').innerHTML = html;
    document.getElementById('zombies2').innerHTML = zmbi;
    //console.log("spawn");
}

function moveEnemies(){
    for(var i=0;i<zombies.length;i++){
        if(zombies[i].x>320){
            zombies[i].x-=zombies[i].speed;
        }
        if(zombies2[i].x>320){
            zombies2[i].x-=zombies2[i].speed;
        }
    }
    drawZombies();
}
function zombieBulletCollision(){
    for(var i=0;i<bullets.length;i++){
        for(var j=0;j<zombies.length;j++){
            //console.log(bullets[i].x,zombies[j].x);
            if(Math.abs(zombies[j].x-bullets[i].x)<20){
                bullets[i] = bullets[bullets.length-1];
                bullets.pop();
                zombies[j].health-=10;
                if(zombies[j].health==0){
                    zombies[j] = zombies[zombies.length-1];
                    zombies.pop();
                    score+=10;
                }
                console.log(zombies[j].health)
                //console.log("Collision Detected");
            }
            // if(Math.abs(zombies2[j].x-bullets[i].x)<20){
            //     bullets[i] = bullets[bullets.length-1];
            //     bullets.pop();
            //     zombies2[j].health-=10;
            //     if(zombies2[j].health==0){
            //         zombies2.pop(zombies2[j]);
            //         score+=10;
            //     }
            //     console.log(zombies2[j].health)
            //     //console.log("Collision Detected");
            // }
        }
    }     
    document.getElementById('scorer').innerText = "Score: "+score;
} 

function zombiesComing(){
    var zombiesMp3 = new Audio("sounds/zombie-coming.mp3");
    zombiesMp3.play();
    setTimeout(zombiesGroan(),10000);
}

function zombiesGroan(){
    var zombiesGroanMp3 = new Audio("sounds/zombie-groan-m.mp3");
    zombiesGroanMp3.play();
}

function spawnBullets(){
    bullets.push({x:hero.x+7,y:hero.y-10});
    for(var i=0;i<bullets.length;i++){
        spawnBullets.push(bullets[i].x,bullets[i].y);
    }
}

function fireBullets(){
    for(var i=0; i<plants.length; i++){
        bullets.push({
            x: plants[i].x*80+300,
            y: plants[i].y*100+85
        });
    }
}
