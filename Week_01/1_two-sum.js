/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const temp = [];
	for (let i = 0; i < nums.length; i++) {
		const val = target - nums[i];
		if (temp[val] !== undefined) {
			return [temp[val], i];
		} else {
			temp[nums[i]] = i;
		}
	}
};
