var reverse = function (x) {
	let isNegative = x < 0;
	if (isNegative) {
		x = -x;
	}
	reverseStr = x.toString().split("").reverse().join("");
};
