var lengthOfLongestSubstring = function (s) {
	let string = "";
	let curString = "";

	for (let i = 0; i < s.length; i++) {
		if (curString.includes(s[i])) {
			curString = curString.substring(curString.indexOf(s[i]) + 1);
		}
		curString += s[i];
		if (curString.length > string.length) {
			string = curString;
		}
	}
	return string.length;
};
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("aabaab!bb"));
