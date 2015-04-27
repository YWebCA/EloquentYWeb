// Provided Resources for Chapter Exercises
window.Exer = {
  defining1: new Function(),
  defining2: new Function(),
  defining3: new Function(),
  spaceCubeDetector: null,
  area: null,
  mockSpaceCubeDetector: function(l,h,w) {
  	return l===h&&l===w&&l!==null ? "SPACE CUBE DETECTED!!" : "THIS IS NO SPACE CUBE!";
  },
  mockArea: function(l,h,w) {
  	return l*h*w;
  }
};
