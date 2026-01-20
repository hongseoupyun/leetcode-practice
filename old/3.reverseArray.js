//method1
function reverseArray(array) {
  let result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}
console.log("reverseArray=>", reverseArray(["r", "v", "e", "r", "s", "E"]));
//method2

let array2 = [5, 4, 3, 2, 1];
let reversedArray2 = array2.reduceRight((acc, el) => {
  acc.push(el);
  return acc;
}, []);
console.log("reversedArray2=>", reversedArray2);

//Method3
let array3 = [1, 2, 3, 4, 5, 6, 7, 8, "aa"];
array3.reverse();
console.log(array2);
