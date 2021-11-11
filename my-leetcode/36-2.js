/**
 * Reference
 * 11%
 * 7%
 * 
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			// TODO: optimise to filter '.'
			if (isValid(i, j, board) === false) return false;
		}
	}

	return true;
};

const isValid = (row, column, arr) => {
	// TODO: compare index instead of set
	const set = new Set();

	for (let j = 0; j < 9; j++) {
		const target = arr[row][j];
		if (target !== '.' && set.has(target)) {
			return false;
		} else if (target !== '.') {
			set.add(target);
		}
	}

	set.clear();
	for (let i = 0; i < 9; i++) {
		const target = arr[i][column];
		if (target !== '.' && set.has(target)) {
			return false;
		} else if (target !== '.') {
			set.add(target);
		}
	}

	set.clear();
	let row_start = parseInt(row / 3) * 3;
	let column_start = parseInt(column / 3) * 3;
	for (let i = row_start; i < row_start + 3; i++) {
		for (let j = column_start; j < column_start + 3; j++) {
			const target = arr[i][j];
			if (target !== '.' && set.has(target)) {
				return false;
			} else if (target !== '.') {
				set.add(target);
			}
		}
	}
	return true;
}

/**
 * 逐一遍历，比对的思想
 * Note: it can be optimized
 */

// test
const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
console.log(isValidSudoku(board))