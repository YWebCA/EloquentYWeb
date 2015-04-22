// Student Workspace
Chess.start = function (size){
	if( size === 0) return ""
size = size || 8;
var white = " "
var black = "#"
var output= ""
for( var row = 0; row < size; row ++){

	for(var column = 0; column <  size; column ++){
		if((column+row) %2 === 0) {
			output += white; 
		} else {
            output += black; 
		}
  
	}
 output += "\n"
}
return output;
  }