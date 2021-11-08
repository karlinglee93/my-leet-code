/**
 * Reference - a loop
 * 5%
 * 30%
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s === "") return true;
  
  const len = s.length;
  let left = 0;
  let right = len - 1;
  s = s.toLowerCase();
  
  while (left < right) {
    while (left < right && !((s[left] <= '9' && s[left] >= '0') || (s[left] <= 'z' && s[left] >= 'a'))) left++;
    while (left < right && !((s[right] <= '9' && s[right] >= '0') || (s[right] <= 'z' && s[right] >= 'a'))) right--;
    
    if (left < right && s[left] !== s[right]) return false;
    left++;
    right--;
  }
  
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))

/**
 * 
 */