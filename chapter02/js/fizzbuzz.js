// Student Workspace
Fizz.buzz = function () {

	var start = 1;
	var max = 100;
	var output = "";

	for (count = start; count <= max; count ++) {
		if (count % 15 === 0) {
	  		console.log("FizzBuzz");
	 	} else if (count % 3 === 0) {
	  		console.log("Fizz");
	 	} else if (count % 5 === 0) { 
	 		console.log("Buzz");
	 	} else {
	 		console.log(count);
	 	} 

	}
};