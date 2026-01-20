//Math.abs = > returns absolute value of a number

//[10, 22, 28, 29, 30, 40], 54 => return [22,30]
//[1, 3, 4, 7, 10], 15 => return [4,10]

/* 

1.have a initial setting of variables 
=>  i = 0 ,
    j = arr.length - 1 ,
    result = [],
    absoluteDiff = Math.abs(arr[i]+arr[j]-target)

2.write edge case

1)when the arr has 0 or 1 element return result

3. use while(i < j) loop to loop and write edge cases

2)when the target value is 0
3)when the arr has numbers that add up to the target

4. get the sum of arr[i] and arr [j] and compare the sum and target
5. if (sum < target) i ++ and check if ( absoluteDiff(arr[i] and arr[j]) < initalabsoluteDiff)
6. if yes , reassign absoluteDiff as the new absoluteDiff and result as [arr[i],arr[j]]
7. if (sum > target) j-- and check if ( absoluteDiff(arr[i] and arr[j]) < initalabsoluteDiff)
8. if yes, reassign absoluteDiff as the new absoluteDiff and result as [arr[i],arr[j]]
9. return result when the loop is done

*/

function fn(arr, target) {
  let result = [];

  let i = 0;
  let j = arr.length - 1;
  let absoluteDiff = Math.abs(arr[i] + arr[j] - target);

  //if the arr has no element or single element
  if (arr.length < 2) return result;

  while (i < j) {
    let sum = arr[i] + arr[j];

    //If the target is 0 or the target has numbers add up to target
    if (sum === absoluteDiff || sum === target) {
      result = [arr[i], arr[j]];
      break;
    }

    if (sum < target) {
      i++;
      if (Math.abs(arr[i] + arr[j] - target) < absoluteDiff) {
        absoluteDiff = Math.abs(arr[i] + arr[j] - target);
        result = [arr[i], arr[j]];
      }
    }

    if (sum > target) {
      j--;
      if (Math.abs(arr[i] + arr[j] - target) < absoluteDiff) {
        absoluteDiff = Math.abs(arr[i] + arr[j] - target);
        result = [arr[i], arr[j]];
      }
    }
  }

  return result;
}

console.log(fn2([10, 22, 28, 29, 30, 40], 54));
console.log(fn([1, 3, 4, 7, 10], 15));
console.log(fn([5], 7));
console.log(fn([], 7));
console.log(fn([1, 2, 3, 4, -1], 0));
console.log(fn([1, 2, 3, 4], 7));
