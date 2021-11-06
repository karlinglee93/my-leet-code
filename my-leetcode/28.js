/**
 * 实现 strStr() 函数
 * Easy (Pass)
 * 6%
 * 76%
 * 
 *
 * 
 *
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const hLen = haystack.length;
  const nLen = needle.length;
    
  if (nLen === 0) return 0;
  if (hLen < nLen) return -1;
  
  for (let i = 0; i < hLen; i++) {
    let start = i;
    let flag = true;
    
    for (let j = 0; j < nLen; j++) {  
      if (haystack[start] !== needle[j]) {
        flag = false;
        break;
      };
      start++;
    }
    
    if (flag) return i;
  }
  
  return -1;
};

// test
console.log(strStr("hello", "eell"));

/**
 * 可以理解成JS 的str.indexOf()
 */