/**
 * 字符串转换整数(atoi)
 * Middle (Pass)
 * 48%
 * 30%
 * 
 *
 * 
 *
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  s = s.trim();
  let sign = ""
  let left = 0;
  const len = s.length;
  let str = "";
 
  if (s[0] === '+') {
    left++;
  } else if (s[0] === '-') {
    left++;
    sign = '-';
  }
  
  while(s[left] >= '0' && s[left] <= '9') {
    str += s[left];
    left++;
  }
  
  if (str.length === 0) return 0;
  
  let res = parseInt(sign + str);
  const min = Math.pow(-2, 31);
  const max = Math.pow(2, 31) - 1;
  
  if (res < min) {
    return min;
  } else if (res > max) {
    return max;
  } else {
    return res;
  }
};

// test
console.log(myAtoi("123-42"));

/**
 * 
 */