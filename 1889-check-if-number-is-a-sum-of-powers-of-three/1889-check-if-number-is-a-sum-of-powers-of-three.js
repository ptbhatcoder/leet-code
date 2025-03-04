/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    let val = n;
    while(val){
        const den = val % 3;
        if(den === 2) return false;
        val -= den;
        val /= 3;
    }
    return true;
};