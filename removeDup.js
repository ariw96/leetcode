var removeDuplicates = function (nums) {
	let arr = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums;
};
console.log(removeDuplicates([1, 1, 2]));
