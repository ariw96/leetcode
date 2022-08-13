const rotate = function (matrix) {
	let len = matrix.length;
	for (let i = 0; i < len; i++) {
		for (let j = i; j < len; j++) {
			let temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}
	for (let k = 0; k < len; k++) {
		matrix[k].reverse;
	}
};
