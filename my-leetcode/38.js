/**
 * Middle
 * Pass
 * 58%
 * 5%
 * 
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res = '1';
    
    for (let i = 0; i < n - 1; i++) {
        res = calculate(res);
    }
    
    return res;
};

const calculate = (res) => {
    let str = "";
    const len = res.length;
    let slow = 0, fast = 1;
    
    while (slow < len) {
        const key = res[slow];
        const map = new Map([[key, 1]]);
        
        while (fast < len) {
            if (key === res[fast]) {
                map.set(key, map.get(key) + 1);
                fast++;
            } else {
                break;
            }
        }
        slow = fast;
        fast++;
        str += `${map.get(key)}${key}`;
    }
    
    return str;
}

// test
console.log(countAndSay(5));