// Exercise tests
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

describe("Numbers exercises", function() {

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
