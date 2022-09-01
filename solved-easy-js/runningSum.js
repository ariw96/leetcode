var runningSum = function (nums) {
	let result = [nums[0]];
	nums.reduce(function (a, b) {
		result.push(a + b);
		return a + b;
	});
	return result;
};
console.log(runningSum([1, 2, 3, 4]));
