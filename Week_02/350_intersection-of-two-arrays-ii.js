/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    if (nums1.length < nums2.length) [nums1, nums2] = [nums2, nums1]
    const result = []
    for (let i = 0; i < nums1.length; i++) {
        let key = nums2.indexOf(nums1[i])
        if (key !== -1) {
            result.push(...nums2.splice(key, 1))
        }
    }

    return result
};
