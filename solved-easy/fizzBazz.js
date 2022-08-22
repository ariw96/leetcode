function arrange(sentence) {
	// Write your code here

	let arrangeSentence = sentence
		.toLowerCase()
		.split(" ")
		.sort((a, b) => {
			if (a.length > b.length) {
				return 1;
			} else if (a.length < b.length) {
				return -1;
			} else {
				return 0;
			}
		})
		.join(" ");
	arrangeSentence.replace(".", "");
	arrangeSentence =
		arrangeSentence.charAt(0).toUpperCase() + arrangeSentence.slice(1) + ".";
	return arrangeSentence;
}
