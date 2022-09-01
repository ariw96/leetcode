var singleNumber1 = function (nums) {
	let stack = [];
	for (let i = 0; i < nums.length; i++) {
		if (stack.includes(nums[i])) {
			stack.splice(stack.indexOf(nums[i]), 1);
		} else {
			stack.push(nums[i]);
		}
	}
	return stack[0];
};
var singleNumber2 = function (nums) {
	let set = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) {
			set.delete(nums[i]);
		} else {
			set.add(nums[i]);
		}
	}
	return set.values().next().value;
};
var singleNumber3 = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		let tmp = nums[i];
		nums.splice(i, 1);
		if (!nums.includes(tmp)) {
			return tmp;
		}
		nums.splice(i, 0, tmp);
	}
};
