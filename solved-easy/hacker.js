function jumps(flagHeight, bigJump) {
	// Write your code here
	let count = 0;
	let height = 0;
	if (bigJump === flagHeight) return 1;
	while (flagHeight > height) {
		if (flagHeight > bigJump + height) {
			height = height + bigJump;
		} else {
			height++;
		}
		count++;
	}
	return count;
}
console.log(jumps(9, 2));
