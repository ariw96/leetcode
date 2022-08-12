var lengthOfLongestSubstring = function (s) {
	let string = "";
	let curString = "";
	for (let i = 0; i < s.length; i++) {
		if (!curString.includes(s[i])) {
			curString += s[i];
			if (curString.length > string.length) {
				string = curString;
			}
		} else {
			curString = curString.substring(curString.indexOf(s[i]) - 1);
		}
		console.log([curString, string]);
	}
	return string;
};
console.log(lengthOfLongestSubstring("pwwkew"));
