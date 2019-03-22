// set multiple strings with id's 
// then take those id's using math.random to choose which string will be used
// use onkeyup to check which keys are pressed 
// if the key does not match, decrement the "guesses" counter
// if the key does match, add the letter to the word, in all the places that it appears

var words = ["activision", "blizzard", "valve", "epic", "microsoft", "nintendo"];

var correctWord = words[Math.floor(Math.random() * words.length)];

console.log(correctWord);

// document.getElementById("word").textContent = correctWord;

var getRandomWord = function () {
    return words[Math.floor(Math.random() * words.length)];
};

    $(document).keyup(function(e) {
        switch (e.which) {
  
        case 65:
        console.log("a was pressed");
          break;
  
        case 66:
        console.log("b was pressed");
          break;
  
        case 67:
        console.log("c was pressed");
          break;
  
        case 68:
        console.log("d was pressed");
          break;

          case 69:
          console.log("e was pressed");
          break;

          case 70:
          console.log("f was pressed");
          break;

          case 71:
          console.log("g was pressed");
          break;

          case 72:
          console.log("h was pressed");
          break;

          case 73:
          console.log("i was pressed");
          break;

          case 74:
          console.log("j was pressed");
          break;

          case 75:
          console.log("k was pressed");
          break;
  
        case 76:
        console.log("l was pressed");
          break;
  
        case 77:
        console.log("m was pressed");
          break;
  
        case 78:
        console.log("n was pressed");
          break;

          case 79:
          console.log("o was pressed");
          break;

          case 80:
          console.log("p was pressed");
          break;

          case 81:
          console.log("q was pressed");
          break;

          case 82:
          console.log("r was pressed");
          break;

          case 83:
          console.log("s was pressed");
          break;

          case 84:
          console.log("t was pressed");
          break;

          case 85:
          console.log("u was pressed");
          break;
  
        case 86:
        console.log("v was pressed");
          break;
  
        case 87:
        console.log("w was pressed");
          break;
  
        case 88:
        console.log("x was pressed");
          break;

          case 89:
          console.log("y was pressed");
          break;

          case 90:
          console.log("z was pressed");
          break;
  
        default:
          break;
        }
      });