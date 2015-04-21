describe("Expressions and Statements exercises", function() {

  describe("Expressions 1", function() {

    it("should return an expression that is not undefined", function() {
      expect( Exer.expressions1() ).not.toBe(undefined);
    });

    it("should return an expression with parentheses in it", function() {
      expect( Exer.expressions1.toString().match(/^\s*return.*;/mg)[0].match(/(?:\(|\)).+(?:\(|\))/g) ).not.toBeNull();
    });

  });

  describe("Statements 1", function() {

    beforeAll(function() {
      this.work = Exer.statements1.toString().match(/^.+?$/mg);  // break into lines
      for ( var i = 0; i < this.work.length; ) {
        if ( this.work[i].match(/^\s*\/\//) || this.work[i].match(/^\s*$/) ) {
          this.work.splice(i, 1);
        } else { i++; }
      }
      this.work = this.work.slice(1, this.work.length - 1);  // remove function expression wrapper
    });

    it("should contain a single statement", function() {
      expect( this.work ).not.toBe(null);           // there should be lines left
      expect( this.work.length ).toBe(1);           // in fact, one line
      this.work = this.work[0].match(/\s*(.*);/g);  // find statements
      expect( this.work ).not.toBe(null);
    });

    it("should evaluate to something other than undefined", function() {
      expect( eval(this.work[0].match(/\s*(.*);/)[1]) ).not.toBeUndefined();
    });

  });
});

describe("Variables exercises", function() {

  describe("Variables 1", function() {
    it("should declare a variable", function() {
      expect( Exer.variables1.toString().match(/^\s*var\s.*;/mg) ).not.toBeNull();
    });
  });

  describe("Variables 2", function() {

    beforeAll(function() {
      this.dec = Exer.variables2.toString().match(/^\s*var\s*(.*)\s*;/m);
      this.vari2 = this.dec[1];
    });

    it("should declare a variable", function() {
      expect( this.dec ).not.toBeNull();
    });

    it("should make an assignment", function() {
      var re = new RegExp('^\\s*' + this.vari2 + '\\s*=.*;', 'm');
      expect( Exer.variables2.toString().match(re) ).not.toBeNull();
    });

    it("should return the variable", function() {
      var re = new RegExp('^\\s*return\\s' + this.vari2 + '\\s*;', 'm');
      expect( Exer.variables2.toString().match(re) ).not.toBeNull();
    });

    it("should return a number", function() {
      expect( typeof Exer.variables2() ).toBe('number');
    });

  });

  describe("Variables 3", function() {

    describe("should contain a statement that", function() {

      it("should declare a variable", function() {
        expect( Exer.variables3.toString().match(/\s*var\s*.*;/m) ).not.toBeNull();
      });

      it("should initialize it to a string", function() {
        expect( Exer.variables3.toString().match(/\s*var\s*.*=.*(?:'|").*(?:'|")\s*;/m) ).not.toBeNull();
      });

      it("should return a string", function() {
        expect( typeof Exer.variables3() ).toBe('string');
      });

    });

  });

  describe("Variables 4", function() {

    it("should return the parameter", function() {
      expect( Exer.variables4(0) ).toBe(0);
    });

    it("should return the parameter", function() {
      expect( Exer.variables4(3) ).toBe(3);
    });

    it("should return the parameter", function() {
      expect( Exer.variables4(false) ).toBe(false);
    });

    it("should return the parameter", function() {
      expect( Exer.variables4("Hello, world!") ).toBe("Hello, world!");
    });

    it("should return the parameter", function() {
      expect( Exer.variables4(undefined) ).toBe(undefined);
    });

  });

  describe("Variables 5", function() {

    it("should return the parameter", function() {
      expect( Exer.variables5(0) ).toBe(0);
    });

    it("should return the parameter", function() {
      expect( Exer.variables5(3) ).toBe(3);
    });

    it("should return the parameter", function() {
      expect( Exer.variables5(false) ).toBe(false);
    });

    it("should return the parameter", function() {
      expect( Exer.variables5("Hello, world!") ).toBe("Hello, world!");
    });

    it("should return the parameter", function() {
      expect( Exer.variables5(undefined) ).toBe(undefined);
    });

    it("should not return the parameter directly", function() {
      expect( Exer.variables5.toString().match(/^\s*return\s*n\s*;/m) ).toBeNull();
    });

  });

  describe("Variables 6", function() {

    it("should return 3 plus Stacy's number", function() {
      expect( Exer.variables6(0) ).toBe(3);
    });

    it("should return 3 plus Stacy's number", function() {
      expect( Exer.variables6(5) ).toBe(8);
    });

    it("should return 3 plus Stacy's number", function() {
      expect( Exer.variables6(Infinity) ).toBe(Infinity);
    });

  });

  describe("Variables 7", function() {

    it("should return a string representing the change left when starting with $1.00", function() {
      expect( Exer.variables7(1) ).toBe('$1.15');
    });

    it("should return a string representing the change left when starting with $3.50", function() {
      expect( Exer.variables7(3.50) ).toBe('$3.65');
    });

    it("should return a string representing the change left when starting with $0.01", function() {
      expect( Exer.variables7(0.01) ).toBe('$0.16');
    });

  });

});

describe("Keywords and Reserved Words exercises", function() {

  describe("Keywords 1", function() {

    beforeAll( function() {
      this.helper = function (tue, two) {
        var newt = 2;
        var aconst = two+2;
        tue += "2";
        var func = newt + aconst + tue + two;
        return func;
      };
    });

    it("should return the string '5121'", function() {
      expect( Exer.keywords1(1,1) ).toBe( this.helper(1,1) );
    });

    it("should return the string '332-1'", function() {
      expect( Exer.keywords1(3,-1) ).toBe( this.helper(3,-1) );
    });

    it("should return the string '9025'", function() {
      expect( Exer.keywords1(0,5) ).toBe( this.helper(0,5) );
    });

  });

});

describe("The environment exercises", function() {
  describe("Evironment 1", function(){
    it("should return the variable that is not an environment variable", function() {
      window.browser = 'browser';
      var result = Exer.environment1();
      expect( result ).toEqual( "browser" );
    });
  });
});

describe("the functions exercises", function() {
  describe("Function 1", function() {

    beforeAll(function(){
      this.recombobulate = jasmine.createSpy('recombobulate');
      this.setPowerLevel = jasmine.createSpy('setPowerLevel');
      this.cornTortilla = jasmine.createSpy('cornTortilla');
      Exer.functions1(this.recombobulate, this.setPowerLevel, this.cornTortilla);
    });

    it("recombobulate should be called with no arguments", function () {
      expect(this.recombobulate).toHaveBeenCalled();
      expect(this.recombobulate.calls.count()).toEqual(1);
      expect(this.recombobulate.calls.argsFor(0).length).toEqual(0);
    });

    it("setPowerLevel should be called with a single argument that is greater than 9000", function () {
      expect(this.setPowerLevel).toHaveBeenCalled();
      expect(this.setPowerLevel.calls.count()).toEqual(1);
      expect(this.setPowerLevel.calls.argsFor(0)[0]).toBeGreaterThan(9000);
    });

    it("cornTortilla should be called with the arguments \"chicken\", \"queso\", \"bacon\", and \"lime\"", function () {
      expect(this.cornTortilla).toHaveBeenCalled();
      expect(this.cornTortilla.calls.count()).toEqual(1);
      expect(this.cornTortilla.calls.argsFor(0)).toEqual(["chicken", "queso", "bacon", "lime"]);
    });
  });
});

describe("The console.log Function exercises", function() {

  describe("Console 1", function() {

    it("should make one call to the console", function() {
      spyOn(console, 'log');
      Exer.console1();
      expect( console.log.calls.count() ).toEqual(1);
    });

    it("should not return anything", function() {
      expect( Exer.console1() ).toBe(undefined);
    });

  });

  describe("Console 2", function() {

    describe("structure", function () {

      beforeEach(function () {
        spyOn(console, 'log');
      });

      it("should make one call to the console", function() {
        Exer.console2();
        expect( console.log.calls.count() ).toEqual(1);
      });

      it("should not return anything", function() {
        expect( Exer.console2() ).toBe(undefined);
      });

    });

    describe("with parameters", function () {

      beforeEach(function() {
        console.log( "Console 2:" );
        spyOn(console, 'log').and.callThrough();
      });

      it("should print the parameter", function() {
        var test = 3;
        Exer.console2(test);
        expect( console.log.calls.allArgs() ).toEqual([[test]]);
      });

      it("should print the parameter", function() {
        var test = "Hello, world!";
        Exer.console2(test);
        expect( console.log.calls.allArgs() ).toEqual([[test]]);
      });

      it("should print the parameter", function() {
        var test = {
          foo: "bar",
          baz: "bat"
        };
        Exer.console2(test);
        expect( console.log.calls.allArgs() ).toEqual([[test]]);
      });

    });

  });

  describe("Console 3", function () {

    describe("structure", function () {

      beforeEach(function() {
        spyOn(console, 'log');
      });

      it("should make one call to the console", function () {
        Exer.console3();
        expect( console.log.calls.count() ).toEqual(1);
      });

      it("should not return anything", function () {
        expect( Exer.console3() ).toBe(undefined);
      });

    });

    describe("with parameters", function() {

      beforeEach(function () {
        console.log( "Console 3:" );
        spyOn(console, 'log').and.callThrough();
      });

      it("should print 'The magic word is \"Abracadabra!\"'", function () {
        var test = "Abracadabra!";
        Exer.console3(test);
        test = 'The magic word is "' + test + '"';
        expect( console.log.calls.allArgs() ).toEqual([[test]]);
      });

      it("should print 'The magic word is \"Shazam!\"'", function () {
        var test = "Shazam!";
        Exer.console3(test);
        test = 'The magic word is "' + test + '"';
        expect( console.log.calls.allArgs() ).toEqual([[test]]);
      });

      it("should print 'The magic word is \"Please\"'", function () {
        var test = "Please";
        Exer.console3(test);
        test = 'The magic word is "' + test + '"';
        expect( console.log.calls.allArgs() ).toEqual([[test]]);
      });

    });

  });

  describe("Console 4", function() {

    it("should make one call to the console", function () {
      spyOn(console, 'log');
      Exer.console4();
      expect( console.log.calls.count() ).toEqual(1);
    });

    it("should provide two parameters", function () {
      console.log( "Console 4:" );
      spyOn(console, 'log').and.callThrough();
      Exer.console4();
      expect( console.log.calls.allArgs()[0].length ).toEqual(2);
    });

  });

  describe("Console 5", function() {
    it("should make one call to the console", function () {
      spyOn(console, 'log');
      Exer.console5();
      expect( console.log.calls.count() ).toEqual(1);
    });

    describe("outputs", function () {
      beforeAll(function() {
        this.test1 = "secret passphrase";
        this.test2 = -6;
        console.log( "Console 5:" );
        spyOn(console, 'log').and.callThrough();
      });

      it("should return the second parameter plus 1", function () {
        expect( Exer.console5(this.test1, this.test2) ).toEqual( this.test2+1 );
      });

      it("should print the first parameter", function () {
        expect( console.log.calls.allArgs() ).toEqual([[this.test1]]);
      });

    });

  });

});

describe("Return Values exercises", function () {

  describe("Return 1", function () {

    beforeAll(function () {
      console.log( "Return 1:" );
      spyOn( window, 'magicFunc' ).and.callThrough();
      spyOn( console, 'log' ).and.callThrough();
      Exer.return1();
    });

    it("should call magicFunc", function () {
      expect( magicFunc ).toHaveBeenCalled();
    });

    it("should call console.log", function () {
      expect( console.log ).toHaveBeenCalled();
    });

    it( "should log a number", function () {
      expect( console.log.calls.allArgs().length ).toBe( 1 );
      expect( console.log.calls.allArgs()[0].length ).toBe( 1 );
      expect( typeof console.log.calls.allArgs()[0][0] ).toBe( 'number' );
    } );

  });

  describe("Return 2", function () {

    it("should call magicFunc", function () {
      spyOn( window, 'magicFunc' );
      Exer.return2();
      expect( magicFunc ).toHaveBeenCalled();
    });

    it("should return a number", function () {
      expect( typeof Exer.return2() ).toBe( 'number' );
    });

    it( "should return a typical output of magicFunc", function () {
      expect( Exer.return2().toString().match(/^[1-9]\d\.[1-9]$/) ).not.toBeNull();
    } );

  });

  describe("Return 3", function () {

    var foo;

    beforeAll(function () {
      console.log( "Return 3:" );
      spyOn( window, 'strShift' ).and.callThrough();
      spyOn( console, 'log' ).and.callThrough();
      foo = Exer.return3();
    });

    it("should call strShift", function () {
      expect( strShift ).toHaveBeenCalled();
    });

    it("should call strShift with argument abczABCZ", function () {
      expect( strShift.calls.argsFor(0) ).toEqual(["abczABCZ"]);
    });

    it('should log "bcdaBCDA"', function () {
      expect( console.log.calls.allArgs() ).toEqual([["bcdaBCDA"]]);
    });

    it('should return "bcdaBCDA123"', function () {
      expect( foo ).toEqual( "bcdaBCDA123" );
    });

    it("should call strShift only once", function () {
      expect( strShift.calls.count() ).toEqual(1);
    });

  });

  describe( "Return 4", function () {

    beforeAll( function () {
      console.log( "Return 4:" );
      spyOn( window, 'magicFunc' ).and.callThrough();
      spyOn( console, 'log' ).and.callThrough();
      Exer.return4();
    } );

    it( "should call magicFunc twice", function () {
      expect( magicFunc.calls.count() ).toEqual(2);
    } );

    it( "should call console.log once", function () {
      expect( console.log.calls.count() ).toEqual(1);
    } );

    it( "should log a string in the format of ##.###.#", function () {
      expect( console.log.calls.argsFor(0)[0].match(/^[1-9]\d\.[1-9]{2}\d\.[1-9]$/) ).not.toBeNull();
    } );

  } );

  describe( "Return 5", function () {

    var foo;

    beforeAll( function () {
      spyOn( window, 'strShift' ).and.callThrough();
      spyOn( window, 'strShuffle' ).and.callThrough();
      foo = Exer.return5();
    } );

    it( "should call strShift three times total", function () {
      expect( strShift.calls.count() ).toEqual(3);
    } );

    it( "should call strShuffle once", function () {
      expect( strShuffle.calls.count() ).toEqual(1);
    } );

    it( "should return the correct result", function () {
      expect( foo ).toEqual("bcc dUB CfD 1H2 3l! @M# n");
    } );

    it( "should contain three statements", function () {
      var work = Exer.return5.toString();
      work = work.match(/^.+?$/mg);  // break into lines
      var i = 0;
      while ( i < work.length ) {
        if ( work[i].match(/^\s*\/\//) ) {  // remove comments
          work.splice( i, 1 );
        } else { i++; }
      }
      i = 0;
      while ( i < work.length ) {
        if ( work[i].match(/^.+;\s*(?:\/\/.*)?$/) === null ) {  // remove non-statements
          work.splice( i, 1 );
        } else { i++; }
      }
      expect( work.length ).toEqual(3);
    } );

  } );

});

describe("Prompt and Confirm exercises", function () {
  describe("Prompt 1", function () {
    it("should prompt for user input and return it", function () {
      spyOn(window, 'prompt').and.returnValue('42');
      result = Exer.prompt1();
      expect( window.prompt.calls.argsFor(0)[0] ).toEqual("What is the answer to the meaning of life, the universe, and everything?");
      expect( result ).toEqual( '42' );
    });
  });

  describe("Confirm 1", function () {
    it("should get user confirmation and return it", function () {
      spyOn(window, 'confirm').and.returnValue(true);
      result = Exer.confirm1();
      expect( window.confirm.calls.argsFor(0)[0] ).toEqual("Imma let you finish, but Javascript is one of the best programming languages of all time...one of the best programming languages of all time!");
      expect( result ).toEqual( true );
    });
  });
});

describe("Control Flow exercises", function() {

  describe("Control 1", function() {

    it("should ask the user for a number and then log it to the console", function() {
      spyOn(window, 'prompt').and.returnValue('5');
      spyOn(console, 'log');
      Exer.control1();
      expect(window.prompt).toHaveBeenCalled();
      expect( console.log.calls.allArgs()[0][0].toString() ).toBe('5');
    });

  });

  describe( "Control 2", function () {

    describe( 'given "hello"', function () {
      var foo, bar;
      beforeAll( function () {
        console.log( "Control 2:" );
        spyOn( console, 'log' ).and.callThrough();
        spyOn( window, 'strReverse' ).and.callThrough();
        spyOn( window, 'confirm' );
        bar = "hello";
        Exer.control2(bar);
        foo = console.log.calls.argsFor(0)[0];
      } );
      it( "should call strReverse with the proper arguments", function () {
        expect( strReverse ).toHaveBeenCalledWith( bar + foo + bar );
      } );
      it( "should call confirm with the proper arguments", function () {
        expect( confirm ).toHaveBeenCalledWith( strReverse(bar+foo+bar) );
      } );
    } );

    it( "should return true when the user cancels", function () {
      spyOn( window, 'confirm' ).and.returnValue(true);
      expect( Exer.control2() ).toBe(false);
    } );
    it( "should return false when the user confirms", function () {
      spyOn( window, 'confirm' ).and.returnValue(false);
      expect( Exer.control2() ).toBe(true);
    } );

  } );

});

describe( "Conditional Execution exercises", function () {

  describe( "Conditional 1", function () {

    describe( "if isSerious is true", function () {

      beforeAll( function () {
        console.log( "Conditional 1:" );
        spyOn( console, 'log' );
        Exer.condition1( true );
      } );

      it( "should call console.log once", function () {
        expect( console.log.calls.count() ).toBe(1);
      } );

      it( "should call console.log with the correct arguments", function () {
        expect( console.log.calls.allArgs() ).toEqual( [["Welcome to Camelot!"]] );
      } );

    } );

    describe( "if isSerious is false", function () {

      beforeAll( function () {
        spyOn( console, 'log' );
        Exer.condition1( false );
      } );

      it( "should call console.log twice", function () {
        expect( console.log.calls.count() ).toBe(2);
      } );

      it( "should also output King Arthur's quote", function () {
        var foo = [
          ["Welcome to Camelot!"],
          ["On second thoughts, let's not go to Camelot. It is a silly place."]
        ];
        expect( console.log.calls.allArgs() ).toEqual( foo );
      } );

    } );

    it( "should not return anything", function () {
      expect( Exer.condition1( false ) ).toBeUndefined();
    } );

  } );

  describe( "Conditional 2", function () {

    it( "should not return anything", function () {
      expect( Exer.condition2( 0 ) ).toBeUndefined();
    } );

    describe( "if temperature is greater than or equal to 70", function () {

      var foo = [
        ["Hermit crab warning!"],
        ["Thanks for visiting Pier One and Three Quarters!"]
      ];
      beforeEach( function () {
        spyOn( console, 'log' );
      } );

      it( "should output the fun phrases for 70 degress", function () {
        Exer.condition2( 70 );
        expect( console.log.calls.allArgs() ).toEqual( foo );
      } );

      it( "should output the fun phrases for 100 degress", function () {
        Exer.condition2( 100 );
        expect( console.log.calls.allArgs() ).toEqual( foo );
      } );

    } );

    describe( "if temperature is less than 70", function () {

      var bar = [
        ["Catch of the day: influenza, $14/lb."],
        ["Thanks for visiting Pier One and Three Quarters!"]
      ];
      beforeEach( function () {
        spyOn( console, 'log' );
      } );

      it( "should output the other fun phrases for 69.9 degrees", function () {
        Exer.condition2( 69.9 );
        expect( console.log.calls.allArgs() ).toEqual( bar );
      } );

      it( "should output the other fun phrases for -40 degrees", function () {
        Exer.condition2( -40 );
        expect( console.log.calls.allArgs() ).toEqual( bar );
      } );

    } );

  } );

  describe( "Conditional 3", function () {

    describe( 'if whatDay is "Mannersday"', function () {
      it( "should return lucky number 11", function () {
        expect( Exer.condition3( "Mannersday" ) ).toBe( 11 );
      } );
    } );

    describe( 'if whatDay is "Fooday"', function () {
      it( "should return lucky number 9", function () {
        expect( Exer.condition3( "Foosday" ) ).toBe( 9 );
      } );
    } );

    describe( 'if whatDay is "Heyday"', function () {
      it( "should return lucky number 7!7" , function () {
        expect( Exer.condition3( "Heyday" ) ).toBe( "7!7" );
      } );
    } );

    describe( 'if whatDay is "Moop"', function () {
      it( "should return lucky number Infinity", function () {
        expect( Exer.condition3( "Moop" ) ).toBe( Infinity );
      } );
    } );

  } );

  describe( "Conditional 4", function () {

    describe( "structure", function () {

      beforeEach( function () {
        spyOn( window, 'prompt' ).and.returnValue(null);
        spyOn( console, 'log' );
      } );

      it( "should prompt the user with the correct message", function () {
        Exer.condition4();
        expect( prompt.calls.allArgs() ).toEqual( [["Enter today's date, please."]] );
      } );

      it( "should not return anything", function () {
        expect( Exer.condition4() ).toBeUndefined();
      } );

    } );

    describe( "for inputs", function () {

      beforeEach( function () {
        spyOn( console, 'log' );
      } );

      describe( "if input is not a number", function () {
        it( 'should output "What do you think this is, bub? Wonderland?"', function () {
          spyOn( window, 'prompt' ).and.returnValue( NaN );
          Exer.condition4();
          expect( console.log.calls.allArgs() ).toEqual( [["What do you think this is, bub? Wonderland?"]] );
        } );
      } );

      describe( "if input is less than 1", function () {
        it( 'should output "Negativelaaaaaaand~!"', function () {
          spyOn( window, 'prompt' ).and.returnValue( -2 );
          Exer.condition4();
          expect( console.log.calls.allArgs() ).toEqual( [["Negativelaaaaaaand~!"]] );
        } );
      } );

      describe( "if input is greather than 31", function () {
        it( 'should output "Are they paying you overtime for this?"', function () {
          spyOn( window, 'prompt' ).and.returnValue( 40 );
          Exer.condition4();
          expect( console.log.calls.allArgs() ).toEqual( [["Are they paying you overtime for this?"]] );
        } );
      } );

      describe( "if input is between 29 and 31 inclusive", function () {
        it( 'should output "I sure hope it isn\'t February." for 29', function () {
          spyOn( window, 'prompt' ).and.returnValue( 29 );
          Exer.condition4();
          expect( console.log.calls.allArgs() ).toEqual( [["I sure hope it isn't February."]] );
        } );
        it( 'should output "I sure hope it isn\'t February." for 31', function () {
          spyOn( window, 'prompt' ).and.returnValue( 31 );
          Exer.condition4();
          expect( console.log.calls.allArgs() ).toEqual( [["I sure hope it isn't February."]] );
        } );
      } );

      describe( "if input is between 1 and 28, inclusive", function () {
        it( 'should output "Did you know? There are exactly ## ways to make today awesome!"', function () {
          spyOn( window, 'prompt' ).and.returnValue( 7 );
          Exer.condition4();
          expect( console.log.calls.allArgs() ).toEqual( [["Did you know? There are exactly 7 ways to make today awesome!"]] );
        } );
      } );

    } );

  } );

} );

describe("While and dowhile Loops exercises", function() {

  describe("While 1", function() {
    beforeAll(function() {
      console.log( "While 1:" );
      spyOn(console, 'log').and.callThrough();
      Exer.while1();
    });

    it("should contain a while ... do loop", function() {
      expect( Exer.while1.toString().match(/while/) ).toBeTruthy();
    });
    it("should call console.log 10 times with the arguments \"10 sheep\", \"9 sheep\", \"8 sheep\", \"7 sheep\", etc. ", function() {
      expect( console.log.calls.count() ).toEqual(10);
      for(var i = 10; i > 0; i--) {
        expect(console.log.calls.argsFor(10 - i)[0]).toEqual(i + " sheep");
      }
    });
    it("should have console.log appear only once", function() {
      var work = Exer.while1.toString();
      work = work.match(/^.+?$/mg);  // break into lines
      var i = 0;
      while ( i < work.length ) {
        if ( work[i].match(/^\s*\/\//) ) {  // remove comments
          work.splice( i, 1 );
        } else { i++; }
      }
      var work2 = '';
      for( i = 0; i < work.length; i++ ) {
        work2 += work[i];
      }
      expect( work2.match(/console\.log/gm).length ).toEqual(1);
    });
  });

  describe("while 2", function() {
    beforeAll(function() {
      console.log( "While 2:" );
      spyOn( console, 'log' ).and.callThrough();
      Exer.while2();
    });

    it("should not contain a loop", function() {
      expect( Exer.while2.toString().match(/(while|for)/) ).not.toBeTruthy();
    });
    it("should call console.log 7 times with the arguments \"I'm melting!\", \"m melting!\", \"melting!\", etc. and then \"What a world!\"", function() {
      expect( console.log.calls.count() ).toEqual(7);
      var deadWitch = "I'm melting!";
      for(var i = 0; i < 5; i++) {
        expect(console.log.calls.argsFor(i)[0]).toEqual(("I'm melting!").substr(2*i));
      }
      expect(console.log.calls.argsFor(6)[0]).toEqual("What a world!");
    });
    it("should have console.log appear 7 times", function() {
      expect( Exer.while2.toString().match(/console\.log/gm).length ).toEqual(7);
    });
  });

  describe("do while 1", function() {
    beforeAll(function() {
      console.log( "do while 1:" );
      spyOn( console, 'log' ).and.callThrough();
      Exer.doWhile1()
    });

    it("should contain a while ... do loop", function() {
      expect( Exer.doWhile1.toString().match(/while/) ).toBeTruthy();});
    it("should call console.log 6 times with the arguments 0, 1, 2, 0, 1, and 2", function() {
      expect( console.log.calls.count() ).toEqual(6);
      for(var i = 0; i < 6; i++) {
        expect(console.log.calls.argsFor(i)[0]).toEqual(i%3);
      }
    });
    it("should have console.log appear only once", function() {
      var work = Exer.doWhile1.toString().split('\n');
      var check = "";
      for ( var i = 0; i < work.length; i++ ) {
        if ( work[i].match(/\s*\/\//) === null ) { // add non-comment rows
          check += work[i];
        }
      }
      expect( check.match(/console\.log/g).length ).toEqual(1);
    });
  });

  describe("do while 2", function() {
    beforeAll(function() {
      console.log( "do while 2:" );
      spyOn( console, 'log' ).and.callThrough();
      Exer.doWhile2()
    });

    it("should not contain a loop", function() {
      expect( Exer.doWhile2.toString().match(/(while|for)/) ).not.toBeTruthy();
      });
    it("should call console.log 7 times with the arguments \"Train# 1: In flight!?\", \"Train# 2: In flight!?\", \"Train# 3: In flight!?\", etc.", function() {
      expect( console.log.calls.count() ).toEqual(7);
      for(var i = 0; i < 7; i++) {
        expect(console.log.calls.argsFor(i)[0]).toEqual("Train# " + (i+1) + ": In flight!?");
      }
    });
    it("should have console.log appear 7 times", function() {
      expect( Exer.doWhile2.toString().match(/console\.log/gm).length ).toEqual(7);
    });
  })
});

describe("Indenting Code exercises", function() {
  describe("Indenting Code 1", function() {
    it("indents the code two spaces for each block", function() {
      var work = Exer.indenting1.toString();
      work = work.match(/^.+?$/mg);  // break into lines
      var i = 0;
      while ( i < work.length ) {
        if ( work[i].match(/^\s*\/\//) ) {  // remove comments
          work.splice( i, 1 );
        } else { i++; }
      }
      i = 0;
      var line1Correct = /^  var firstName/.test(work[1]),
          line2Correct = /^  var lastName/.test(work[2]),
          line3Correct = /^  if\(firstName/.test(work[3]),
          line4Correct = /^    lastName \=/.test(work[4]),
          line5Correct = /^  \}/.test(work[5]);

      expect(line1Correct).toBe(true);
      expect(line2Correct).toBe(true);
      expect(line3Correct).toBe(true);
      expect(line4Correct).toBe(true);
      expect(line5Correct).toBe(true);
    });
  });

  describe("Indenting Code 2", function() {
    it("indents the code four spaces for each block", function() {
      var work = Exer.indenting2.toString();
      work = work.match(/^.+?$/mg);  // break into lines
      var i = 0;
      while ( i < work.length ) {
        if ( work[i].match(/^\s*\/\//) ) {  // remove comments
          work.splice( i, 1 );
        } else { i++; }
      }
      var line1Correct = /^    var firstName/.test(work[1]),
          line2Correct = /^    var lastName/.test(work[2]),
          line3Correct = /^    if\(firstName/.test(work[3]),
          line4Correct = /^        lastName \=/.test(work[4]),
          line5Correct = /^    \}/.test(work[5]);

      expect(line1Correct).toBe(true);
      expect(line2Correct).toBe(true);
      expect(line3Correct).toBe(true);
      expect(line4Correct).toBe(true);
      expect(line5Correct).toBe(true);
    });
  });
});

describe( "for Loops exercises", function () {

  describe( "For 1", function () {

    var args = [];
    beforeAll( function () {
      var scream = "...";
      while ( scream.length < 28 ) {
        args.push( [ scream ] );
        scream = "    " + scream + "AA";
      }
      scream += "H!"
      args.push( [ scream ] );
    } );

    it( "should maintain the correct output", function () {
      console.log( "For 1:" );
      spyOn( console, 'log' ).and.callThrough();
      Exer.for1();
      expect( console.log.calls.allArgs() ).toEqual( args );
    } );

    it( "should make six explicit calls to console.log", function () {
      expect( Exer.for1.toString().match(/console\.log/g).length ).toBe( 6 );
    } );

  } );

  describe( "For 2", function () {

    var lyrics = [
      [ "Hi!" ],
      [ "My name is" ],
      [ "My name is" ],
      [ "My name is" ],
      [ "Slim Shady" ],
      [ "Hi!" ],
      [ "My name is" ],
      [ "My name is" ],
      [ "My name is" ],
      [ "Slim Shady" ]
    ];
    var work = "";
    beforeAll( function () {
      var lines = Exer.for2.toString().split('\n');
      for ( var i = 0; i < lines.length; i++ ) {
        work += lines[i];
      }
    } );

    it( "should print the song lyrics", function () {
      console.log( "For 2:" );
      spyOn( console, 'log' ).and.callThrough();
      Exer.for2();
      expect( console.log.calls.allArgs() ).toEqual( lyrics );
    } );

    it( "should use a for loop", function () {
      expect( work.match( /function \(\) \{.*for.*\(.*;.*;.*\)\s*\{.*\}.*\}/g ) ).not.toBeNull();
    } );

    it( "should use a nested for loop", function () {
      expect( work.match( /function \(\) \{.*for.*\(.*;.*;.*\)\s*\{.*for.*\(.*;.*;.*\)\s*\{.*\}.*\}.*\}/g ) ).not.toBeNull();
    } );

  } );

  describe( "For 3", function () {

    var args = [];
    beforeAll( function () {
      for ( var i = 20; i >= 5; i-- ) {
        if ( i % 2 === 0) {
          args.push( [ i, "even" ] );
        } else {
          args.push( [ i, "odd" ] );
        }
      }
      console.log( "For 3:" );
      spyOn( console, 'log' ).and.callThrough();
      Exer.for3();
    } );

    it( 'should print 16 lines', function () {
      expect( console.log.calls.count() ).toBe( 16 );
    } );

    it( 'should print alternating "even"s and "odd"s', function () {
      expect( console.log.calls.allArgs() ).toEqual( args );
    } );

  } );

} );

describe("Breaking Out of a Loop exercises", function() {
  describe("breaking 1", function() {
    beforeAll(function() {
      var self = this;
      this.yengCount = 5000;
      var yeng = function() {
        return --self.yengCount;
      };
      Exer.breaking1(yeng);
    });

    it("should have the keyword break within the loop", function() {
      var match = Exer.breaking1.toString().match(/break;/);
      expect( match ).not.toBeNull();
    });
  });

  describe("breaking 2", function() {
    beforeAll(function() {
      this.theatre = [
        "Zardoz",
        "The FP",
        "The Lost Skeleton of Cadavra",
        "Electric Boogaloo!",
        "Buckaroo Banzai and the 5th Dimension",
        "Death Bed the Bed That Eats"
      ];
      this.theatre.currentIndex = -1;
      this.theatre.next = function() {
        return this[++this.currentIndex];
      };
      this.theatre.current = function() {
        return this[this.currentIndex];
      };
      this.theatre.toString = function() {
        return this.current();
      };

      spyOn(console, "log").and.callThrough();

      Exer.breaking2(this.theatre);
    });

    it("should break after logging \"Electric Boogaloo!\"", function() {
      expect( Exer.breaking2.toString() ).toMatch("break");
      expect( this.theatre.current() ).toEqual( "Electric Boogaloo!" );
      expect( console.log.calls.mostRecent().args[0] ).toEqual("Electric Boogaloo!");
    });
  });
});

describe( "Updating Variables Succinctly exercises", function () {

  describe( "Succinct 1", function () {

    it( "should return the answer", function () {
      expect( Exer.succinct1(3) ).toBe( "5 handsomely hirsute kiwis" );
    } );

    it( "should return the answer", function () {
      expect( Exer.succinct1(7) ).toBe( "13 handsomely hirsute kiwis" );
    } );

    it( "should return the answer", function () {
      expect( Exer.succinct1(24) ).toBe( "47 handsomely hirsute kiwis" );
    } );

    it( "should use all four compound assignment operators", function () {
      expect( Exer.succinct1.toString().match(/\*=/mg).length ).toBe(1);
      expect( Exer.succinct1.toString().match(/-=/mg).length ).toBe(1);
      expect( Exer.succinct1.toString().match(/\/=/mg).length ).toBe(1);
      expect( Exer.succinct1.toString().match(/\+=/mg).length ).toBe(1);
    } );

  } );

  describe( "Succinct 2", function () {

    var output = [];
    beforeAll( function () {
      for ( var hippo = 2; hippo <= 10; hippo = hippo + 1 ) {
        output.push( [ hippo + "! " + hippo + " fluttering hippos! Ah ah ah ah ah!" ] );
      }
    } );

    it( "should create the same output", function () {
      console.log( "Succinct 2:" );
      spyOn( console, 'log' ).and.callThrough();
      Exer.succinct2();
      expect( console.log.calls.allArgs() ).toEqual( output );
    } );

    it( "should use a succinct incremenation operator", function () {
      expect( Exer.succinct2.toString().match(/for\s*\(.*;.*;\s*(?:hippo\+\+|\+\+hippo)\s*\)/mg).length ).toBe(1);
    } );

  } );

  describe( "Succinct 3", function () {

    it( "should use a prefixed decrementer", function () {
      expect( Exer.succinct3.toString().match(/--pointer/mg).length ).toBe(1);
    } );

    it( "should produce the correct output", function () {
      var output = [ [ '!' ], [ 'e' ], [ 'm' ], [ ' ' ], [ 'e' ], [ 's' ], [ 'r' ], [ 'e' ], [ 'v' ], [ 'e' ], [ 'R' ] ];
      console.log( "Succinct 3:" );
      spyOn( console, 'log' ).and.callThrough();
      Exer.succinct3();
      expect( console.log.calls.allArgs() ).toEqual( output );
    } );

  } );

} );

describe( "Dispatching on a Value with switch exercises", function () {
  describe( "Switch 1", function () {

    beforeEach( function () {
      spyOn( console, 'log' ).and.callThrough();
      console.log( "Switch 1:");
    } );

    it( 'should say "foo"', function () {
      Exer.switch1('cow');
      expect( console.log ).toHaveBeenCalledWith( 'The cow goes "foo"!' );
    } );

    it( 'should say "bar"', function () {
      Exer.switch1('sheep');
      expect( console.log ).toHaveBeenCalledWith( 'The sheep goes "bar"!' );
    } );

    it( 'should say "quux"', function () {
      Exer.switch1('duck');
      expect( console.log ).toHaveBeenCalledWith( 'The duck goes "quux"!' );
    } );

    it( 'But what does the fox say?', function () {
      Exer.switch1('fox');
      expect( console.log ).toHaveBeenCalledWith( 'The fox goes "ring-a-ding-ding-dingding-ding-a-ding-ding"!' );
    } );

  } );
} );

describe("Capitalization exercises", function () {
  describe( "Capitalization 1", function () {
    it("should have ZeRo correctly capitalized as zero", function() {
      expect( Exer.capitalization1.toString().match("ZeRo") ).not.toBeTruthy();
      expect( Exer.capitalization1.toString().match("zero") ).toBeTruthy();
    });
    it("should have HAPPYCAT correctly capitalized as happyCat", function() {
      expect( Exer.capitalization1.toString().match("HAPPYCAT") ).not.toBeTruthy();
      expect( Exer.capitalization1.toString().match("happyCat") ).toBeTruthy();
    });
    it("should have string correctly capitalized as String", function() {
      expect( Exer.capitalization1.toString().match("string") ).not.toBeTruthy();
      expect( Exer.capitalization1.toString().match("String") ).toBeTruthy();
    });
    it("should have Length correctly capitalized as length", function() {
      expect( Exer.capitalization1.toString().match("Length") ).not.toBeTruthy();
      expect( Exer.capitalization1.toString().match("length") ).toBeTruthy();
    });
    it("should have Index correctly capitalized as index", function() {
      expect( Exer.capitalization1.toString().match("Index") ).not.toBeTruthy();
      expect( Exer.capitalization1.toString().match("index") ).toBeTruthy();
    });
    it("should have Console.Log correctly capitalized as console.log", function() {
      expect( Exer.capitalization1.toString().match("Console.Log") ).not.toBeTruthy();
      expect( Exer.capitalization1.toString().match("console.log") ).toBeTruthy();
    });
  });
} );

describe("Comments exercises", function () {

  describe( "Comments 1", function () {

    var work;
    beforeAll( function () {
      work = Exer.comments1.toString();
    } );

    it( "should comment out the missiles line", function () {
      expect( work.match(/^\s*\/\/\s*missiles\.launch\(\);$/mg).length ).toBe(1);
    } );

    it( "should contain a full-line comment involving wheat", function () {
      expect( work.match(/^\s*\/\/.*wheat.*$/mg).length ).toBe(1);
    } );

    it( "should contain a comment about bandits after your bricks", function () {
      expect( work.match(/^\s*brick\.buy\(2\);\s*\/\/.*bandits!.*$/mg).length ).toBe(1);
    } );

    // TODO: currently does not check for function

  } );

  describe( "comments 2", function () {
    it( "should contain a block comment and nothing else", function () {
      var work = Exer.comments2.toString().split(/\/\*|\*\//);
      expect( work[0].match(/^function \(\) {\s*$/) ).not.toBeNull();
      expect( work[2].match(/^\s*}/)).not.toBeNull();
      expect( work[1] ).not.toBeNull();
      console.log( "Comments 2:\n" + work[1] );
    } );
  } );

} );

