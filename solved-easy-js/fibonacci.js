function fibonacci(n) {
	if (n <= 1) {
		return n;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}
function fibonacci(n) {
	if (n <= 1) {
		return n;
	}
	let fib = [0, 1];
	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib[n];
}
function fib(n, memo = []) {
	if (memo[n] !== undefined) {
		return memo[n];
	}
	if (n <= 1) {
		return n;
	}
	return fib(n - 1, memo) + fib(n - 2, memo);
}
// https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/
