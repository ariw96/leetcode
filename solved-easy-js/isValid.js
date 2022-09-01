var isValid = function (s) {
	// Stack to store left symbols
	const stack = [];
	// Loop for each character of the string
	for (let i = 0; i < s.length; i++) {
		// If left symbol is encountered
		if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
			stack.push(s[i]);
		}
		// If right symbol is encountered
		else if (
			s[i] === ")" &&
			stack.length !== 0 &&
			stack[stack.length - 1] === "("
		) {
			stack.pop();
		} else if (
			s[i] === "}" &&
			stack.length !== 0 &&
			stack[stack.length - 1] === "{"
		) {
			stack.pop();
		} else if (
			s[i] === "]" &&
			stack.length !== 0 &&
			stack[stack.length - 1] === "["
		) {
			stack.pop();
		}
		// If none of the valid symbols is encountered
		else {
			return false;
		}
	}
	return stack.length === 0;
};
console.log(isValid("(]"));
