var reverseString = function (s) {
	const arr = s.split("");
	let arrRev = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		arrRev.push(arr[i]);
	}
	console.log(arrRev.join(""));
	console.log("aaaa");
	return arrRev.join("");
};
console.log(reverseString("hello"));
