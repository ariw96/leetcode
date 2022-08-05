var hammingWeight = function (n) {
	let count = 0;
	for (let i = 0; i < 32; i++) {
		if (n % 2 === 0) {
			count++;
		}
		n = n / 2;
	}
	return count;
};
