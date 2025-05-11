/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    if(arr.length < 3) return false;
    const n = arr.length;
    for(let i = 2;  i < n; i++){
        if((arr[i] & 1) && (arr[i-1] & 1) && (arr[i-2] & 1)) return true;
    }
    return false;
};