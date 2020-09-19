/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return new Array(n).fill(0).map((item, i) => {
       return (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || ('' + i)
    })
};