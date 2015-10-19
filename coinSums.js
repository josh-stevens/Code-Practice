// Given a given number of pence, return the possible number of ways someone could make change
// using UK coins (1,2,5,10,20,50,100,200).

function coinSums (target) {
  var coins = [1,2,5,10,20,50,100,200];
  var count = 0;
  var coin;
  var perms = [];
  
  while(coin=coins.pop()) {
    var newPerms = [];
    for(var i = 1; i * coin <= target; i++) {
      if (i*coin === target) count++;
      else {
        newPerms.push(coin*i)
        for (var j = 0; j < perms.length; j++) {
          if (perms[j] + coin*i === target) count++;
          else if (perms[j] + coin*i < target) {
            newPerms.push(perms[j]+coin*i);
          }
        }
      }
    }
    perms = perms.concat(newPerms);
  }
  
  return count;
  }
