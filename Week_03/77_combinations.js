/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
	let res = [];
	isCombine(1, []);
	return res;
	function isCombine(count, arr) {
		if (arr.length == k) {
			// 当达到规定长度
			res.push([...arr]);
			return;
		}
		for (let i = count; i <= n; i++) {
			arr.push(i);
			isCombine(i + 1, arr);
			arr.pop(); // 回溯
		}
	}
};
