/*************************    Defining a Function    **************************/
// Nate
describe("Defining a Function exercises", function() {

  beforeAll( function () {
    Exer.defining();
  } );

  describe("Defining 1", function() {
    it("should define a function named three", function () {
      expect( Exer.defining.toString() ).toMatch( /^\s*var\s+three\s*=\s*function/m );
    } );
    it("should have said function return the value 3", function () {
      expect( Exer.defining1() ).toBe( 3 );
    } );
  });

  describe("Defining 2", function() {
    it("should define a function named myLog", function () {
      expect( Exer.defining.toString() ).toMatch( /^\s*var\s+myLog\s*=\s*function/m );
    } );
    it("should have said function accept a parameter named message", function () {
      expect( Exer.defining.toString() ).toMatch( /^\s*var\s+myLog\s*=\s*function\s*\(\s*message\s*\)/m );
    } );
    it("should have said function log \"The Log Says: {message}\"", function () {
      console.log( "Defining 2:" );
      spyOn( console, 'log' ).and.callThrough();
      var message = "I'm a secret passphrase!";
      Exer.defining2( message );
      expect( console.log.calls.allArgs() ).toEqual( [ [ "The Log Says: " + message ] ] );
    } );
  });

  describe("Defining 3", function() {

    describe( "Structure", function () {
      it("should define a function named square", function () {
        expect( Exer.defining.toString() ).toMatch( /^\s*var\s*square\s*=\s*function/m );
      } );
      it("should have said function accept a parameter named number", function () {
        expect( Exer.defining.toString() ).toMatch( /^\s*var\s*square\s*=\s*function\s*\(\s*number\s*\)/m );
      } );
    } );

    describe( "Effects", function () {
      var number = 17;
      var answer;
      beforeAll( function () {
        console.log( "Defining 3:" );
        spyOn( console, 'log' ).and.callThrough();
        answer = Exer.defining3( number );
      } );
      it("should have said function return number squared", function () {
        expect( answer ).toBe( number * number );
      } );
      it("should have said function output number squared to the console", function () {
        expect( console.log.calls.allArgs() ).toEqual( [[ number * number ]] );
      } );
    } );

  });
});

/************************    Parameters and Scopes    *************************/

describe("Parameters and Scopes exercises", function() {

  describe("Parameters 1", function() {
    it("should define a function named spaceCubeDetector", function() {
      expect( Exer.parameters1.toString() ).toMatch(/var\s+spaceCubeDetector\s*=\s*function/m);
    });
    it("should have said function accept the parameters length, width, and height", function () {
      expect( Exer.parameters1.toString() ).toMatch( /var\s+spaceCubeDetector\s*=\s*function\s*\(\s*length\s*,\s*width\s*,\s*height\s*\)/m );
    });
    it("should return said function. We'll need this later, and we'd like to give it back to you.", function() {
      Exer.spaceCubeDetector = Exer.parameters1();
      expect( typeof Exer.spaceCubeDetector ).toEqual( "function" );
    });
    it("should have said function return \"SPACE CUBE DETECTED!!\" when length, width, and height are all equal", function() {
      expect( Exer.spaceCubeDetector(7,7,7) ).toEqual( "SPACE CUBE DETECTED!!" );
    });
    it("should have said function return \"THIS IS NO SPACE CUBE!\" when length, width, and height are not all equal", function() {
      expect( Exer.spaceCubeDetector(1,2,3) ).toEqual( "THIS IS NO SPACE CUBE!" );
    });
  });

  describe("Parameters 2", function() {

    // Currently does not care what order the different calls to
    // spaceCubeDetector are made in

    beforeAll(function() {
      spyOn(Exer, 'spaceCubeDetector').and.callThrough();
      spyOn(console, 'log').and.callThrough();
      Exer.parameters2(Exer.spaceCubeDetector);
    });

    it("should run the given spaceCubeDetector function with the arguments length => 3, width => 5, and height => 3.14159265359 and log the return", function() {
      expect( Exer.spaceCubeDetector ).toHaveBeenCalledWith(3, 5, 3.14159265359);
      expect( console.log ).toHaveBeenCalledWith( "THIS IS NO SPACE CUBE!" );
    });

    it("should run the given spaceCubeDetector function with the arguments length => 7, width => 7, and height => 7 and log the return", function() {
      expect( Exer.spaceCubeDetector ).toHaveBeenCalledWith(7, 7, 7);
      expect( console.log ).toHaveBeenCalledWith( "SPACE CUBE DETECTED!!" );
    } );
    it("should run the given spaceCubeDetector function with the arguments length => 1, width => 2, and height => 3 and log the return", function() {
      expect( Exer.spaceCubeDetector ).toHaveBeenCalledWith(1, 2, 3);
      expect( console.log ).toHaveBeenCalledWith( "THIS IS NO SPACE CUBE!" );
    } );
  } );
  /*
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
  */
  describe("Scope 1", function() {
    it("should have the correct answer", function() {
      expect( Exer.scope1() === 5 ).toBeTruthy();
    });
  });
  describe("Scope 2", function() {
    it("should have the correct answer", function() {
      expect( Exer.scope2() === 35 ).toBeTruthy();
    });
  });
  describe("Scope 3", function() {
    it("should have the correct answer", function() {
      expect( Exer.scope3() === 7 ).toBeTruthy();
    });
  });
  describe("Scope 4", function() {
    it("should have the correct answer", function() {
      expect( Exer.scope4() === 7 ).toBeTruthy();
    });
  });
  describe("Scope 5", function() {
    it("should have the correct answer", function() {
      expect( Exer.scope5() === 35 ).toBeTruthy();
    });
  });
});

/*****************************    Nested Scope    *****************************/
describe("Nested Scope exercises", function() {
  /*
  var foo = 2;
  var bar = 5;
  var quux = 7;

  var nest = function(foo) {

    var bar = 11;

    var finch = function(foo) {
      console.log(foo); // Nest 8: What value of foo is logged?
      bar = foo;
      quux = foo;
    };

    console.log(bar); // Nest 4: What value of bar is logged?
    console.log(quux); // Nest 5: What value of quux is logged?

    var robin = function() {
      var bar = 13;
      quux = bar;
      console.log(quux); // Nest 11: What value of quux is logged?
    };

    console.log(bar); // Nest 6: What value of bar is logged?
    console.log(quux); // Nest 7: What value of quux is logged?

    var batman = function() {
      foo = 0;
      bar = 0;
      quux = 0;
      return "I AM THE NIGHT!!";
    };

    finch(17);

    console.log(bar); // Nest 9: What value of bar is logged?
    console.log(quux); // Nest 10: What value of quux is logged?

    robin();

    console.log(quux); // Nest 12: What value of quux is logged?

    if (batman()) {
      console.log(foo); // Nest 13: What value of foo is logged?
      console.log(bar); // Nest 14: What value of bar is logged?
      console.log(quux); // Nest 15: What value of quux is logged?
    }
  };

  console.log(foo); // Nest 1: What value of foo is logged?
  console.log(bar); // Nest 2: What value of bar is logged?
  console.log(quux); // Nest 3: What value of quux is logged?

  nest(19);

  console.log(foo); // Nest 16: What value of foo is logged?
  console.log(bar); // Nest 17: What value of bar is logged?
  console.log(quux); // Nest 18: What value of quux is logged?
  */
  describe("Nest 1", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest1() === 2).toBeTruthy();
    });
  });
  describe("Nest 2", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest2() === 5).toBeTruthy();
    });
  });
  describe("Nest 3", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest3() === 7).toBeTruthy();
    });
  });
  describe("Nest 4", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest4() === 11).toBeTruthy();
    });
  });
  describe("Nest 5", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest5() === 7).toBeTruthy();
    });
  });
  describe("Nest 6", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest6() === 11).toBeTruthy();
    });
  });
  describe("Nest 7", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest7() === 7).toBeTruthy();
    });
  });
  describe("Nest 8", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest8() === 17).toBeTruthy();
    });
  });
  describe("Nest 9", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest9() === 17).toBeTruthy();
    });
  });
  describe("Nest 10", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest10() === 17).toBeTruthy();
    });
  });
  describe("Nest 11", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest11() === 13).toBeTruthy();
    });
  });
  describe("Nest 12", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest12() === 13).toBeTruthy();
    });
  });
  describe("Nest 13", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest13() === 0).toBeTruthy();
    });
  });
  describe("Nest 14", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest14() === 0).toBeTruthy();
    });
  });
  describe("Nest 15", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest15() === 0).toBeTruthy();
    });
  });
  describe("Nest 16", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest16() === 2).toBeTruthy();
    });
  });
  describe("Nest 17", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest17() === 5).toBeTruthy();
    });
  });
  describe("Nest 18", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest18() === 0).toBeTruthy();
    });
  });
});

/*************************    Functions as Values    **************************/
// Nate
describe("Functions as Values exercises", function() {
  describe("Values 1", function() {
    it("given spaceCubeDetector and area should assign spaceCubeDetector to area");
    it("given spaceCubeDetector and area should call each once after the assignment");
    it("given spaceCubeDetector and area should call to the function value of spaceCubeDetector twice after the assignment");
    it("given spaceCubeDetector and area should return the new area");
  });
  describe("Values 2", function() {
    it("given area should assign a new function to area that returns the product of length, width, and height");
    it("given area should return the new area");
  });
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
