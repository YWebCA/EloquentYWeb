// Student Workspace
Chess.start = function (n) {
  if(n === 0){
    return '';
  }
  var size = n || 8;
  var output = '';
  var black = '#';

  for (var row = 0;row < size;row++){
  	for (var col = 0;col < size; col++){
  	  if((row + col) % 2 === 0){
  		  output += ' ';
  	  } else{
  		  output += black;
  	  }
    }
	 output += '\n';
	}
   return output;

  
};
// Write a program that creates a string that represents an 8×8 grid, 
// using newline characters to separate lines. 
// At each position of the grid there is either a space or a “#” character. 
// The characters should form a chess board.
// Passing this string to console.log should show something like this:
