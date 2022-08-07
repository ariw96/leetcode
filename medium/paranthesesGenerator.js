var generateParenthesis = function (n) {
	let result = [];
	let helper = function (s, left, right) {
		if (left === 0 && right === 0) {
			result.push(s);
			return;
		}
		if (left > 0) {
			helper(s + "(", left - 1, right);
		}
		if (right > left) {
			helper(s + ")", left, right - 1);
		}
	};
	helper("", n, n);
	return result;
};
