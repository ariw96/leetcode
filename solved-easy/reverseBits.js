var reverseBits = function (n) {
	let str = n.toString();
	let reverseStr = str.split("").reverse().join("");
	let result = parseInt(reverseStr, 2);
	return result;
};
// https://leetcode.com/problems/reverse-bits/
