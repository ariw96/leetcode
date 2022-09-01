var isSymmetric = function (root) {
	if (!root) return true;

	return isMirror(root.left, root.right);
};
function isMirror(node1, node2) {
	// if both trees are empty,
	// then they are mirror image
	if (node1 === null && node2 === null) return true;
	if (node1 === null || node2 === null) return false;
	if (node1.val !== node2.val) return false;
	return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
}
