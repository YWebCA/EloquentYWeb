// Provided Resources for Chapter Exercises

// Mock environment variables
browser = 'browser';
window.browser = browser;

Exer = {};
Triangle = {};
Fizz = {};
Chess = {};

// returns a numerical value
window.magicFunc = function () {
  var output = Math.floor( Math.random() * 9 + 1 ) * 10;
  output += Math.floor( Math.random() * 10 );
  output += Math.floor( Math.random() * 9 + 1 ) / 10;
  return output;
};

// str - a string primitive
// returns a new string with all the letters of str shifted down the alphabet
//     one place
window.strShift = function ( str ) {
  if (!str) return;
  var output = "";
  for ( var i = 0; i < str.length; i++ ) {
    if ( 65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90 ) {
      output += String.fromCharCode( ( str.charCodeAt(i) - 64 ) % ( 90 - 64 ) + 65 );
    } else if ( 97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 122 ) {
      output += String.fromCharCode( ( str.charCodeAt(i) - 96 ) % ( 122 - 96 ) + 97 );
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
window.strShuffle = function ( str1, str2 ) {
  if ( !str1 || !str2 ) return;
  var output = "";
  for ( var i = 0; i < Math.max( str1.length, str2.length ); i++ ) {
    output += str1[i] ? str1[i] : "";
    output += str2[i] ? str2[i] : "";
  }
  return output;
};

// str - a string primitive
// returns a new string that is the reverse of str
window.strReverse = function ( str ) {
  var output = "";
  for( var i = str.length - 1; i >= 0; i-- ) {
    output += str[i];
  }
  return output;
};

// stuff for comments exercises
// TODO: this is currently not used for anything
window.missiles = {
  launch: function () {
    console.log( "The only way to win thermonuclear war is not to play." );
  }
};
window.cower = function () {
  console.log( "You successfully spend one round cowering in fear." );
};
window.sheep = {
  count: 0,
  trade: function ( num, wood ) {
    if ( this.count < num) {
      console.log( "Not enough sheep to trade!" );
    } else if ( wood.count < num ) {
      console.log( "Not enough wood to trade!" );
    } else {
      this.count += num;
      wood.count -= num;
    }
  }
};
window.wood = {
  count: 0,
  trade: function ( num, sheep ) {
    if ( this.count < num) {
      console.log( "Not enough wood to trade!" );
    } else if ( sheep.count < num ) {
      console.log( "Not enough sheep to trade!" );
    } else {
      this.count += num;
      sheep.count -= num;
    }
  }
};
window.brick = {
  count: 0,
  buy: function ( num ) {
    count += num;
  }
};