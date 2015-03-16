// Annalise
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
      this.work = Exer.statements1.toString().match(/^.*$/mg);  // break into lines
      for ( var i = 0; i < this.work.length; i++ ) {
        if ( !this.work[i] ) {
          this.work.splice(i, 1);  // remove empty lines
        }
      }
      this.work = this.work.slice(1, length - 1);  // remove function expression wrapper
    });

    it("should contain a single statement", function() {
      expect( this.work ).not.toBe(null);           // there should be lines left
      expect( this.work.length ).toBe(1);           // in fact, one line
      this.work = this.work[0].match(/\s*(.*);/g);  // find statements
      expect( this.work ).not.toBe(null);
    });

    it("should evaluate to something other than undefined", function() {
      expect( eval(this.work.match(/\s*(.*);/)[1]) ).not.toBeUndefined();
    });

  });
});

// Nate
describe("Variables exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Zach
describe("Keywords and Reserved Words exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Annalise
describe("The Environment exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Nate
describe("Functions exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Zach
describe("The console.log Function exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Annalise
describe("Return Values exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Nate
describe("Prompt and Confirm exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Zach
describe("Control Flow exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Annalise
describe("Conditional Execution exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Nate
describe("while and dowhile Loops exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Zach
describe("Indenting Code exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Annalise
describe("for Loops exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Nate
describe("Breaking Out of a Loop exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Zach
describe("Updating Variables Succinctly exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Annalie
describe("Dispatching on a Value with switch exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Nate
describe("Capitalization exercises", function() {
  describe("", function() {
    it("should ", function() {

    });
  });
});

// Zach
describe("Comments exercises", function() {
  describe("", function() {
    it("should ", function() {

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
