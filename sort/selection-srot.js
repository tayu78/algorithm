/**
 * 1. store the first element as the smallest value we've seen so far
 * 2. compare this item to the next item in the array until we find a smaller number
 * 3. if a smaller number is found, designate that smaller number to be the new minimum and
 *    continue until the end of the array
 * 4. if the minimum is not the value(index) we initially began with, swap the to values
 * 5. repeat this with the next element until the array is sorted
 *
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    if (minIndex !== i) [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
}

console.log(selectionSort([5, 3, 7, 1, 2]));
