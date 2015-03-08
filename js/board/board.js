  var theFunctionToCallWhenTheDocumentIsReady = function() {
  //============================================
  // Firebase References

  var rootFirebaseRef = new Firebase("https://1-point.firebaseio.com/");
  var gRef = rootFirebaseRef.child("g");
  var sRef = rootFirebaseRef.child("s");

  //============================================
  // Helper Functions

  var getPointsFromString = function(string) {
    var arrayOfThingsThatLookLikeNumbers = string.match( /(\d+)/gm );
    var firstMatch = arrayOfThingsThatLookLikeNumbers[0]
    var points = parseInt(firstMatch);
    return points;
  }

  var contains = function(wholeString, subString) {
    return wholeString.indexOf(subString) > -1
  };

  //============================================
  // Initialize Points

  var phrase = "";

  var initializePoints = function() {

    gRef.once("value", function(firebaseSnapshot) {
      var numPoints = firebaseSnapshot.val();
      if (numPoints === null) {
        gRef.set(0);
      }
      else {
        $("#g-points").html(numPoints);
      }
    });

    sRef.once("value", function(firebaseSnapshot) {
      var numPoints = firebaseSnapshot.val();
      if (numPoints === null) {
        sRef.set(0);
      }
      else {
        $("#s-points").html(numPoints);
      }
    });
    phrase = randomize(phrases);
    $("#phrase").html(phrase);
  }

  var dweetHandler = function(dweet) {
    var ding = new Howl({urls: ['sounds/Ding.wav'] });
    ding.play();

    var wordsSpoken = $("#transcription").val().toLowerCase();
    var additionalPoints = getPointsFromString(wordsSpoken);

    console.log("So far so gooooood.");

    if(contains(wordsSpoken, phrase)) {
      $("#g-logo").effect("bounce");

      var incrementGryffindorPointsByAdditionalPoints = function(curPoints) {
        var newTotalPoints = curPoints + additionalPoints;
        $("#g-points").html(newTotalPoints);
        return newTotalPoints;
      }
      gRef.transaction(incrementGryffindorPointsByAdditionalPoints);

      phrase = randomize(phrases);
      $("#phrase").html(phrase);
    }

    else if(contains(wordsSpoken, "slytherin")) {
      $("#s-logo").effect("bounce");

      var incrementSlytherinPointsByAdditionalPoints = function(curPoints) {
        var newTotalPoints = curPoints + additionalPoints;
        $("#s-points").html(newTotalPoints);
        return newTotalPoints;
      }
      sRef.transaction(incrementSlytherinPointsByAdditionalPoints);
    }
  }

  var randomize = function(phrases) {
    var index = Math.floor(Math.random() * 548) + 1;
    return phrases[index];
  }

  var initialize = function() {
    initializePoints();
    dweetio.listen_for("john-franklin-channel", dweetHandler);
  }

  initialize();

};

$(document).ready(theFunctionToCallWhenTheDocumentIsReady)