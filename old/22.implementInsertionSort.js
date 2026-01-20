//1.we will have 3 pointer, i, j, j-1.
//2.i will start as 1, it will increase by 1 every loop.
//3.we will have another while loop inside where j = i and companre array[j] and array[j-1].
//4.if array[j] < array[j-1], we will swap their position like [array[j - 1], array[j]] = [array[j], array[j - 1]].
//5.decrease j.
//6.and companre array[j] and array[j-1].
//7. if j is at 0 index. while loop ends and starts outer loop to increase i.
//8. repeat this to sort array.

function insertionSort(array) {
  for (i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j--;
    }
  }
  return array;
}

console.log(insertionSort([1, 4, 2, 8, 5, 123, 45, 43, 23, 234, 92, 1000]));
