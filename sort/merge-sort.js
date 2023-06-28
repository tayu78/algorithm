/**
 * 1. create an empty arry, take a look at the smallest values in each input arrays
 * 2. while there are still values we haven't looked at..
 *    - if the value in the first array is smaller than the value in the second array, push the value in the
 *      first array into our results and move on to the next value in the first array
 *    - if the value in the first array is larger then the value in the second array, push the value into our
 *      results and move on the next value in the second array
 * 3. once we exhaust one array, push in all remaining values from the other array
 */

function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  //   while (i < arr1.length) {
  //     results.push(arr1[i]);
  //     i++;
  //   }
  //   while (j < arr2.length) {
  //     results.push(arr2[j]);
  //     j++;
  //   }
  results.push(...arr1.slice(i), ...arr2.slice(j));

  return results;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
