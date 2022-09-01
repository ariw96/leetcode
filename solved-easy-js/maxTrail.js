function cutThemAll(lengths, minLength) {
	// Write your code here
	let result = "possible";
	while (lengths.length > 0) {
		let max = Math.max(...lengths);
		if (max < minLength) {
			result = "impossible";
			break;
		}
		lengths = lengths.map((length) => length - max);
	}
	return result;
}
console.log(maxTrailing([5, 3, 6, 7, 4]));
