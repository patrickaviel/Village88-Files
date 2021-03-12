// Variable Declaration
var plants=[];

var plantsInfo=[
    {damage:"",health:50,speed:0},
    {damage:"",health:50,speed:0},
    {damage:"",health:50,speed:0},
    {damage:"",health:50,speed:0},
    {damage:"",health:50,speed:0}
];

var counter=0;

var output='';

var zombies=[
    {x: 930,y: 60,speed:1},
    {x: 1100,y: 60,speed:1},
    {x: 930,y: 260,speed:1}
];

var zombies2=[
    {x: 1000,y: 150,speed:2,health:100},
    {x: 930,y: 340,speed:2,health:100},
    {x: 950,y: 450,speed:2,health:100}
    
];
var bullets=[
    {x:330,y:80},
    {x:330,y:190},
    {x:330,y:300},
    {x:330,y:410},
    {x:330,y:520}
];

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
    setInterval(drawZombies,100);
    setInterval(moveEnemies,100);
    setInterval(zombieBulletCollision,100);
    setInterval(drawBullets,100);
    setInterval(moveBullets,100);
    document.getElementById('startGame').remove();
}

function drawBullets(){
    //console.log("This is buket");
    var html = '';
    for(var i=0; i<bullets.length; i++){
        html += "<div class='bullet' style='top: "+bullets[i].y+"px; left:"+bullets[i].x+"px;' ></div>";
    }
    document.getElementById('bullets').innerHTML = html;
}

function moveBullets(){
    for(var i=0; i<bullets.length; i++){
        if(bullets[i].x<1000){
            bullets[i].x += 10;
        }else{
            bullets.pop();
            drawBullets();
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
    console.log("spawn");
}

function moveEnemies(){
    for(var i=0;i<zombies.length;i++){
        if(zombies[i].x>0){
            zombies[i].x-=zombies[i].speed;
        }
        if(zombies2[i].x>0){
            zombies2[i].x-=zombies2[i].speed;
        }
    }
    drawZombies();
}
function zombieBulletCollision(){
    if((zombies[0].x==bullets[0].x)&&(zombies[0].y==bullets[0].y)){
        console.log("x collision");
    }
    // console.log(zombies[0].x,bullets[0].x);
    // for(var i=0;i<bullets.length;i++){
    //     for(var j=0;j<zombies.length;j++){
    //         //console.log(zombies[j].x);
            // if(Math.abs(zombies[0].x-bullets[0].x)<10&&Math.abs(zombies[0].y-bullets[0].y)<10){
            //     console.log("Collision Detected");
            // }
    //         if((zombies[j].x==bullets[i].x)&&(zombies[j].y==bullets[i].y)){
    //             console.log("x collision");
    //         }
    //     }
    //     for(var k=0;k<zombies2.length; k++){
    //         // if(Math.abs(zombies2[k].x-bullets[i].x)<10&&Math.abs(zombies2[k].y-bullets[i].y)<10){
    //         //     console.log("Collision Detected");
    //         // }
    //     }
        
    // }
    
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
