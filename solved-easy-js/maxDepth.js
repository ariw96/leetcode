// var maxDepth = function (root) {
// 	let depth = 0;
// 	let queue = [];
// 	if (root) {
// 		queue.push(root);
// 		while (queue.length > 0) {
// 			let size = queue.length;
// 			for (let i = 0; i < size; i++) {
// 				let node = queue.shift();
// 				if (node.left) {
// 					queue.push(node.left);
// 				}
// 				if (node.right) {
// 					queue.push(node.right);
// 				}
// 			}
// 			depth++;
// 		}
// 		return depth;
// 	}
// };
const maxDepth = (root) => {
if (!root) {
return 0;
}
else {
let left = maxDepth(root.left);
let right = maxDepth(root.right);
return Math.max(left, right) + 1;
}
}