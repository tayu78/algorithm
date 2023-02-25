/*
 * 
    Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

    countUniqueValues([1,1,1,1,1,2]) // 2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
    countUniqueValues([]) // 0
    countUniqueValues([-2,-1,-1,0,1]) // 4

    
 */

function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
    j++;
  }
  return i + 1;
}
