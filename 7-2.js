/**
 * Reverse Integer
 * https://leetcode-cn.com/problems/reverse-integer/
 * 
 * Easy (Reference)
 * 50%
 * 91%
 *
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let res = 0;

	while(x) {
		res = res * 10 + (x % 10);
		x = parseInt(x / 10);
	}

	if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) res = 0;

	return res;
};

// test
console.log(reverse(123));
console.log(reverse(-123));

/**
 * 1. 整数的倒叙 -> 余数，而不是将num 转为str arr
 * 2. parseInt() 可用~~ 代替，且或者效率更高
 * 3. 了解parseInt() 与Math.floor() 的区别
 */