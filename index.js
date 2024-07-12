function Calculate(num1,num2){
    function operation(num1,num2,callback){
       return callback(num1,num2);

        
    }




 function addition(a,b){
    return a + b 
 }

 function multiplication(a,b){
    return a * b 
 }

 


 const result1 = operation(num1,num2,addition);
 console.log(result1);

 const result2 = operation(num1,num2,multiplication);
 console.log(result2);


 

}

Calculate(11,11)

