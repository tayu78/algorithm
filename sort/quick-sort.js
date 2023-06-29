/**
 * Given array,
 * 1. designate an element as the pivot.
 * 2. rearrange elements in the array so that all values less than the pivot are moved
 *    to left of the pivot, and all values grater than the pivot are moved to the right of the pivot
 *
 * the order of the elements on either side of the pivot does not matter
 *
 * 3. return the index of the pivot
 */

function pivot(arr, start = 0, end = arr.length - 1) {
  let switchIndex = start;
  const piv = arr[start];
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < piv) {
      switchIndex++;
      [arr[switchIndex], arr[i]] = [arr[i], arr[switchIndex]];
    }
  }
  [arr[start], arr[switchIndex]] = [arr[switchIndex], arr[start]];

  return switchIndex;
}

// console.log(pivot([4, 8, 2, 1, 10, 7, 6, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 8, 2, 1, 10, 7, 6, 3]));

// NOTE: when we pass the reference type value as a function argument, that means we pass the original one.
//       if we change the value, that affect original one
