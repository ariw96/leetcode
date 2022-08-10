function merge(nums1, m, nums2, n) {
	let arr = [];
	let index2 = 0;
	for (let i = 0; i < m + n; i++) {
		if (nums1[i] === 0) {
			arr.push(nums2[index2]);
			index2++;
		} else if (nums1[i] < nums2[index2]) {
			arr.push(nums1[i]);
		} else {
			arr.push(nums2[index2]);
			index2++;
		}
	}
	return arr;
}
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
