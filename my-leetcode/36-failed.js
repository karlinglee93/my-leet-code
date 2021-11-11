/**
 * Failed
 * 
 * @param {character[][]} board
 * @return {boolean}
 * 
 * Idea1: for loop, but block by how to convert 3*3 rectangle
 * Idea2: join to a big array, length equals to 81 but block by how to join to
 */
var isValidSudoku = function(board) {
	let arr = [];
	board.forEach(item => arr.concat(item))

	let k = 0;
	while (k < 9) {
		let set = new Set();
		for (let i = 9 * k; i < 9 * (k + 1); i++) {
			const target = arr[i];
			if (target !== '.' && set.has(target)) {
				return false;
			} else {
				set.add(target);
			}
		}
		k++;
	}
	
	k = 0;
	set.clear();
	while (k < 9) {
		for (let i = 0; i < 81; i++) {
			if (i % 9 === k && arr[i] !== '.') {
				const target = arr[i];
				if (target !== '.' && set.has(target)) {
					return false;
				} else {
					set.add(target);
				}
			}
		}
		k++;
	}

	k = 0;
	set.clear();
	while (k < 3) {
		for (let i = 0; i < 3; i++) {
			if (arr[i] !== '.') {
				const target = arr[i + 9 * k];
				if (target !== '.' && set.has(target)) {
					return false;
				} else {
					set.add(target);
				}
			}
		}
	}

	return true;
};

0 9 18 27 36 45 54 63 72
1 10 19 28 36 46 ... 73
0 1 2, 9 10 11, 18 19 20 ...
3 4 5, 12 13 14