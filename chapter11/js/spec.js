// Exercise tests
describe("Exercise file", function() {
  it("should pass JSHint", function(done) {
    jasmine.addMatchers(customMatchers);
    getFile("js/exercises.js", function(err, data) {
      expect(data).toPassJSHint();
      done();
    });
  });
});
