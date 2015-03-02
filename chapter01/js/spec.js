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

describe("Numbers exercises", function () {
  describe("Numbers 1", function () {
    it("should return a value that is a number", function() {
      expect(typeof Exercises.numbers1()).toBe('number');
    });
  });
});