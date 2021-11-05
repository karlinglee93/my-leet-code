/**
 * https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnhbqj/
 *
 * Easy (Pass)
 * %
 * %
 *
 * Write a function that reverses a string. The input string is given as an array of characters s.
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function (s) {
	const len = s.length;
	let left = 0;
	let right = len - 1;
  
	while (left < right) {
	  // reference: [s[left], s[right]] = [s[right], s[left]]
	  let temp = s[left];
	  s[left] = s[right];
	  s[right] = temp;
	  left++;
	  right--;
	}
  };
  