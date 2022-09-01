class Node {
	constructor(d) {
		this.data = d;
		this.left = null;
		this.right = null;
	}
}
var sortedArrayToBST = function (nums) {
	if (nums === null || !nums.length) return null;
	let mid = Math.floor(nums.length / 2);
	const node = new Node(nums[mid]);
	node.left = sortedArrayToBST(nums.slice(0, mid));
	node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
	return node;
};
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
