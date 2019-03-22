// set multiple strings with id's 
// then take those id's using math.random to choose which string will be used
// use onkeyup to check which keys are pressed 
// if the key does not match, decrement the "guesses" counter
// if the key does match, add the letter to the word, in all the places that it appears

var words = ["activision", "blizzard", "valve", "epic", "microsoft", "nintendo"];

var word = words[Math.floor(Math.random() * words.length)];

console.log(word);

document.getElementById("word").textContent = word;

var getRandomWord = function () {
    return words[Math.floor(Math.random() * words.length)];
};