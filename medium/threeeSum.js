var threeSum = function (nums) {
	nums = nums.sort();
	let middle,
		start,
		end,
		result = [];
	for (let i = 0; i < nums.length - 2; i++) {
		middle = i + 1;
		start = i;
		end = nums.length - 1;

		while (middle < end) {
			sum = nums[start] + nums[middle] + nums[end];
			if (sum === 0) {
				sum = [nums[start], nums[middle], nums[end]];
				if (!result.includes(sum)) {
					result.push(sum);
				}
				while (middle < end && nums[end] !== nums[end - 1]) end--;
				while (middle < end && nums[middle] !== nums[middle + 1]) middle++;
				end--;
				middle++;
			} else if (sum > 0) {
				end--;
			} else {
				middle++;
			}
		}
	}
	return result;
};
console.log(threeSum([0, 0, 0, 0]));
