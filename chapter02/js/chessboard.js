
Chess.start = function (n) {
	if(n === 0){
		return '';
	}
	var size = n || 8;
	var output = "";
	var black = "#";
	
	for(var row = 0; row < size; row++){
		for (var col = 0; col < size; col++){
			if ((row + col) % 2 ===0){
				output += " ";
			}
			else{
				output += black;
				}
			}
			output += "\n";
		}
		return output;
};		
