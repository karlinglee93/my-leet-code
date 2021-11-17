/**
 * 14
 * Easy
 * Reference - optimize
 * 99%
 * 59%
 * 
 * 1. eliminate one variable - res
 * 2. eliminate one loop: it's hard to understand this
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const count = strs.length;
    const min = strs[0].length;

    for (let i = 0; i < min; i++) {
        const letter = strs[0][i];
        for (let j = 1; j < count; j ++) {
            if (i === strs[j].length || letter !== strs[j][i]) return strs[j].substring(0, i);
        }
    }

    return strs[0];
};