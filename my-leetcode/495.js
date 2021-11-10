/**
 * Reference
 * 76%
 * 33%
 * 
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    const len = timeSeries.length;
    let ans = 0;

    for (let i = 0; i < len - 1; i++) {
        if (timeSeries[i] + duration > timeSeries[i + 1]) {
            ans += timeSeries[i + 1] - timeSeries[i];
        } else {
            ans += duration;
        }
    }

    ans += duration;

    return ans;
};