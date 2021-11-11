/**
 * Reference
 * %
 * %
 * 
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
	const rowArr = new Array(9).fill(new Array(9).fill(0));
	const columnArr = new Array(9).fill(new Array(9).fill(0));
	const squareArr = new Array(9).fill(new Array(9).fill(new Array(9).fill(0)));

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] !== '.') {
				const value = parseInt(board[i][j]);
				rowArr[i][value - 1]++;
				columnArr[j][value - 1]++;
				squareArr[parseInt(i / 3)][parseInt(j / 3)][value - 1]++;

				if (rowArr[i][value - 1] > 1 || columnArr[j][value - 1] > 1 || squareArr[parseInt(i / 3)][parseInt(j / 3)][value - 1] > 1) return false;
			}
		}
	}
	return true;
};

/**
 * 一次遍历
 */

// test
const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
console.log(isValidSudoku(board))