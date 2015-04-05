/*************************    Defining a Function    **************************/
// Nate
describe("Defining a Function exercises", function() {
  describe("Defining 1", function() {
    it("should define a function named three");
    it("should have said function return the value 3");
  });
  describe("Defining 2", function() {
    it("should define a function named myLog");
    it("should have said function accept a parameter named message");
    it("should have said function log \"The Log Says: {message}\"");
  });
  describe("Defining 3", function() {
    it("should define a function named square");
    it("should have said function accept a parameter named number")
    it("should have said function return number squared");
  });
});

/************************    Parameters and Scopes    *************************/
// Nate
describe("Parameters and Scopes exercises", function() {
  describe("Parameters 1", function() {
    it("should define a function named spaceCubeDetector");
    it("should have said function accept the parameters length, width, and height");
    it("should have said function return \"SPACE CUBE DETECTED!!\" when length, width, and height are all equal");
    it("should have said function return \"THIS IS NO SPACE CUBE!\" when length, width, and height are not all equal");
    it("should return said function. We'll need this later, and we'd like to give it back to you.");
  });
  describe("Parameters 2" function() {
    it("should run the given spaceCubeDetector function 3 times");
    it("should run the given spaceCubeDetector function with the arguments length => 3, width => 5, and height => 3.14159265359 and log the return");
    it("should run the given spaceCubeDetector function with the arguments length => 7, width => 7, and height => 7 and log the return");
    it("should run the given spaceCubeDetector function with the arguments length => 2, width => 3, and height => 5 and log the return");
  });
  /*
  var foo = 2;
  var bar = 7;
  var quux = 11;

  var skip = function() {
    var foo = 5;
    console.log("Scope 1: " + foo); // Scope 1: What value of foo is logged?
    quux = foo *  bar;
    console.log("Scope 2: " + quux); // Scope 2: What value of quux is logged?
    return bar;
  };

  var scoop = function(quux) {
    console.log("Scope 4: " + quux); // Scope 4: What value of quux is logged?
  };

  var scrap = function() {
    console.log("Scope 5: " + quux); // Scope 5: What value of quux is logged?
  };

  foo = skip();
  scoop(foo); // Scope 3: What value of foo is passed to the function Scoop?
  scrap();
  */
  describe("Scope 1" function() {
    it("should have the correct answer" function() {
      expect( Exer.scope1() === 5).toBeTruthy();
    });
  });
  describe("Scope 2" function() {
    it("should have the correct answer" function() {
      expect( Exer.scope2() === 35).toBeTruthy();
    });
  });
  describe("Scope 3" function() {
    it("should have the correct answer" function() {
      expect( Exer.scope3() === 7).toBeTruthy();
    });
  });
  describe("Scope 4" function() {
    it("should have the correct answer" function() {
      expect( Exer.scope4() === 35).toBeTruthy();
    });
  });
  describe("Scope 5" function() {
    it("should have the correct answer" function() {
      expect( Exer.scope5() === 7).toBeTruthy();
    });
  });
});

/*****************************    Nested Scope    *****************************/
// Annalise
describe("Nested Scope exercises", function() {
  it("should test a thing");
});

/*************************    Functions as Values    **************************/
// Nate
describe("Functions as Values exercises", function() {
  it("should test a thing");
});

/*************************    Declaration Notation    *************************/
// Annalise
describe("DeclarationNotation exercises", function() {
  it("should test a thing");
});

/****************************    The Call Stack    ****************************/
// Nate
describe("The Call Stack exercises", function() {
  it("should test a thing");
});

/**************************    Optional Arguments    **************************/
// Annalise
describe("Optional Arguments exercises", function() {
  it("should test a thing");
});

/*******************************    Closure    ********************************/
// Nate
describe("Closure exercises", function() {
  it("should test a thing");
});

/******************************    Recursion    *******************************/
// Annalise
describe("Recursion exercises", function() {
  it("should test a thing");
});

/**************************    Growing Functions    ***************************/
// Nate
describe("Growing Functions exercises", function() {
  it("should test a thing");
});

/**********************    Functions and Side Effects    **********************/
// Annalise
describe("Functions and Side Effects exercises", function() {
  it("should test a thing");
});
