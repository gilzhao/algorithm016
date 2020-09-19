/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
	const res = [];
	const post = (root) => {
        if (!root) return
        if (root.children) {
            root.children.map(child => post(child))
        }
        res.push(root.val)
	};

	post(root);
	return res;
};
