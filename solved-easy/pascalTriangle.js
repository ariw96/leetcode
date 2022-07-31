var generate = function (numRows) {
	if (numRows === 0) {
		return [];
	}
	if (numRows === 1) {
		return [[1]];
	}
	let triangle = [[1]];
	for (let i = 1; i < numRows; i++) {
		let preRow = triangle[i - 1];
		let curRow = [1];
		for (let j = 1; j < preRow.length; j++) {
			curRow.push(preRow[j - 1] + preRow[j]);
		}
		curRow.push(1);
		triangle.push(curRow);
	}
	return triangle;
};
