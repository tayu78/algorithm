/**
 * 1. start by picking the second element in the array
 * 2. now compare the second element with the one before it and swap if necessary
 * 3. continue to the next element and if it's in the incorrect order, iterate through
 *    the sorted portion to place the element in the correct place
 * 4. repeat until the array is sorted
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    tmp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > tmp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = tmp;
  }

  return arr;
}

// this is one of bubble sort?
// function insertionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j > 0; j--) {
//       if (arr[j] > arr[j - 1]) break;
//       [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//     }
//   }

//   return arr;
// }

console.log(insertionSort([5, 3, 7, 1, 2, 4]));
