   /*---------------------    EXPRESSIONS AND STATEMENTS    ---------------------*/

// Expressions 1
// Make the function return a nested expression (use parentheses) whose
// evaluated value is not undefined.
Exer.expressions1 = function () {

  return ("2-1");

};

/* jshint ignore:start */
// Statements 1
Exer.statements1 = function () {

  "2-1";

};
/* jshint ignore:end */

/*-----------------------------    VARIABLES    ------------------------------*/

// Variables 1
Exer.variables1 = function () {

  var number = "4 * 4";

  16;

};

// Variables 2
Exer.variables2 = function () {

  var five; 
  five = 5;
  return five;

};

// Variables 3
Exer.variables3 = function () {

  var color = "green";

  return color

};

// Variables 4
Exer.variables4 = function ( n ) {

  return n

};

// Variables 5
Exer.variables5 = function ( n ) {

  var name;
  name = n;
  return name

};

// Variables 6
Exer.variables6 = function ( stacys ) {

  var apples = 3;

  // Stacy gives you more apples
  // (the parameter `stacys`)

  return apples + stacys// Return the total number of apples you have.

};

// Variables 7
// You have a certain amount of pocket change given by the parameter provided
Exer.variables7 = function ( change ) {

  change += 0.25;
  change -= 0.1;
  change = "$" + change;
  return change;

  // Use type coercion to turn your pocket change into a string add a dollar
  // sign to the beginning.

  // Return that string.

};


/*--------------------    KEYWORDS AND RESERVED WORDS    ---------------------*/

// Keywords 1
// Uncomment the following function by removing the slash-asterisk pairs.
// Fix the function so no keywords or reserved words are improperly used.

Exer.keywords1 = function ( tree, twenty ) {
  var nautical = 2;
  var constant = twenty+2;
  tree += "2";
  var funky = nautical + constant + tree + twenty;
  return funky;
};


/*--------------------------    THE ENVIRONMENT    ---------------------------*/

// Enviroment 1
// Uncomment the line that does not return an evironment variable.
Exer.environment1 = function () {

  // return window;
  // return document;
  // return history;
   return browser;
  // return navigator;

};

/*------------------------------    FUNCTIONS    -----------------------------*/

// Functions 1
// Call setPowerLevel and pass it a value over 9000.
// Call cornTortilla and pass it the values "chicken", "queso", "bacon", and
// "lime".
Exer.functions1 = function (recombobulate, setPowerLevel, cornTortilla) {

  // Your work here

};


/*----------------------    THE CONSOLE.LOG FUNCTION    ----------------------*/

// Console 1
Exer.console1 = function () {
var x = 30;
console.log(x);
  // Output something to the console.

};

// Console 2
Exer.console2 = function ( printme ) {
console.log(printme);
  // Print the parameter `printme` to the console.

};

// Console 3
// Use the provided parameter `data` and string concatenation to output
//     The magic word is "xxxxx"
// to the console, where the `xxxxx` is the value provided in `data`. Do not
// change the value of the variable `data`.
Exer.console3 = function ( data ) {
 
 console.log("The magic word is \"" + data + "\"");

};

// Console 4
Exer.console4 = function () {
console.log("anything", "everything");
  // Use comma-separated values to output two things to the console with one
  // call.

};

// Console 5
// Do not change the value of the variable `y`.
Exer.console5 = function ( x, y ) {

  // Output the first parameter `x` to the console.

  // Make the function return the parameter `y` plus 1.
console.log(x);
return y + 1;
};

/*---------------------------    RETURN VALUES    ----------------------------*/

// Return 1
// Call and log out the result of `magicFunc`.
Exer.return1 = function () {

  magicFunc();
  console.log(magicFunc());

};

// Return 2
// Call and return the result of `magicFunc`.
Exer.return2 = function () {

  magicFunc();
  return magicFunc();

};

// Return 3
Exer.return3 = function () {

  // Call `strShift` with the argument "abczABCZ". Log the result.

  // Return that same result with "123" concatenated to the end.


var x = strShift("abczABCZ");
console.log(x);
return x + "123";
};

// Return 4
// Log the result of the string concatenation of two separate calls to
// `magicFunc`.
Exer.return4 = function () {

 var x = magicFunc();
 var y = magicFunc();
 console.log("" + x + y);

};

// Return 5
// Shift the string "abcABC123!@#" with strShift.
// Shift the string "a S d F j K l" with strShift twice.
// Return the result of these two shifted strings passed into `strShuffle` with
// the first string as the first argument and the second string as the second
// argument.
Exer.return5 = function () {

  // Declare and initialize a variable for the first string.

  // Declare and initialize a variable for the second string.

  // A return statement.
var x = strShift( "abcABC123!@#" );
var y = strShift( "a S d F j K l" );
return a = strShuffle( x, (strShift(y)) );
};

/*-------------------------    PROMPT AND CONFIRM    -------------------------*/

// Prompt 1
// Call prompt with the string and return the result.
Exer.prompt1 = function () {

var x = prompt("What is the answer to the meaning of life, the universe, and everything?", "...");
return x;
};

// Confirm 1
// Call confirm with the string and return the result.
Exer.confirm1 = function () {

var y = confirm("Imma let you finish, but Javascript is one of the best programming languages of all time...one of the best programming languages of all time!");
return y;
};

/*----------------------------    CONTROL FLOW    ----------------------------*/

// Control 1
Exer.control1 = function () {

  // Use prompt to get a number from a user

  // Print that number to the console
var x = prompt("What's your favorite number?", "...");
console.log("5");
};

// Control 2
Exer.control2 = function ( bar ) {

  // Declare a variable named `foo`.
var foo;
  // Initialize `foo` with a string.
foo = "lemonade";
console.log(foo);
  // Log `foo` to the console.

  // Concatenate the parameter `bar` to be beginning and end of `foo`
  // Save the result in a new variable called `ding`.
var ding = bar + foo + bar;
  // Call `strReverse` and pass it `ding` (as an argument).
  // Send the result to the user in a confirm window.
  // Save the user's response in a new variable called `quux`.
var y = strReverse(ding);
var quux = confirm(y);
  // Return the opposite of `quux`.
return !quux;
};

/*-----------------------    CONDITIONAL EXECUTION    ------------------------*/

// Conditional 1
// Expect `isSerious` to be a boolean
Exer.condition1 = function ( isSerious ) {
  console.log( "Welcome to Camelot!" );

  // If `isSerious` is false, output the message:
  //     On second thoughts, let's not go to Camelot. It is a silly place.
  if ( !isSerious ) {
    console.log("On second thoughts, let's not go to Camelot. It is a silly place.");
  }
};

// Conditional 2
// Expect `temperature` to be a number
Exer.condition2 = function ( temperature ) {

     
  // If temperature is greater than or equal to 70
  // Then output:
  if ( temperature >= 70 )
    console.log("Hermit crab warning!");

  // Otherwise, output
  else 
     console.log("Catch of the day: influenza, $14/lb.");

  // In either case, also print
  //    
  console.log("Thanks for visiting Pier One and Three Quarters!"); 

};

// Conditional 3
// Expect `whatDay` to be a string
Exer.condition3 = function ( whatDay ) {

  // Declare and initialize `luckyNumber`
  var luckyNumber;
  luckyNumber = 7;
  // If the length of `whatDay` is 6 or less...
  if (whatDay.length <= 6) {
    luckyNumber += "!";

  // If `whatDay` is "Mannersday"...
  }
  if (whatDay == "Mannersday") {
    luckyNumber += 4;  

    // If `whatDay` is "Foosday"...
  } else if (whatDay == "Foosday") {
    luckyNumber += 2;  

  // If `whatDay` is "Heyday"...
} else if (whatDay == "Heyday") {
luckyNumber += luckyNumber.charAt(0); 
  // Otherwise...

  // Return `luckyNumber`
}
return luckyNumber; 
};

// Conditional 4
Exer.condition4 = function () {

  // Prompt the user
  var theNumber = prompt("Enter today's date, please.");
  // If the user's input is not a number...
  if ( isNaN(theNumber) ) {
    console.log("What do you think this is, bub? Wonderland?"); 
  // Otherwise...
    // If the user's input is less than 1...
  } else if (theNumber < 1) {
    console.log("Negativelaaaaaaand~!");

    // If the user's input is greater than 31...
  } else if (theNumber > 31) {
    console.log("Are they paying you overtime for this?");   
    // If the user's input between 29 and 31, inclusive...
  } else if (theNumber >= 29 && theNumber <=31) {
    console.log("I sure hope it isn't February.");    
    // Otherwise...
  } else {
    console.log("Did you know? There are exactly " + theNumber + " ways to make today awesome!");
  }

};

/*----------------------    WHILE AND DO WHILE LOOPS    ----------------------*/

// While 1
// Turn the code in the function into a while loop.
Exer.while1 = function () {
  // console.log("10 sheep");
  //console.log("9 sheep");
  //console.log("8 sheep");
  //console.log("7 sheep");
  //console.log("6 sheep");
  //console.log("5 sheep");
  //console.log("4 sheep");
  //console.log("3 sheep");
  //console.log("2 sheep");
  //console.log("1 sheep");


  var number = 10;
  while (number >= 1) {
    console.log(number);
    number = number - 1;
  }
};

/* jshint ignore:start */
// While 2
// Recreate the code in the function without a loop
Exer.while2 = function () {
  var deadWitch = "I'm melting!";
  while(deadWitch.length > 0) {
    console.log(deadWitch);
    deadWitch = deadWitch.substr(2);
  }
  console.log("What a world!");
};
/* jshint ignore:end */

// doWhile 1
// Turn the code in the function into a single do while loop.
// Hint: 0, 1, and 2 are remainders from dividing numbers by 3.
Exer.doWhile1 = function () {
  console.log(0);
  console.log(1);
  console.log(2);
  console.log(0);
  console.log(1);
  console.log(2);
};

/* jshint ignore:start */
// doWhile 2
// Recreate the code in the function without a loop
Exer.doWhile2 = function () {
  var trainNum = 1;
  do {
    console.log("Train# " + trainNum + ": In flight!?");
  } while (trainNum++ < 7);
};
/* jshint ignore:end */

/*---------------------------    INDENTING CODE    ---------------------------*/

// Indenting 1
// Correctly indent the following code block using TWO spaces for each block
Exer.indenting1 = function() {
var firstName = "Zachery"; var lastName = "Moneypenny"; if(firstName === "Zachery") { lastName = "Johnson"; }
};

// Indenting 2
// Correctly indent the following code block using FOUR spaces for each block
Exer.indenting2 = function() {
var firstName = "Penny"; var lastName = "Moneywhistle"; if(firstName === "Penny") { lastName = "Johnson"; }
};

/*-----------------------------    FOR LOOPS    ------------------------------*/

// For 1
// Rewrite the loop as a linear sequence of statements.
Exer.for1 = function () {
    var scream = "..."; 
    console.log( scream );
    scream = "    " + scream + "AA";
    console.log( scream );
    scream = "    " + scream + "AA";
    console.log( scream );
    scream = "    " + scream + "AA";
    console.log( scream );
    scream = "    " + scream + "AA";
    console.log( scream );
    scream = "    " + scream + "AA";
   
    scream += "H!"
    console.log( scream );

  };  

/* jshint ignore:start */
// For 2
// Rewrite the repetative code with for loops.
Exer.for2 = function () {

  for (var index = 0; index < 2; index++) {
    console.log("Hi!"); 
    for (var count = 0; count < 3; count++) {
      console.log("My name is"); 
    }
    console.log("Slim Shady"); 
  }
};
/* jshint ignore:end */

// For 3
// Write a loop that counts backwards from 20 to 5 and prints the number and
// "even" if the number is even and "odd" if the number is odd.
Exer.for3 = function () {

  // Your work here

};

/*-----------------------    BREAKING OUT OF A LOOP    -----------------------*/

// Breaking 1
// Use a break to stop this infinite loop
Exer.breaking1 = function(yeng) {

  while(yeng()) {

  }

};

// Breaking 2
// Every time theatre.next() is called it returns a string, break when that string is
// "Electric Boogaloo!"
Exer.breaking2 = function(theatre) {

  while (theatre.next()) {
    console.log(theatre.current());
    if (theatre.current() === "Electric Boogaloo!") {
      break;
    }
  }

};

/*-------------------    UPDATING VARIABLES SUCCINCTLY    --------------------*/

// Succinct 1
Exer.succinct1 = function ( kiwis ) {

  // Quadruple kiwis.

  // Reduce kiwis by 2.

  // Halve kiwis.

  // Concatenate " handsomely hirsute kiwis" to kiwis.

  // Return kiwis.

};

// Succinct 2
// Edit the for loop to use the incrementation operator.
Exer.succinct2 = function () {

  for ( var hippo = 2; hippo <= 10; hippo += 1 ) {
    console.log( hippo + "! " + hippo + " fluttering hippos! Ah ah ah ah ah!" );
  }

};

// Succinct 3
// Correct the decrementation operator error.
Exer.succinct3 = function () {

  var message = "Reverse me!";
  var pointer = message.length;
  while( pointer > 0 ) {
    console.log( message.charAt( pointer-- ) );
  }

};

/*-----------------    DISPATCHING ON A VALUE WITH SWITCH    -----------------*/

// Switch 1
Exer.switch1 = function ( animal ) {

  var output = 'The ' + animal + ' goes "';

  // Create a switch that dispatches on the parameter `animal`.
  // In each case, concatenate the correct response to end of the `output`
  // string.

    // "cow": "foo"

    // "sheep": "bar"

    // "duck": "quux"

    // default: "ring-a-ding-ding-dingding-ding-a-ding-ding"

  output += '"!';
  console.log( output );

};

/*---------------------------    CAPITALIZATION    ---------------------------*/

/* jshint ignore:start */
Exer.capitalization1 = function() {

  var ZeRo = 0;
  var HAPPYCAT = new string("How did this get here! I'm not good at computer!");
  for (var Index = 0; I < HAPPYCAT.Length; Index++) {
    if (Index % 4 == ZeRo) {
      Console.Log(HAPPYCAT);
    }
  }

};
/* jshint ignore:end */

/*------------------------------    COMMENTS    ------------------------------*/
