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

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
