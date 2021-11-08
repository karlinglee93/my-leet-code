/**
 * Pass
 * 7%
 * 10%
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s === "") return true;
  
  const arr = new Array();
  const len = s.length;
  s = s.toLowerCase();
  
  // Reference: ASCII 字符顺序
  for (let i = 0; i <len; i++) {
    if (s[i] <= '9' && s[i] >= '0' || s[i] <= 'z' && s[i] >= 'a') arr.push(s[i]);
  }

  const arrLen = arr.length;
  
  for (let left = 0, right = arrLen - 1; left < right; left++, right--) {
    if (arr[left] !== arr[right]) return false;
  }
  
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))

/**
 * 1. 回文问题的解法：双指针、reverse()
 */