// Exercise tests
describe("Expressions and Statements exercises", function() {
	describe("", function() {
		it("should ", function() {
			
		});
	});
});

describe("Variables exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});

describe("Keywords and Reserved Words exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});
describe("The Environment exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});

describe("Functions exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});
describe("The console.log Function exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});
describe("Return Values exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});
describe("Prompt and Confirm exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});
describe("Control Flow exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});

describe("Conditional Execution exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});

describe("while and dowhile Loops exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});

describe("Indenting Code exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});

describe("for Loops exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});

describe("Breaking Out of a Loop exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});

describe("Updating Variables Succinctly exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});

describe("Dispatching on a Value with switch exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});

describe("Capitalization exercises", function() {
	describe("", function() {
		it("should ", function() {

		});
	});
});

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
