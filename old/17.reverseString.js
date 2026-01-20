//split string into chars
//loop through it and push the char from the end of the array
//join it back with .join("")
function reverse(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

console.log(reverse("Reverserthis"));
