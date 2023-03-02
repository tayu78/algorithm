/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    diff = target - nums[i];
    const index = nums.indexOf(diff);
    if (index >= 0 && index != i) return [i, index];
  }
};
