// Given an array of unique words, find the word that contains the greatest number of
// other words. A word must be at least two letters long.

// [ "Gray", "Grays", "Ray", "Rays", "Strays" ] = > "Grays"

function nestedWordCount (wordList) {
  var wordObj = {};
  var counter;
  var highestCount = 0;
  var wordiestWord;
  
  for (var i = 0; i < wordList.length; i++) {
    wordObj[wordList[i]] = 0;
  }
  
  for (var i = 0; i < wordList.length; i++) {
    for (var word in wordObj) {
      if (wordList[i].includes(word)) {
        wordObj[wordList[i]] += 1;
      }
    }
  }
  
  for (var word in wordObj) {
    if (wordObj[word] > highestCount) {
      wordiestWord = word;
      highestCount = wordObj[word];
    }
  }
  
  return wordiestWord;
}
