/**
 * Middle
 * Reference - optimise 38.js
 * 23%
 * 38%
 * 
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let str = '1';
    
    for (let i = 1; i < n; i++) {
        let sb = [];
        let start = 0;
        let pos = 0;
        
        while (pos < str.length) {
            while (pos < str.length  && str[start] === str[pos]) {
                pos++;
            }
            sb.push(`${pos - start}${str[start]}`);
            start = pos;
        }
        str = sb.join('');
    }
    
    return str;
};

// test
console.log(countAndSay(5));