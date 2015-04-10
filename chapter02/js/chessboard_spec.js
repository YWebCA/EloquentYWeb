// Exercise tests
describe("Chess Board exercise", function() {

  beforeAll(function() {

    this.chess = function ( n ) {
      var size;
      if ( n !== 0 ) {
        size = n || 8;
      } else size = 0;
      var output = "";
      for ( var i = 0; i < size; i++ ) {
        for ( var j = 0; j < size; j++ ) {
          if ( (i+j) % 2 == 0 ) {
            output += ' ';
          } else {
            output += '#';
          }
        }
        output += '\n';
      }
      return output;
    };

    spyOn(console, 'log').and.callThrough();

  });

  it("should not make any calls to console.log()", function() {
    expect(console.log).not.toHaveBeenCalled();
  });

  it("should alternate \"white\" and \"black\" squares, starting with white", function() {
    var answer = Chess.start();
    expect(answer.charAt(0)).toBe(' ');
  });

  it("should return an 8x8 chess board when called with no parameters", function() {
    expect( Chess.start() ).toBe( this.chess() );
  });

  describe("given parameters", function() {
    it("should be able to return a 3x3 chess board", function() {
      expect( Chess.start(3) ).toBe( this.chess(3) );
    });
    it("should be able to return a 100x100 chess board", function() {
      expect( Chess.start(100) ).toBe( this.chess(100) );
    });
  });

  describe("Extra credit tests", function() {
    it("should be able to return a 0x0 chess board (rather than a default 8x8)", function() {
      expect( Chess.start(0) ).toBe('');
    });
  });

});

