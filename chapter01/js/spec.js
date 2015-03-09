// Exercise tests

describe("Numbers exercises", function() {

  describe("Basic exercises", function() {

    describe("Numbers 1", function() {
      it("should return a value that is a number", function() {
        expect( typeof Exercises.numbers1() ).toBe('number');
      });
    });
    describe("Numbers 2", function() {
      it("should return a value that is a negative number", function() {
        expect( Exercises.numbers2() ).toBeLessThan(0);
      });
    });
    describe("Numbers 3", function() {
      it("should return a value that is between 4 and 5", function() {
        expect( Exercises.numbers3() ).toBeGreaterThan(4);
        expect( Exercises.numbers3() ).toBeLessThan(5);
      });
    });
    describe("Numbers 4", function() {
      it("should return a value that is between 10e4 and 10e5", function() {
        expect( Exercises.numbers3() ).toBeGreaterThan(10e4);
        expect( Exercises.numbers3() ).toBeLessThan(10e5);
      });
    });

  });

  describe("Arithmetic exercises", function() {

    describe("Arithmetic 1", function() {
      it("should return a value of 10", function() {
        expect( Exercises.arithmetic1() ).toEqual(10);
      });
    });
    describe("Arithmetic 2", function() {
      it("should return a value of 7", function() {
        expect( Exercises.arithmetic2() ).toEqual(7);
      });
    });
    describe("Arithmetic 3", function() {
      it("should return a value of -4", function() {
        expect( Exercises.arithmetic3() ).toEqual(-4);
      });
    });
    describe("Arithmetic 4", function() {
      it("should return a value of 3", function() {
        expect( Exercises.arithmetic4() ).toEqual(3);
      });
    });
    describe("Arithmetic 5", function() {
      it("should return the value of the expression ( 3 + -( 2 - 14 ) + 11 % 7 + 8 ) / 2", function() {
        expect( Exercises.arithmetic5() ).toEqual(( 3 + -( 2 - 14 ) + 11 % 7 + 8 ) / 2);
      });
    });

  });

  describe("Special numbers exercises", function() {
    describe("Special Numbers 1", function() {
      it("should return the value of a number subtracted from Infinity", function() {
        expect( Exercises.special1() ).toEqual(Infinity);
      });
    });
    describe("Special Numbers 2", function() {
      it("should return the value of a number divided by zero", function() {
        expect( Exercises.special2() ).toEqual(NaN);
      });
    });
    describe("Special Numbers 3", function() {
      it("should return the value of Infinity subtracted from Infinity", function() {
        expect( Exercises.special3() ).toEqual(NaN);
      });
    });
    describe("Special Numbers 4", function() {
      it("should return the value of a number divided by Infinity", function() {
        expect( Exercises.special4() ).toEqual(0);
      });
    });
  });

});

describe("Strings exercises", function() {
  describe("Strings 1", function() {
    it("should return a string", function() {
      expect( typeof Exercises.strings1() ).toBe('string');
    });
  });
  describe("Strings 2", function() {
    it("should return a string", function() {
      expect( typeof Exercises.strings2() ).toBe('string');
    });
  });
  describe("Strings 3", function() {
    it("should return a multi-line string", function() {
      expect( Exercises.strings3().match(/\n/).length ).toBeGreaterThan(0);
    });
  });
  describe("Strings 4", function() {
    it("should return the sample string", function() {
      expect( Exercises.strings4() ).toEqual("'If a string is in single quotes, like this,\nyou can nest \"double quotes\".\nBut don\\'t forget to escape your \\backslashes\\\nso you can type \"\\n\"!'");
    });
  });
  describe("Strings 5", function() {
    it("should return the sample string", function() {
      expect( Exercises.strings5() ).toEqual("supercalifragilisticexpialidocious");
    });
  });
});

describe("Unary Operators exercises", function() {
  describe("Unary 1", function() {
    it("should return the type of \"Hello, world!\"", function() {
      expect( Exercises.unary1() ).toBe('string');
    });
  });
  describe("Unary 2", function() {
    it("should return the type of NaN", function() {
      expect( Exercises.unary2() ).toBe('number');
    });
  });
  describe("Unary 3", function() {
    it("should return a negative number", function() {
      expect( Exercises.unary3() ).toBeLessThan(0);
    });
  });
});

describe("Boolean Values exercises", function() {

  describe("Basic exercises", function() {
    describe("Boolean 1", function () {
      it("should return true", function () {
        expect( Exercises.boolean1() ).toBeTruthy();
      });
    });
    describe("Boolean 1", function () {
      it("should return true", function () {
        expect( Exercises.boolean2() === false ).toBeTruthy();
      });
    });
  });

  describe("Comparisons exercises", function() {

    describe("Comparisons 1", function() {
      it("should return true", function() {
        expect( Exercises.compare1() === true ).toBeTruthy();
      });
    });
    describe("Comparisons 2", function() {
      it("should return true", function() {
        expect( Exercises.compare2() === true ).toBeTruthy();
      });
    });
    describe("Comparisons 3", function() {
      it("should return true", function() {
        expect( Exercises.compare3() === true ).toBeTruthy();
      });
    });
    describe("Comparisons 4", function() {
      it("should return false", function() {
        expect( Exercises.compare4() === false ).toBeTruthy();
      });
    });
    describe("Comparisons 5", function() {
      it("should return false", function() {
        expect( Exercises.compare5() === false ).toBeTruthy();
      });
    });
    describe("Comparisons 6", function() {
      it("should return false", function() {
        expect( Exercises.compare6() === false ).toBeTruthy();
      });
    });

  });

  describe("Logical Operators exercises", function() {

    describe("Logical 1", function() {
      it("it should return false", function() {
        expect( Exercises.logic1() === false ).toBeTruthy();
      });
    });
    describe("Logical 2", function() {
      it("should return true", function() {
        expect( Exercises.logic2() === true ).toBeTruthy();
      });
    });
    describe("Logical 3", function() {
      it("should return the result of true && false", function() {
        expect( Exercises.logic3() === false ).toBeTruthy();
      });
    });
    describe("Logical 4", function() {
      it("should return the result of true || false", function() {
        expect( Exercises.logic4() === true ).toBeTruthy();
      });
    });
    describe("Logical 5", function() {
      it("should return the result of the expression ( 1 + 1 == 2 && 10 * 10 > 50 )", function() {
        expect( Exercises.logic5() ).toEqual( 1 + 1 == 2 && 10 * 10 > 50 );
      });
    });
    describe("Logical 6", function() {
      it("should return -4 if input is true", function() {
        expect( Exercises.logic6(true) ).toEqual(-4);
      });
      it("should return 7 if input is false", function() {
        expect( Exercises.logic6(false) ).toEqual(7);
      });
    });

  });

});

describe("Undefined Values exercises", function() {

  describe("Undefined 1", function() {
    it("should return undefined", function() {
      expect( Exercises.undef1() ).toBe(undefined);
    });
  });
  describe("Undefined 2", function() {
    it("should return null", function() {
      expect( Exercises.undef2() ).toBe(null);
    });
  });

});

describe("Automatic Type Conversion exercises", function() {

  describe("Coercion 1", function() {
    it("should return 0", function() {
      expect( Exercises.coercion1() === 0 ).toBeTruthy();
    });
  });
  describe("Coercion 2", function() {
    it("should return -5", function() {
      expect( Exercises.coercion2() === -5 ).toBeTruthy();
    });
  });
  describe("Coercion 3", function() {
    it("should return \"-32\"", function() {
      expect( Exercises.coercion3() === "-32" ).toBeTruthy();
    });
  });
  describe("Coercion 4", function() {
    it("should return true", function() {
      expect( Exercises.coercion4() === true ).toBeTruthy();
    });
  });
  describe("Coercion 5", function() {
    it("should return false", function() {
      expect( Exercises.coercion5() === false ).toBeTruthy();
    });
  });
  describe("Coercion 6", function() {
    it("should return false", function() {
      expect( Exercises.coercion6() === false ).toBeTruthy();
    });
  });
  describe("Coercion 7", function() {
    it("should return true", function() {
      expect( Exercises.coercion7() === true ).toBeTruthy();
    });
  });
  describe("Coercion 8", function() {
    it("should return false", function() {
      expect( Exercises.coercion8() === false ).toBeTruthy();
    });
  });

});

describe("Short-Circuting exercises", function() {

  describe("Circuit 1", function() {
    it("should not throw an exception", function() {
      expect( Exercises.circuit1 ).not.toThrow();
    });
  });
  describe("Circuit 2", function() {
    it("should not throw an exception", function() {
      expect( Exercises.circuit2 ).not.toThrow();
    });
  });

});

describe("Exercise file", function() {
  it("should pass JSHint", function(done) {
    jasmine.addMatchers(customMatchers);
    $.ajax("js/exercises.js", {
      success: function(data) {
        expect(data).toPassJSHint();
        done();
      }
    })
  });
});
