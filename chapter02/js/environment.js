// Provided Resources for Chapter Exercises
Exer = {};
Triangle = {};
Fizz = {};
Chess = {};

// returns a numerical value
var magicFunc = function () {
  return Math.floor( Math.random() * 1000 ) / 10;
};

// str - a string primitive
// returns a new string with all the letters of str shifted down the alphabet
//     one place
var strShift = function ( str ) {
  if (!str) return;
  var output = "";
  for ( var i = 0; i < str.length; i++ ) {
    if ( 65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90 ) {
      output += String.fromCharCode( ( str.charCodeAt(i) - 64 ) % ( 90 - 64 ) + 65 );
    } else if ( 97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 122 ) {
      output += String.fromCharCode( ( str.charCodeAt(i) - 96 ) % ( 90 - 96 ) + 97 );
    } else {
      output += str[i];
    }
  }
  return output;
};

// str1 - a string primitive
// str2 - a string primitive
// returns a new string with all the letters of str1 and str2 shuffled
//     together
var strShuffle = function ( str1, str2 ) {
  if ( !str1 || !str2 ) return;
  var output = "";
  for ( var i = 0; i < Math.max( str1.length, str2.length ); i++ ) {
    output += str1[i] ? str1[i] : "";
    output += str2[i] ? str2[i] : "";
  }
  return output;
};
