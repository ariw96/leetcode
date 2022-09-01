var isPowerOfThree = function (n) {
	let power = 1;
	let res = 0;
	while (res < n) {
		res = 3 ** power;
		if (res === n) {
			return true;
		}
		power++;
	}
	return false;
};
