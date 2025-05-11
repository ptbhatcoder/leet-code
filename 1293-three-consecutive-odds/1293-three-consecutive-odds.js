/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    const n = arr.length;
    let c = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] & 1) c++;
        else c = 0;
        if(c >= 3) return true;
    }
    return false;
};