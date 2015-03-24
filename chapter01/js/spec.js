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
        expect( Exercises.numbers4() ).toBeGreaterThan(10e4);
        expect( Exercises.numbers4() ).toBeLessThan(10e5);
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
        expect( Exercises.arithmetic5() ).toBe(( 3 + -( 2 - 14 ) + 11 % 7 + 8 ) / 2);
      });
    });

  });

  describe("Special numbers exercises", function() {
    describe("Special Numbers 1", function() {
      it("should return the value of a number subtracted from Infinity", function() {
        expect( Exercises.special1() ).toBe(Infinity);
      });
    });
    describe("Special Numbers 2", function() {
      it("should return the value of a number divided by zero", function() {
        expect( Exercises.special2() ).toBe(Infinity);
      });
    });
    describe("Special Numbers 3", function() {
      it("should return the value of Infinity subtracted from Infinity", function() {
        expect( Exercises.special3() ).toBeNaN();
      });
    });
    describe("Special Numbers 4", function() {
      it("should return the value of a number divided by Infinity", function() {
        expect( Exercises.special4() ).toBe(0);
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
      expect( Exercises.strings5() ).toBe("supercalifragilisticexpialidocious");
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
        expect( Exercises.boolean1() ).toBe(true);
      });
    });
    describe("Boolean 1", function () {
      it("should return false", function () {
        expect( Exercises.boolean2() ).toBe(false);
      });
    });
  });

  describe("Comparisons exercises", function() {

    describe("Comparisons 1", function() {
      it("should return true", function() {
        expect( Exercises.compare1() ).toBe(true);
      });
    });
    describe("Comparisons 2", function() {
      it("should return true", function() {
        expect( Exercises.compare2() ).toBe(true);
      });
    });
    describe("Comparisons 3", function() {
      it("should return true", function() {
        expect( Exercises.compare3() ).toBe(true);
      });
    });
    describe("Comparisons 4", function() {
      it("should return false", function() {
        expect( Exercises.compare4() ).toBe(false);
      });
    });
    describe("Comparisons 5", function() {
      it("should return false", function() {
        expect( Exercises.compare5() ).toBe(false);
      });
    });
    describe("Comparisons 6", function() {
      it("should return false", function() {
        expect( Exercises.compare6() ).toBe(false);
      });
    });

  });

  describe("Logical Operators exercises", function() {

    describe("Logical 1", function() {
      it("it should return false", function() {
        expect( Exercises.logic1() ).toBe(false);
      });
    });
    describe("Logical 2", function() {
      it("should return true", function() {
        expect( Exercises.logic2() ).toBe(true);
      });
    });
    describe("Logical 3", function() {
      it("should return the result of true && false", function() {
        expect( Exercises.logic3() ).toBe(false);
      });
    });
    describe("Logical 4", function() {
      it("should return the result of true || false", function() {
        expect( Exercises.logic4() ).toBe(true);
      });
    });
    describe("Logical 5", function() {
      it("should return the result of the expression ( 1 + 1 == 2 && 10 * 10 > 50 )", function() {
        expect( Exercises.logic5() ).toEqual( 1 + 1 == 2 && 10 * 10 > 50 );
      });
    });
    describe("Logical 6", function() {
      it("should return -4 if input is true", function() {
        expect( Exercises.logic6(true) ).toBe(-4);
      });
      it("should return 7 if input is false", function() {
        expect( Exercises.logic6(false) ).toBe(7);
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
      expect( Exercises.coercion1() ).toBe(0);
    });
  });
  describe("Coercion 2", function() {
    it("should return -5", function() {
      expect( Exercises.coercion2() ).toBe(-5);
    });
  });
  describe("Coercion 3", function() {
    it("should return \"-32\"", function() {
      expect( Exercises.coercion3() ).toBe("-32");
    });
  });
  describe("Coercion 4", function() {
    it("should return true", function() {
      expect( Exercises.coercion4() ).toBe(true);
    });
  });
  describe("Coercion 5", function() {
    it("should return false", function() {
      expect( Exercises.coercion5() ).toBe(false);
    });
  });
  describe("Coercion 6", function() {
    it("should return false", function() {
      expect( Exercises.coercion6() ).toBe(false);
    });
  });
  describe("Coercion 7", function() {
    it("should return true", function() {
      expect( Exercises.coercion7() ).toBe(true);
    });
  });
  describe("Coercion 8", function() {
    it("should return false", function() {
      expect( Exercises.coercion8() ).toBe(false);
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

jsHintSpec();
