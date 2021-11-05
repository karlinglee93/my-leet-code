/**
 * Valid Anagram
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * 
 * Easy (Reference)
 * 67%
 * 86%
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * 
 * 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	const slen = s.length;
	const tlen = t.length;

	if (slen !== tlen) return false;

	const map = new Map();
	for (let i = 0; i < slen; i++) {
		const target = s[i].codePointAt();

		if (!map.has(target)) {
			map.set(target, 1);
		} else {
			map.set(target, map.get(target) + 1);
		}
	}

	for (let j = 0; j < tlen; j++) {
		const target = t[j].codePointAt();

		if (!map.has(target)) return false;
		map.set(target, map.get(target) - 1);
	}

	for (let value of map.values()) {
		if (value !== 0) return false;
	}

	return true;
};

// test
console.log(isAnagram("aacc", "ccac"));

/**
 * 
 */