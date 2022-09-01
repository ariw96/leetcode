// var reverse = function (x) {
// 	let isNegative = x < 0;
// 	if (isNegative) {
// 		x = -x;
// 	}
// 	reverseStr = x.toString().split("").reverse().join("");
// 	reverseInt = parseInt(reverseStr);
// 	if (isNegative) {
// 		reverseInt = -reverseInt;
// 	}
// 	return reverseInt;
// };
const reverseInt = function (x) {
	let reverse = 0;
	let isNegative = x < 0;
	if (isNegative) {
		x = -x;
	}
	while (x != 0) {
		let lastDigit = x % 10;
		x = Math.floor(x / 10);
		reverse = reverse * 10 + lastDigit;
		if (reverse > Math.pow(2, 31) - 1 || reverse < Math.pow(-2, 31)) {
			return 0;
		}
	}
	if (isNegative) {
		reverse = -reverse;
	}
	return reverse;
};
console.log(reverseInt(12300));
