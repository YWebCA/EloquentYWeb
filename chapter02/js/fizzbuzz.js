// Student Workspace
Fizz.buzz = function () {
  var answer = [];
  for ( var i = 1; i <= 100; i++ ) {
    var output = 0;
    if ( i % 3 == 0 ) {
      output += "Fizz";
    } else {
      output += i;
    }
    if ( i % 5 == 0 ) {
      output += "Buzz";
    }
    
    answer.push( [ output ] );
    console.log(output)
  }
};
