/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const right = [];
  const left = x.toString().split("");
  left.forEach((el) => {
    right.unshift(el);
    // probably no a good idea?
    // inserting/removing element into the beginning of the array needs to reindex. which means o(n) operation
  });

  return right.join() === left.join();
};
