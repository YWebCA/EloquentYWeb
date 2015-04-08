// Student Workspace
 
    for ( var i = 1; i <= 100; i++ ) {
      var resultForI = "";
      if ( i % 3 === 0 ) {
        resultForI += "Fizz";
      } else if ( i % 5 === 0 ) {
        resultForI += "Buzz";
      }else {
     	resultForI = i; 
     } 
     console.log(resultForI);

    }


Fizz.buzz = function () {
	for ( var i = 1; i <= 100; i++ ) {
    if (i % 15 === 0){
      console.log("FizzBuzz");

    }else if ( i % 3 === 0 ) {
      console.log("Fizz");
    } else if ( i % 5 === 0 ) {
      console.log("Buzz");
    }else {
      console.log(i); 
    }
  }	
};
