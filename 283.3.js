/**
 * https://leetcode-cn.com/problems/move-zeroes/
 *
 * Easy (After checking)
 * 23%
 * 13%
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function (nums) {
	const len = nums.length;
	let slow = 0;
	let fast = 0;
  
	while (fast < len) {
	  if (nums[fast] !== 0) {
		// 没想到交换也行，省下了一个for 循环
		swap(slow, fast, nums);
		slow++;
	  }
	  fast++;
	}
  };
  
  const swap = (slow, fast, arr) => {
	const temp = arr[slow];
	arr[slow] = arr[fast];
	arr[fast] = temp;
  };
  
  // test
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  console.log(nums);
  