describe("Looping a Triangle solution", function() {
  beforeAll(function() {
    spyOn(console, 'log').and.callThrough();
    Triangle.start();
  });
  it("should make seven calls to console.log()", function() {
    expect(console.log.calls.count()).toEqual(7);
  });
  it("should output the triangle", function() {
    expect(console.log.calls.allArgs()).toEqual([['#'],['##'],['###'],['####'],['#####'],['######'],['#######']]);
  });
  it("should include a loop", function() {
    expect( Triangle.start.toString().match( /^\s*}?\s*while|for/mg ).length ).toEqual(1);
  });
});
