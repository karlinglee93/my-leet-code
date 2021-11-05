/**
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * First Unique Character in a String
 * 
 * Easy (Reference)
 * %
 * %
 *
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	const len = s.length;
	const map = new Map();
	let res = -1;

	for (let i = 0; i < len; i++) {
		let target = s[i];
		if (map.has(target)) {
			map.set(target, -1);
		} else {
			map.set(target, i);
		}
	}

	for (let value of map.values()) {
		if (value !== -1) {
			res = value;
			break;
		}
	}

	return res;
};

// test
console.log(firstUniqChar("leetcode"))

/**
 * 1. 看到统计个数的题，首选哈希
 * 2. Store index by map
 */