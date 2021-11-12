/**
 * Reference
 * %
 * %
 * 
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
	// two implementations, but the first one shows wrong?
	// When fill gets passed an object, it will copy the reference and fill the array with references to that object.
	// const rows = new Array(9).fill(new Array(9).fill(0));
	// const columns = new Array(9).fill(new Array(9).fill(0));
	// const subboxes = new Array(3).fill(new Array(3).fill(new Array(9).fill(0)));

	const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] !== '.') {
				const value = parseInt(board[i][j]);
				rows[i][value - 1]++;
				columns[j][value - 1]++;
				subboxes[parseInt(i / 3)][parseInt(j / 3)][value - 1]++;

				if (rows[i][value - 1] > 1 || columns[j][value - 1] > 1 || subboxes[parseInt(i / 3)][parseInt(j / 3)][value - 1] > 1) {
					return false
				};
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