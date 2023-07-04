/**
 *  returns the digit in num at the given place value
 */

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

console.log(getDigit(12345, 0)); // 5

/**
 * returns the number of digits in num
 */

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(123));

/**
 * given an array of numbers, returns number of digits in the largest numbers in the list
 */

function mostDigit(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount);
  }

  return maxDigits;
}
