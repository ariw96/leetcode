var moveZeroes = function (nums) {
	let n = nums.length;
	for (let i = 0; i < n; i++) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			nums.push(0);
			i--;
			n--;
		}
	}
	return nums;
};
