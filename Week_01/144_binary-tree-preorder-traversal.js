/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
	const res = [];
	const preorder = (root) => {
		if (!root) return;
		res.push(root.val);
		preorder(root.left);
		preorder(root.right);
	};

	preorder(root);
	return res;
};
