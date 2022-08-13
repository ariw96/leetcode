var maxArea = function (height) {
	let left = 0;
	let right = height.length - 1;
	let area = 0;
	while (left < right) {
		area = Math.max(
			area,
			(right - left) * Math.min(height[left], height[right])
		);
		if (height[left] > height[right]) {
			right -= 1;
		} else {
			left += 1;
		}
	}
	return area;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
