// Annalise
describe("Expressions and Statements exercises", function() {
	describe("", function() {
		it("should ", function() {
			
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
