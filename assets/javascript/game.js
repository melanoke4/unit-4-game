$(document).ready(function() {
    var yourMatchingNumber = 0;
    var randomNum = randomNumGen();
    var wins = 0;
    var losses = 0;
    var crystals;
  
    function randomNumCrystals() {
      return {
        one: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/handdrawn-crystal-doodle-icon-hand-drawn-black-sketch-sign-symbol-decoration-element-white-background-isolated-flat-design-vector-156922006.jpg"
        },
        two: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/handdrawn-crystal-doodle-icon-hand-drawn-black-sketch-sign-symbol-decoration-element-white-background-isolated-flat-design-vector-156922044.jpg"
        },
        three: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/handdrawn-crystal-doodle-icon-hand-drawn-black-sketch-sign-symbol-decoration-element-white-background-isolated-flat-design-vector-156922058.jpg"
        },
        four: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/handdrawn-crystal-doodle-icon-hand-drawn-black-sketch-sign-symbol-decoration-element-white-background-isolated-flat-design-vector-156922088.jpg"
        }
      };
    }
  
    function randomNumGen() {
      return Math.floor(Math.random() * 102) + 19;
    }
  
    function setGame() {
      yourMatchingNumber = 0;
      crystals = randomNumCrystals();
      randomNum = randomNumGen();
      $("#randomNumber").text(randomNum);
    }
  
    function updateDom(didUserWin) {
      $("#wins").empty();
  
      if (didUserWin === true) {
        $("#wins").append($("<p>").text("You won"));
        setGame();
        renderMatchingNumber();
      }
      else if (didUserWin === false) {
        $("#wins").append($("<p>").text("You lost"));
        setGame();
        renderMatchingNumber();
      }
  
      var wSpan = $("<span>").text(wins);
      var lSpan = $("<span>").text(losses);
  
      var pWins = $("<p>").text("Wins: ");
      var pLosses = $("<p>").text("Losses: ");
  
      pWins.append(wSpan);
      pLosses.append(lSpan);
  
      $("#wins").append(pWins);
      $("#wins").append(pLosses);
    }
  
    function renderCrystals() {
      for (var key in crystals) {
        var crystalDiv = $("<div class='crystalbutton' data-name='" + key + "'>");
        var crystalImg = $("<img alt='image' class='crystalimg'>").attr("src", crystals[key].imageUrl);
        crystalDiv.append(crystalImg);
        $("#crystals").append(crystalDiv);
      }
    }
  
    function updateMatchingNumber(crystal) {
      yourMatchingNumber += crystals[crystal.attr("data-name")].points;
    }
  
    function renderMatchingNumber() {
      var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
      $("#scores").html();
      $("#scores").html(scoreNumDiv);
    }
  
    setGame();
    updateDom();
    renderCrystals();
    renderMatchingNumber();
  
    $(".crystalbutton").on("click", function(event) {
      updateMatchingNumber($(this));
      renderMatchingNumber();
  console.log("made it");
      if (yourMatchingNumber === randomNum) {
        wins++;
        setGame();
        updateDom(true);
      }
      else if (yourMatchingNumber > randomNum) {
        losses++;
        setGame();
        updateDom(false);
      }
    });
  
  });