// Student Workspace
Chess.start = function (input) {
var output = '';
for ( var i = 1; i <= (input * input); i++) {
 if ( isEven(i)) {
   output += " ";
 }
 if ( i < 2 ){
   if ( i % input ){
     output += "#";
   }
            
 }else if( i % input === 0 ) {
   output += "\n";
 }
        
 if ( i % (input * input) === 0 ) {
   output += "#";
 }
 if ( isOdd(i) ) {
   output += "#";
 }
}

function isEven(n) {
 return isNumber(n) && (n % 2 === 0);
}

function isOdd(n){
  return isNumber(n) && (Math.abs(n) % 2 === 1);
}
function isNumber(n){
 return n == parseFloat(n);
}
};
