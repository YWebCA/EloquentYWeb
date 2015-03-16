// Student Workspace
Chess.start = function ( n ) {
  var size;
  if ( n !== 0 ) {
    size = n || 8;
  } else size = 0;
  var output = "";
  for ( var i = 0; i < size; i++ ) {
    for ( var j = 0; j < size; j++ ) {
      if ( (i+j) % 2 == 0 ) {
        output += ' ';
      } else {
        output += '#';
      }
    }
    output += '\n';
  }
  return output;
};
