//EXAMPLE 1
function sumAll(a, b){
    var c =a+b;
    return c;
}
//EXAMPLE 2
function abc(a,b,c,d,e){
    var x = a+b;
    var y = c+2;
    var z = d-e;
    return x-y+z;
}
abc(3,5,10,3,7);
//EXAMPLE 3
function abc(a,b,c,d,e){
    for(var i=0; i<a; i++){
        b += i;
    } 
    return b+d;
}
 abc(1,2,3,4,5)
 //EXAMPLE 4
 function compare(a,b){
    if(a<b){
        return b;
    }else{ 
        return a;
    }
}
  compare(2,3);
 


//Print 1 to x
  function printUpTo(x){
    if(x<1){
    return false
    }else{
      for(var i=1;i<=x;i++){
        console.log(i);
      }
    }
  }
          
  printUpTo(1000); // should print all the integers from 1 to 1000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false


  //PrintSum
  function printSum(x){
    var sum = 0;
    for(var i=0;i<=x;i++){
      sum = sum+i;
    }
    return sum
  }
  y = printSum(255)
  console.log(y)

  //PrintSumArray
  function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum = sum + x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) );

  //Bonus: LargestElement
  function highestNumberArray(x){
    var highestNumber=0;
    for(var i=0; i<x.length; i++) {
      if(x[i]>highestNumber){
        highestNumber=x[i];
      }
    }
    return highestNumber;
  }
  
  console.log(highestNumberArray([1,30,5,7]));






//1) Analyze an array’s values and return the average of its values.
  function printAverage(x){
    sum = 0;
    for(var i=0;i<x.length;i++){
      sum=sum+x[i];
    }
    return sum/x.length;
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([2,5,8]);
 console.log(y); // should log 5

 //2) Create an array with all the odd integers between 1 and 255 (inclusive)
 function returnOddArray(){
    var temp = [];
    for(var i=0;i<=255;i++){
      if(i%2==1){
        temp.push(i);
      }
    }
   return temp;
 }
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]

 //3) Square each value in a given array, returning that same array with changed values.
 function squareValue(x){
    for(var i=0;i<x.length;i++){
      x[i]=x[i]*x[i];
    }
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]



//1.Given an array and a value Y, count and print the number of array values greater than Y.
 function HighValueArray(x,y){
    var highestValue = y;
    var temp = [];
    for(var i=0;i<x.length;i++){
      if(x[i]>y){
        temp.push(x[i]);
      }
    }
    return temp;
  }
  y=HighValueArray([5,10,55,20],5);
  console.log(y);

//2.Given an array, print the max, min and average values for that array.
  function MinMaxAve(arr){
    var min=arr[0];
    var max=arr[0];
    var aveArr =0;
    for(var i=0;i<arr.length;i++){
      aveArr = aveArr+arr[i];
      
      if(max<arr[i]){
        max = arr[i];
      }
      if(min>arr[i]){
        min=arr[i];
      }
      
    }
    console.log(min);
    console.log(max);
    console.log(aveArr/arr.length);
  }

//3.Given an array of numbers, create a function that returns a new array where negative values were replaced 
//with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function replaceNegative(arr){
    for(var i=0;i<arr.length;i++){
      if(arr[i]<0){
        arr[i] = "Dojo";
      }
    }
    return arr;
  }

  //4.Given array, and indices start and end, remove values in that index range, working in-place (hence shortening the array).  
  //For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
  function simplifyArray(arr,x,y){
    arr.splice(x,y-1);
   return arr;
 }

 //Algorithm VI

 //1.Return the given array, after setting any negative values to zero. 
 //For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].
 function removeNegative(arr){
    for(var i=0;i<arr.length;i++){
      if(arr[i]<0){
        arr[i]=0;
      }
    }
   return arr;
 }

 //2.Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end. 
 //For example moveForward( [1,2,3]) should return [2,3,0].
 function removeFirstValue(arr){
    arr.shift();
    arr.push(0);
    return arr;
  }

  //3.Create a function that changes a given array to list each original element twice, retaining original order. 
  //Have the function return the new array. For example repeatTwice( [4,”Ulysses”, 42, false] ) 
  //should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
  function repeatArray(arr){
    var temp=[];
    for(var i=0;i<arr.length;i++){
      temp.push(arr[i]);
      temp.push(arr[i]);
    }
    return temp;
  }