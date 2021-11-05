/**
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * First Unique Character in a String
 * 
 * Easy (Pass)
 * 77%
 * 80%
 *
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	const len = s.length;
	let res = -1;

	for (let i = 0; i < len; i++) {
		let target = s[i];
		if (s.indexOf(target) !== -1 
			&& s.indexOf(target) === s.lastIndexOf(target)) {
			res = i;
			break;
		}
	}

	return res;
};

// test
console.log(firstUniqChar("leetcode"))