/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function(n) {
    if(n < 2) return n;
    let c = 0;
    while((1 << c) <= n) c++;
    return (((1 << c) - 1) - minimumOneBitOperations(n - (1 << (c - 1))));
};