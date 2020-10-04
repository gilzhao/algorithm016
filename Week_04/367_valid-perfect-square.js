/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num == 1) return true
    let left = 1, right = num, x, quessSquared;
    while (left <= right) {
        x = parseInt((left + right) / 2)
        quessSquared = x * x

        if (quessSquared == num) {
            return true
        } else if (quessSquared > num) {
            right = x - 1
        } else {
            left = x + 1
        }
    }

    return false
};
