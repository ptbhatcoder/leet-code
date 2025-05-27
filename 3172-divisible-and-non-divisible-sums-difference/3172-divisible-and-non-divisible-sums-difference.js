/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    const all = (n * (n + 1))/2;
    const lastFactor = Math.floor(n / m);
    const num2 = m * (lastFactor * (lastFactor + 1)) / 2;
    return all - 2 * num2;
};