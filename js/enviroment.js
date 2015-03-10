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

// getFile method
function getFile(path, callback) {
  if (typeof require !== "undefined" && require !== null && (fs = require('fs'))) {
    fs.readFile(__dirname + "/../" + path, function(err, data) {
      callback(err, data.toString());
    });
  } else if (typeof $ !== "undefined" && $ !== null && typeof $.ajax !== "undefined" && $.ajax !== null) {
    $.ajax(path, {
      success: function(data) {callback(null, data);},
      error: function(xhr, err) {callbacl(err, null);}
    });
  } else {
    console.log("No method to retrieve file exists");
  }
}
