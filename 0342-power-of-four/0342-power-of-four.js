/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n <= 0) return false;
    let prev = n - 1;
    if(n & prev) return false;
    let c = 0;
    while(prev){
        prev >>= 1;
        c++;
    }
    return (c & 1) === 0
};