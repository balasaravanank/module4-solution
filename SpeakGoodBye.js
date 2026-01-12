(function (window) {

  var speakWord = "Good Bye";

  var speakGoodBye = function (name) {
    console.log(speakWord + " " + name);
  };

  window.speakGoodBye = speakGoodBye;

})(window);
