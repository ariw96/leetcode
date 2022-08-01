var longestCommonPrefix = function (strs) {
	let prefix = "";
	let temp = "";
	if (strs.length === 0) {
		return prefix;
	}
	if (strs.length === 1) {
		return strs[0];
	}
	let minLen = strs[0].length;
	for (let i = 1; i < strs.length; i++) {
		if (strs[i].length < minLen) {
			minLen = strs[i].length;
		}
	}
	for (let i = 0; i < strs.length; i++) {
		for (let j = 0; j < minLen; j++) {
			if (strs[i][j] === strs[i + 1][j]) {
				temp = strs[i][j];
			} else {
				return prefix;
			}
		}
		prefix = prefix + temp;
	}
	return prefix;
};
