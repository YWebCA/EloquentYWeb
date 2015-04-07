// Chapter 3

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^    Defining a Function    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

//=============================// wrapper:
Exer.defining = function () {  // necessary for tests
//=============================// do not remove or alter

/******************************    DEFINING 1    ******************************/
// Use a function expression to define a function named `three`.
// That function should return the value 3.



/******************************    DEFINING 2    ******************************/
// Use a function expression to define a function named `myLog`.
// `myLog` should accept one parameter named `message`.
// `myLog` should output `message` to the console with the appropriate
//     formatting.



/******************************    DEFINING 3    ******************************/
// Use a function expression to define a function named `square`.
// `square` should accept one parameter named `number`.
// The function should square the number and both log and return the result.



//==========================//
  Exer.defining1 = three;   //
  Exer.defining2 = myLog;   //
  Exer.defining3 = square;  //
}; //=======================//

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^    Parameters and Scopes    ^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/



/*
  For Scope exercises 1-5 go through the following code and find the values for
  the variables where noted by the comments. Place the corresponding values as
  returns for the functions Exer.scope[1-5]. Hint: The comments are number in
  the order that their lines are run.
*/
Exer.scopeExample = function() {
  var foo = 2;
  var bar = 7;
  var quux = 11;

  var skip = function() {
    var foo = 5;
    console.log(foo); // Scope 1: What value of foo is logged?
    quux = foo *  bar;
    console.log(quux); // Scope 2: What value of quux is logged?
    return bar;
  };

  var scoop = function(quux) {
    console.log(quux); // Scope 4: What value of quux is logged?
  };

  var scrap = function() {
    console.log(quux); // Scope 5: What value of quux is logged?
  };

  foo = skip();
  scoop(foo); // Scope 3: What value of foo is passed to the function Scoop?
  scrap();
}

// Place answers as returns in the following functions.
Exer.scope1 = function() {
  return ;// return value for Scope 1
}

Exer.scope2 = function() {
  return ;// return value for Scope 2
}

Exer.scope3 = function() {
  return ;// return value for Scope 3
}

Exer.scope4 = function() {
  return ;// return value for Scope 4
}

Exer.scope5 = function() {
  return ;// return value for Scope 5
}



/*****************************    Nested Scope    *****************************/
// Nate

/*************************    Functions as Values    **************************/
// Nate

/*************************    Declaration Notation    *************************/
// Annalise

/****************************    The Call Stack    ****************************/
// Nate

/**************************    Optional Arguments    **************************/
// Annalise

/*******************************    Closure    ********************************/
// Nate

/******************************    Recursion    *******************************/
// Annalise

/**************************    Growing Functions    ***************************/
// Nate

/**********************    Functions and Side Effects    **********************/
// Annalise
