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
			map.set(target, map.get(target) + 1);
		} else {
			map.set(target, 1);
		}
	}

	for (let j = 0; j < len; j++) {
		if (map.get(s[j]) === 1) {
			res = j;
			break;
		}
	}

	return res;
};

// test
console.log(firstUniqChar("dddccdbba"))

/**
 * 1. 看到统计个数的题，首选哈希
 * 2. Store counts by map
 */