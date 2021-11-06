/**
 * 实现 strStr() 函数
 * Easy (Reference)
 * 19%
 * 51%
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
  
  for (let i = 0; i + nLen <= hLen; i++) {
    let flag = true;
    
    for (let j = 0; j < nLen; j++) {  
      if (haystack[i + j] !== needle[j]) {
        flag = false;
        break;
      };
    }
    
    if (flag) return i;
  }
  
  return -1;
};

// test
console.log(strStr("hello", "eell"));

/**
 * 在28.js 基础上的优化(2点优化)
 * 
 * PS: 该题还有很多算法，略
 */