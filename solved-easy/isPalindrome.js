var isPalindrome = function (s) {
	let map = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	let newS = s
		.toLowerCase()
		.split("")
		.filter((item) => {
			return map.includes(item);
		})
		.join("");
	console.log(newS);
	return newS === newS.split("").reverse().join("");
};
isPalindrome("0P");
