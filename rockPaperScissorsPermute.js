// Given a number of rounds, generate an array with all possible permutations of rock, paper, scissors.

var rockPaperPermutation = function (roundCount) {
  if (roundCount === 0) return [];
  
  function playGame(permsSoFar, roundsRemaining) {
    var newPerms = [];
    if(roundsRemaining === 0) return permsSoFar;
    for (var i = 0; i < permsSoFar.length; i++) {
      newPerms.push(permsSoFar[i].concat('r'));
      newPerms.push(permsSoFar[i].concat('p'));
      newPerms.push(permsSoFar[i].concat('s'));
    }
    return playGame(newPerms, roundsRemaining-1);
  }
  
  return playGame(['r','p','s'], roundCount-1);
}
