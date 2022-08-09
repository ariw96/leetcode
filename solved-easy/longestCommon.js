var longestCommonPrefix = function (strs) {
	let prefix = "";
	if (strs.length === 0) {
		return "";
	}
	if (strs.length === 1) {
		return strs[0];
	}

	let sorted = strs.sort((a, b) => a.length - b.length);

	let shortest = sorted[0];
	for (let i = 0; i < shortest.length; i++) {
		let char = shortest[i];
		for (let j = 1; j < strs.length; j++) {
			if (sorted[j][i] !== char) {
				return prefix;
			}
		}
		prefix += char;
	}
	return prefix;
};
var longestCommonPrefix2 = function (strs) {
	while (strs.length > 1) {
		if (strs[0].length > strs[strs.length - 1].length) {
			let temp = strs[0];
			strs[0] = strs[strs.length - 1];
			strs[strs.length - 1] = temp;
		}
		for (let i = 0; i < strs[0].length; i++) {
			if (strs[0][i] !== strs[strs.length - 1][i]) {
				strs[0] = strs[0].substring(0, i);
				i = strs[0].length;
			}
		}
		strs.pop();
	}
	if (strs[0]) {
		return strs[0];
	}
	return "";
};
console.log(longestCommonPrefix2(["flower", "flow", "flight"]));
