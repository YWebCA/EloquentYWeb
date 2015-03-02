// World enviroment file
  var customMatchers = {};

// JSHint Matcher
customMatchers.toPassJSHint =  function(util, customEqualityTesters) {
  return {
    compare: function(actual, expected) {
      var options = {curly: true, white: true, indent: 2, maxdepth: 3};
      var pass = JSHINT(actual, options);
      var message = "";
      console.log(JSHINT.errors);
      for (error of JSHINT.errors) {
        message += "line " + error.line + " character " + error.character + ' - ' + error.reason + ' - ' + error.evidence + "\n";
      }
      return { pass: pass, message: message };
    }
  }
}
