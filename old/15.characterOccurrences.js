//split strings into a single char
//make an empty object to store char and count of it
//loop through it and store the char=>if obj[char] = true, obj[char]=+1 otherwise, obj[char]=1
function countOccurrences(string) {
  let stringToLoop = string.toLowerCase().replace(/[^\w]/g, "");
  let count = {};

  for (let i = 0; i < stringToLoop.length; i++) {
    if (count[stringToLoop[i]]) {
      count[stringToLoop[i]] += 1;
    } else {
      count[stringToLoop[i]] = 1;
    }
  }
  return count;
}

console.log(countOccurrences("Helloh Wworld"));
