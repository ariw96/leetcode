var exist = function (board, word) {
	let curLetterBoard = board[0][0];
	let curLetterWord = word[0];
	let indexW = 0;
	let indexH = 0;
	while (indexH < board.length) {
		if (indexW === board[0].length) {
			indexW = 0;
		}
		indexH++;
		indexW++;
	}
	return curLetterWord;
};
console.log(
	exist(
		[
			["A", "B", "C", "E"],
			["S", "F", "C", "S"],
			["A", "D", "E", "E"],
		],
		"ABCCED"
	)
);
