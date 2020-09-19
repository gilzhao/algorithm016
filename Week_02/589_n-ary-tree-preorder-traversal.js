/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    const res = [];
	const post = (root) => {
        if (!root) return
        res.push(root.val)
        if (root.children) {
            root.children.map(child => post(child))
        }
	};

	post(root);
	return res; 
};