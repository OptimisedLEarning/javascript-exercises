const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
       return a-b;
};

const sum = function(arr) {
  return arr.reduce((sum,element)=>element+sum ,0)
 
};

const multiply = function (arr) {
   return arr.reduce((mul,element)=> mul * element )
};

const power = function(pwer,num) {
   return pwer ** num
};

const factorial = function fact (num) {
   
       if (num == 0) {  
       return 1;  
       }  
       else {  
       return num * fact( num - 1 );  
       }  
       
       };

// Do not edit below this line
module.exports = {
 add,
 subtract,
 sum,
 multiply,
 power,
 factorial
};
