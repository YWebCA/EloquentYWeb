// World environment file
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
      if (weAreInNode()) {
        JSHINT = require('jshint').JSHINT;
      }
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
  var hintUp;
  if (!file) {
    file = "exercises.js";
  }

  if (typeof require === 'undefined') {
    hintUp = function(done) {
      $.ajax("js/" + file, {
        success: function(data) {
          expect(data).toPassJSHint();
          done();
        }
      });
    };
  } else {
    hintUp = function(done) {
      var fs = require('fs');
      varjshint = require('jshint');
      var data = fs.readFileSync(process.cwd() + "/js/" + file).toString();
      expect(data).toPassJSHint();
      done();
    }
  }

  describe(file, function() {
    it("should pass JSHint", function(done) {
      jasmine.addMatchers(customMatchers);
      hintUp(done);
    });
  });
}

//Helper Functions
weAreInNode = function() {
  return typeof require !== 'undefined' && require !== null;
}
