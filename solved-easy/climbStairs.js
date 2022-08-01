var climbStairs = function (n) {
	let step1 = 1;
	let step2 = 1;
	for (let i = 2; i <= n; i++) {
		let temp = step1 + step2;
		step1 = step2;
		step2 = temp;
	}
	return step2;
};
const climbStairs2 = function (n) {
	let dp = [0, 1, 2];
	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
};
