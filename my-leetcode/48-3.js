/**
 * Middle
 * Reference
 * 76%
 * 12%
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    
    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - 1 - i][j]] = [matrix[n - 1 - i][j], matrix[i][j]];
        }                
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }                
    }
};

/**
 * 找规律
 * 
 * 
 */