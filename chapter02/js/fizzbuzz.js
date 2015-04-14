// Student Workspace
Fizz.buzz = function () {
 
  for(var i = 1; i <= 100; i++){
  
    if (i % 3 === 0 && i % 5 === 0){
  	console.log("FizzBuzz");
  }
    else if (i % 3 === 0){
  	console.log("Fizz");
  }
    else if (i % 5 === 0) {
  	console.log("Buzz");
  }
    else /* theNumber is not divisible by 3 or 5 */
	console.log(i);
}

};
