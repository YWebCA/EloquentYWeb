// Exercise tests
describe("Exercise 1", function() {
  it("should return the sum of 7 and 5", function() {
    expect(Exercises.exercise1()).toBe(12);
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
