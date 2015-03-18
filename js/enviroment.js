// World enviroment file
customMatchers = {};
var jsHintOptions = {
  curly: true,
  white: true,
  indent: 2,
  maxdepth: 3,
  bitwise: true,
  eqeqeq: true,
  nonew: true,
  newcap: true,
  maxstatements: 6,
  notypeof: true,
};

// JSHint Matcher
customMatchers.toPassJSHint =  function(util, customEqualityTesters) {
  return {
    compare: function(actual, expected) {
      var pass = JSHINT(actual, jsHintOptions);
      var message = "";
      for (error of JSHINT.errors) {
        message += "line " + error.line + " character " + error.character + ' - ' + error.reason + ' - ' + error.evidence + "\n";
      }
      return { pass: pass, message: message };
    }
  }
}

//JSHint spec runner
jsHintSpec = function(file) {
  if (!file) {
    file = "js/exercises.js";
  }
  describe(file, function() {
    it("should pass JSHint", function(done) {
      jasmine.addMatchers(customMatchers);
      $.ajax(file, {
        success: function(data) {
          expect(data).toPassJSHint();
          done();
        }
      });
    });
  });
}
