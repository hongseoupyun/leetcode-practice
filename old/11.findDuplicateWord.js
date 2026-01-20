//make an empty array to store duplicate string
//make an empty object to store sting counts
//make an empty array to store splitted strings using .toLowerCase() and .split(" ")
//use forEach()to loop through the splitted strings array and store the world and counts
//use Object.keys to get keys from the object
//find key that is greater than 1 using forEach()

//1
const findDuplicates = function (string) {
  let duplicate = [];
  let wordFrequencyCounter = {};
  let stringArray = string.toLowerCase().split(" ").sort(); //[ 'hello', 'my', 'name', 'is', 'hello' ];

  stringArray.forEach((word) => {
    wordFrequencyCounter[word]
      ? (wordFrequencyCounter[word] += 1)
      : (wordFrequencyCounter[word] = 1); //{ hello: 2, my: 1, name: 1, is: 1 }
  });

  let allKeys = Object.keys(wordFrequencyCounter); //[ 'hello', 'my', 'name', 'is' ]

  allKeys.forEach((key) => {
    wordFrequencyCounter[key] > 1 ? duplicate.push(key) : null;
  });

  return duplicate; //["hello"]
};

console.log(findDuplicates("Hello my name is hello"));

//2
function findDuplicates2(string) {
  let duplicate = [];
  let stringArray = string.toLowerCase().split(" ").sort(); //[ 'hello', 'hello' ,'my', 'name', 'is' ];

  for (let i = 0; i < stringArray.length - 1; i++) {
    if (stringArray[i] === stringArray[i + 1]) {
      duplicate.push(stringArray[i]);
    }
  }
  return duplicate;
}

console.log(findDuplicates2("wow is wow zz"));
