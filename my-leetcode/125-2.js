/**
 * Reference - reverse()
 * 78%
 * 19%
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s === "") return true;
  
  const arr = new Array();
  const len = s.length;
  s = s.toLowerCase();
  
  for (let i = 0; i <len; i++) {
    if (s[i] <= '9' && s[i] >= '0' || s[i] <= 'z' && s[i] >= 'a') arr.push(s[i]);
  }
  // reverse 改变数组
 const arr_rev = [...arr].reverse();
  
  return arr.join() === arr_rev.join();
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))

/**
 *
 */