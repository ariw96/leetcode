var missingNumber = function (nums) {
	if (nums.length === 0) return 0;
	if (nums.length > Math.max(...nums)) return nums.length;
	for (let i = 0; i < nums.length; i++) {
		if (!nums.includes(i)) {
			return i;
		}
	}
};
