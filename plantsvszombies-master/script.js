// Variable Declaration
var plants=[];
var counter=0;
var output='';

function choosePlants(e){
    if(plants.length<5){
        counter+=1;
        plants.push(e);
        console.log(e);
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
            }else if(selectedPlant=="plant2"){
                output += "<div class='plant2' style='top:"+(60)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant3"){
                output += "<div class='plant3' style='top:"+(60)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant4"){
                output += "<div class='plant4' style='top:"+(60)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant5"){
                output += "<div class='plant5' style='top:"+(60)+"px; left:"+(250)+"px;'></div>";
            }
            console.log(selectedPlant);
        }
    }if(counter==2){
        if(plants.length<=5){
            if(selectedPlant=="plant"){
                output += "<div class='plant' style='top:"+(160)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant2"){
                output += "<div class='plant2' style='top:"+(160)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant3"){
                output += "<div class='plant3' style='top:"+(160)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant4"){
                output += "<div class='plant4' style='top:"+(160)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant5"){
                output += "<div class='plant5' style='top:"+(160)+"px; left:"+(250)+"px;'></div>";
                
            }
            console.log(selectedPlant);
            
        }
    }if(counter==3){
        if(plants.length<=5){
            if(selectedPlant=="plant"){
                output += "<div class='plant' style='top:"+(260)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant2"){
                output += "<div class='plant2' style='top:"+(260)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant3"){
                output += "<div class='plant3' style='top:"+(260)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant4"){
                output += "<div class='plant4' style='top:"+(260)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant5"){
                output += "<div class='plant5' style='top:"+(260)+"px; left:"+(250)+"px;'></div>";
                
            }
            console.log(selectedPlant);
            
        }
    }if(counter==4){
        if(plants.length<=5){
            if(selectedPlant=="plant"){
                output += "<div class='plant' style='top:"+(360)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant2"){
                output += "<div class='plant2' style='top:"+(360)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant3"){
                output += "<div class='plant3' style='top:"+(360)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant4"){
                output += "<div class='plant4' style='top:"+(360)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant5"){
                output += "<div class='plant5' style='top:"+(360)+"px; left:"+(250)+"px;'></div>";
                
            }
            console.log(selectedPlant);
            
        }
    }if(counter==5){
        if(plants.length<=5){
            if(selectedPlant=="plant"){
                output += "<div class='plant' style='top:"+(460)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant2"){
                output += "<div class='plant2' style='top:"+(460)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant3"){
                output += "<div class='plant3' style='top:"+(460)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant4"){
                output += "<div class='plant4' style='top:"+(460)+"px; left:"+(250)+"px;'></div>";
                
            }else if(selectedPlant=="plant5"){
                output += "<div class='plant5' style='top:"+(460)+"px; left:"+(250)+"px;'></div>";
                
            }
            console.log(selectedPlant);
            
        }
    }
    document.getElementById('plants').innerHTML = output;
}