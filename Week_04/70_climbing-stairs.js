/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    const step = []
    step[0] = 1
    step[1] = 2

    for (let i = 2; i < n; i++) {
        step[i] = step[i-1] + step[i-2]
    }

    return step[n-1]
};