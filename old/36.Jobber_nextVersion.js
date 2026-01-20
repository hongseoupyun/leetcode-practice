/*
Semantic Versions
You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.
Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.
For example

nextVersion("1.2.3") === "1.2.4";
nextVersion("0.9.9") === "1.0.0";
nextVersion("1") === "2";
nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9";
nextVersion("9.9") === “10.0";

Rules
No number but the first may be greater than 9: if any are, you must set them to 0 and increment the next number in sequence.
You can assume all tests inputs to be valid.
*/

//1.convert string to array with numbers to loop and chage elements.
//2.loop throuth the array and check if the last value is 9 then change the value to 0 unless it is the first value of the array.
//3.If the last value from the array is not 9, value ++ and end the loop.
//4.Put the arr back to string and return

function nextVersion(string) {
  const arr = string.split(".").map((elm) => Number(elm)); //returns array with strings converted to number

  //For loop to check the value
  for (let i = arr.length - 1; i >= 0; i--) {
    //if the value is 9 then make it 0 and check next one unless it is the first value of array
    //otherwise, do value + 1 and end the loop
    if (arr[i] === 9 && i !== 0) {
      arr[i] = 0;
    } else {
      arr[i]++;
      break;
    }
  }
  //put it back to string
  return arr.join(".").toString();
}

console.log(nextVersion("1.2.3")); //"1.2.4";
console.log(nextVersion("0.9.9")); //"1.0.0";
console.log(nextVersion("1")); //"2";
console.log(nextVersion("1.2.3.4.5.6.7.8")); //"1.2.3.4.5.6.7.9";
console.log(nextVersion("9.9")); // “10.0";

module.exports = nextVersion;
