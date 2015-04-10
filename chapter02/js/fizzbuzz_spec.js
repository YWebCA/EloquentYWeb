describe("FizzBuzz solution", function() {

  beforeAll(function() {
    spyOn(console, 'log').and.callThrough();
    Fizz.buzz();
  });

  it("should make 100 calls to console.log()", function() {
    expect(console.log.calls.count()).toEqual(100);
  });

  it("should include a loop", function() {
    expect( Fizz.buzz.toString().match( /^\s*}?\s*while|for/mg ).length ).toEqual(1);
  });

  it("should output the FizzBuzz pattern", function() {
    var answer = [];
    for ( var i = 1; i <= 100; i++ ) {
      var output = "";
      if ( i % 3 == 0 ) {
        output += "Fizz";
      }
      if ( i % 5 == 0 ) {
        output += "Buzz";
      }
      answer.push( [ output || i ] );
    }
    expect(console.log.calls.allArgs()).toEqual( answer );
  });

});
