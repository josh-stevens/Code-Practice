// Given a string, return true if it contains all balanced parenthesis (), curly-brackets {},
// and square-brackets [].

function isBalanced (str) {
  var stack = [];
  var lastOpen;
  
  for (var char = 0; char < str.length; char++) {
    switch(str[char]) {
      
      case "(":
        stack.push("(");
        break;
      
      case "{":
        stack.push("{");
        break;
        
      case "[":
        stack.push("[");
        break;
        
      case ")":
        lastOpen = stack.pop();
        if (lastOpen !== "(") return false;
        break;
        
      case "}":
        lastOpen = stack.pop();
        if (lastOpen !== "{") return false;
        break;
        
      case "]":
        lastOpen = stack.pop();
        if (lastOpen !== "[") return false;
        break;
    }
  }
  
  return !stack.length;
}
