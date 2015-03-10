// World enviroment file
var customMatchers = {};
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
