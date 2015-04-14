// Chapter 1 Exercises

/*-----------------------------    NUMBERS    ------------------------------*/

// Numbers 1
// Make the function return a value that is a number.
Exercises.numbers1 = function() {

  return 7;

};

// Numbers 2
// Make the function return a value that is a negative number.
Exercises.numbers2 = function() {

  return -7 ;

};

// Numbers 3
// Make the function return a value that is between 4 and 5.
Exercises.numbers3 = function() {

  return 4.5 ;

};

// Numbers 4
// Make the function return a value that is between 10e4 and 10e5.
Exercises.numbers4 = function() {

  return 10.5e4 ;

};

/*---------------------------    ARITHMETIC    -----------------------------*/

// Arithmetic 1 #5
// Make the function return an expression that evaluates to 10.
Exercises.arithmetic1 = function() {

  return 2+8 ;

};

// Arithmetic 2 #6
// Fix the operators so the expression evaluates to 7.
Exercises.arithmetic2 = function() {

  return 2 * 3 + 5 - 4 ;
  
};

// Arithmetic 3 #7not done
// Add parentheses to the expression so that it evaluates to -4.
Exercises.arithmetic3 = function() {

  return -1 * (6 * 1 - 4) / 1 * 2;
  
};

// Arithmetic 4 #8
// Fix the values so the expression evaluates to 3.
Exercises.arithmetic4 = function() {

  return 3 ;
  
};

// Arithmetic 5 #9 done
Exercises.arithmetic5 = function() {

  // Evaluate this expression on paper:
  // ( 3 + -( 2 - 14 ) + 11 % 7 + 8 ) / 2

  // Return that value here:
  return 13.5 ;
  
};

/*-------------------------    SPECIAL NUMBERS    --------------------------*/

// Special Numbers 1 #10
Exercises.special1 = function () {

  // Use the console to subtract a number from Infinity.

  // Return the result here:
  return /* your answer here */ Infinity;

};

// Special Numbers 2 #11
Exercises.special2 = function () {

  // Use the console to divide a number by zero.

  // Return the result here:
  return  Infinity;

};

// Special Numbers 3 #12
Exercises.special3 = function () {

  // Use the console to subtract Infinity from Infinity.

  // Return the result here:
  return /* your answer here */ NaN;

};

// Special Numbers 4 #13
Exercises.special4 = function () {

  // Use the console to divide a number by Infinity.

  // Return the result here:
  return /* your answer here */ 0;

};

/*-----------------------------    STRINGS    ------------------------------*/

// Strings 1 #14
// Return a string enclosed in double quotes.
Exercises.strings1 = function () {

  return /* your answer here */"Hello" ;

};

// Strings 2 #15
// Return a string enclosed in single quotes.
Exercises.strings2 = function () {

  return /* your answer here */'Okay' ;

};

// Strings 3 #16
// Return multi-line string (a string that includes a new line character).
Exercises.strings3 = function () {

  return /* your answer here */ "Hello\nHey";

};

// Strings 4 #17
// Return the string<br />
//     'If a string is in single quotes, like this,
//     you can nest "double quotes".
//     But don\'t forget to escape your \backslashes\
//     so you can type "\n"!'
// (including the enclosing single quotes).
Exercises.strings4 = function () {

  var answer;
  // Uncomment the following line and type your answer:
    answer = /* your answer here */ "'If a string is in single quotes, like this,\nyou can nest \"double quotes\".\nBut don\\'t forget to escape your \\backslashes\\\nso you can type \"\\n\"!'";

  // Then check the console in spec.html to debug.
  
  return answer;

};

// Strings 5 #18
// Use concatenation to return the string
// "supercalifragilisticexpialidocious".
Exercises.strings5 = function () {

  return /* your answerhere */"super" + "cali" + "fragil" + "istic" + "expiali" + "docious" ;

};

/*-------------------------    UNARY OPERATORS    --------------------------*/

// Unary 1 #19
// Use the typeof operator to return the type of "Hello, world!"
Exercises.unary1 = function () {

  return /* your answer here */typeof "Hello, world!" ;

};

// Unary 2 #20
// Use the typeof operator to return the type of NaN.
Exercises.unary2 = function () {

  return /* your answer here */typeof NaN ;

};

// Unary 3 #21
// Use the unary minus operator to return a negative number.
Exercises.unary3 = function () {

  return /* your answer here */ -2;

};

/*-----------------------------    BOOLEANS    -----------------------------*/

// Boolean 1 #22
// Return true.
Exercises.boolean1 = function () {

  return /* your answer here */ true;

};

// Boolean 2 #23
// Return false.
Exercises.boolean2 = function () {


  return /* your answer here */false ;

};

/*---------------------------    COMPARISONS    ----------------------------*/

// Comparisons 1 #24
// Correct the comparison operators to return true.
Exercises.compare1 = function () {

  return -16 < 8 ;

};

// Comparisons 2 #25
Exercises.compare2 = function () {

  // Add one character to correct the operator such that the expression
  // returns true.
  return 2 === 2;
  
};

// Comparisons 3 #26not done
// Correct the comparison operators to return true.
Exercises.compare3 = function () {

  return "&" < "ampersand" ;
  
};

// Comparisons 4 #27
// Correct the comparison operators to return false.
Exercises.compare4 = function () {

  return true > true ;
  
};

// Comparisons 5 #28
// Correct the comparison operators to return false.
Exercises.compare5 = function () {

  return isNaN(NaN) > isNaN(NaN) ;
  
};

// Comparisons 6 #29
// Correct the comparison operators to return false.
Exercises.compare6 = function () {

  return "cake" === "lie" ;
  
};

/*--------------------------    LOGICAL OPERATORS    -----------------------*/

// Logical 1 #30
// Use NOT (!) to return false.
Exercises.logic1 = function () {

  return /* your answer here */true !== true ;

};

// Logical 2 #31
// Use NOT (!) to return true.
Exercises.logic2 = function () {

  return /* your answer here */ false !== true;

};

// Logical 3 #32 not done
// Return the result of ( true AND false ).
Exercises.logic3 = function () {

  return /* your answer here */ true && false;

};

// Logical 4 #33
// Return the result of ( true OR false ).
Exercises.logic4 = function () {

  return /* your answer here */true || false;

};

// Logical 5 #34
Exercises.logic5 = function () {

// Evaluate the expression:
// 1 + 1 == 2 && 10 * 10 > 50

  // Return the result:
  return /* your answer here */true ;

};

// Logical 6 #35
// Use the ternary (conditional) operator to
// return -4 if input is true and
// return 7 if input is false.
Exercises.logic6 = function ( input ) {

  // Remove the comments and type your answer:
  return input /* ? ifTrue : ifFalse */? -4 : 7;

};

/*-------------------------    UNDEFINED VALUES    -------------------------*/

// Undefined 1 #36
Exercises.undef1 = function () {

  // Fix the statements so that undefined is returned.
  return undefined ;

};

// Undefined 2 #37
// Return the value null.
Exercises.undef2 = function () {

  return /* your answer here */ null;

};

/*--------------------    AUTOMATIC TYPE CONVERSION    ---------------------*/

// Coercion 1 #38
// Use null in an arithmetic operation that evaluates to 0.
Exercises.coercion1 = function () {

  return /* your answer here */ 0;

};

// Coercion 2 #39
// Use arithmetic operators and the strings "-1", "2", and "3" in an
// expression that evaluates to -5.
Exercises.coercion2 = function () {

  return /* your answer here */ -5;
  
};

// Coercion 3 #40
// Use arithmetic operators and the strings "-1", "2", and "3" in an
// expression that evaluates to "-32".
Exercises.coercion3 = function () {

  return /* your answer here */ "-32";
  
};

// Coercion 4 #41
// Compare the string "hey!" and null with the not-equal-to operator (!=) in an
// expression that evaluates to true.
Exercises.coercion4 = function () {

  return /* your answer here */ true;
  
};

// Coercion 5 #42
// Compare nulll and 0 with the equal-to operator (==) in an expression that
// evaluates to false.
Exercises.coercion5 = function () {

  return /* your answer here */ null === 0;
  
};

// Coercion 6 #43
// Compare true and "true" in an expression that evaluates to false.
Exercises.coercion6 = function () {

  return /* your answer here */ true === "true";
  
};

// Coercion 7 #44
// Use 0, "0", "", false, undefined, null, NaN in an expression that evaluates
// to true.
Exercises.coercion7 = function () {

  return /* your answer here */ false !== 0;
  
};

// Coercion 8 #45
// Fix the operator to make the expression return false.
Exercises.coercion8 = function () {

  return "" > false;
  
};

/*-------------------------    SHORT-CIRCUTING    --------------------------*/

// Circuit 1 #46
// Short-circut the expression so the bad function does not get called.
Exercises.circuit1 = function () {
  return false && true && true && badFunction();
};

// Circuit 2 #47
// Short-circut the expression so the bad function does not get called.
Exercises.circuit2 = function () {
  return true || false || false || badFunction();
};
