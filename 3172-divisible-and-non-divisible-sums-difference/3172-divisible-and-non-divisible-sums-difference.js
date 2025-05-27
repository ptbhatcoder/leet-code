/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    const all = (n * (n + 1))/2;
    let num2 = 0;
    for(let i = 1; i * m <= n; i++) num2 += (i * m); 
    const num1 = all - num2;
    return num1 - num2;
};