var firstUniqChar = function (s) {
	let temp = "";
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		temp = s[i];
		if (s.includes(temp)) return count;
		count++;
	}
	return -1;
};
