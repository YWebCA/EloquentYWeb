// Student Workspace
Chess.start = function ( n ) {

if ( n === 0 ) { return ''; }
var size = n || 8; 
var black = "#";
var white = ' ';
var output = "";


for ( var row = 0; row < size; row++) {
for ( var col = 0; col < size; col++) {
	if( (row + col) % 2 === 0 ) {
    output += white;
	} else {
		output += black;
	}
   }
output += '\n';
} 

console.log( output );
return output;
};
