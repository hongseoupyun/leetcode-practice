//recursive and divide and coquer algorithms used
//tree structure
//1.loop through the string and put string[i] + permutaition
//2.while i increases the result will be string[i] + rest of characters combination
//eg) "abc"=>b + (a+c) = "bac" when i = 1
//eg) "abc"=>c +(a+b) = "cab" when i = 2

function permuteString(string) {
  if (!string || typeof string !== "string") {
    return "Put valid string or input!";
  } else if (string.length < 2) {
    return [string];
  }

  let result = [];

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    //Check if the string has a repeating char eg) "aaba"
    if (string.indexOf(currentChar) != i) {
      continue;
    }
    let remainingChar = string.slice(0, i) + string.slice(i + 1, string.length);
    for (let permutation of permuteString(remainingChar)) {
      result.push(currentChar + permutation);
    }
  }

  return result;
}

console.log(permuteString("aava"));
