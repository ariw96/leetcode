var majorityElement = function (nums) {
	let map = {};
	let max = 0;
	let maxNum = nums[0];
	for (let i = 0; i < nums.length; i++) {
		if (map[nums[i]]) {
			map[nums[i]]++;
			if (map[nums[i]] > max) {
				max = map[nums[i]];
				maxNum = nums[i];
			}
		} else {
			map[nums[i]] = 1;
		}
	}
	return maxNum;
};
