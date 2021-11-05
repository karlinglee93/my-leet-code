/**
 * Valid Anagram
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * 
 * Easy (Reference)
 * 40%
 * 8%
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  
	let sarr = s.split("");
	let tarr = t.split("");
	
	return sarr.sort().toString() == tarr.sort().toString();
};

// test
console.log(isAnagram("aacc", "ccac"));
console.log(isAnagram("aacc", "caac"));
/**
 * 1. 要理解什么是互为字母异位词
 * 2. 数组不能使用==、=== 判断是否相等
 */