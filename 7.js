/**
 * Reverse Integer
 * https://leetcode-cn.com/problems/reverse-integer/
 * 
 * Easy (Failed)
 * %
 * %
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
	let arr = x.toString().split("");
	const len = arr.length;
	let left = arr[0] === "-" ? 1 : 0;
	let right = len - 1;

	for (left, right; left < right; left++, right--) {
		[arr[left], arr[right]] = [arr[right], arr[left]];
	}

	return parseInt(arr.join(''));
};

// test
console.log(reverse(123));
console.log(reverse(-123));

/**
 * Problems
 * Q: str[i] = str[j] 为什么原字符串没有变化
 * A: 通过括号访问的字符串不可以对其进行修改等操作，因为字符串Object 对应的属性并不是可读或配置的。但可以通过将string 转化为array 进行
 * Q: 如何判断num 超过了range 范围?
 */