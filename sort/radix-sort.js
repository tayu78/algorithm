/**
 *  returns the digit in num at the given place value
 */

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// console.log(getDigit(12345, 0)); // 5

/**
 * returns the number of digits in num
 */

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(123));

/**
 * given an array of numbers, returns number of digits in the largest numbers in the list
 */

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

// console.log(mostDigits([23, 567, 124454, 90]));

/**
 * 1. figure out how many digits the largest number has
 * 2. loop from i = 0 up to this largest number of digits
 * 3. for each iteration of the loop:
 *    - create buckets for each digit(0 to 9)
 *    - place each number in the correspoinding bucket based on its ith digit
 * 4. replace our existing array with values in our buckets starting with o and going up to 9
 * 5. return list at the end
 */

function radixSort(nums) {
  const maxDigitsCount = mostDigits(nums);
  for (let i = 0; i < maxDigitsCount; i++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      digitBuckets[digit].push(nums[j]);
    }
    nums = digitBuckets.flat();
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
