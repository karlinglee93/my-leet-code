/**
 * Valid Anagram
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * 
 * Easy (Reference)
 * 86%
 * 90%
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
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

   // s and t 是26个小写字母之一，将其个数用数组的索引表示
	const arr = new Array(26).fill(0);
	
	for (let i = 0; i < slen; i++) {
		const target = s[i].codePointAt() - 'a'.codePointAt();
      arr[target] += 1;
	}

	for (let j = 0; j < tlen; j++) {
		const target = t[j].codePointAt() - 'a'.codePointAt();
      arr[target] -= 1;
	}

	for (let item of arr) {
	  if (item !== 0) return false;
	}

	return true;
};

// test
console.log(isAnagram("aacc", "ccac"));
console.log(isAnagram("aacc", "caac"));
/**
 * 1. 是对242.js 的优化
 * 2. 了解str.charPointAt() 和str.codePointAt() 的区别
 * 3. 进而了解str.fromCharCode() 和str.fromCodePoint() 的区别
 */