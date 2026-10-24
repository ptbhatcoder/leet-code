/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    let rev = 0, val = x;
    while(val > 0){
        const d = val % 10;
        val = (val - d) / 10;
        rev = (rev * 10) + d;
    }
    return rev === x;
};