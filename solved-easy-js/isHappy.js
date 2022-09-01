var isHappy = function (n) {
	let set = new Set();
	while (1) {
		if (n === 1) return true;
		if (set.has(n)) {
			return false;
		} else {
			set.add(n);
		}
		n = sumOfSquares(n);
	}
};
const sumOfSquares = (n) => {
	let sum = 0;
	while (n > 0) {
		let base = n % 10;
		sum = sum + base * base;
		n = Math.floor(n / 10);
	}
	return sum;
};
console.log(sumOfSquares(19));
