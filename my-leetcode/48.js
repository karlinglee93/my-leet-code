/**
 * Middle
 * Pass
 * 36%
 * 91%
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const copy = JSON.parse(JSON.stringify(matrix));
    const n = matrix.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[j][n - 1 - i] = copy[i][j];
        }
    }
};

/**
 * 但是违背了原地旋转的条件
 */