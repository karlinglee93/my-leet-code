/**
 * 14
 * Easy
 * Pass
 * 82%
 * 55%
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const count = strs.length;
    let min = strs[0].length;
    let res = '';

    for (let i = 1; i < count; i++) {
        const len = strs[i].length;
        if (min > len) min = len;
    }

    for (let i = 0; i < min; i++) {
        const letter = strs[0][i];
        for (let j = 1; j < count; j ++) {
            if (letter !== strs[j][i]) return res;
        }
        res += letter;
    }

    return res;
};