/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let maxInc = 1, inc = 1, maxDec = 1, dec = 1;
    for(let i = 1; i < nums.length; i++){
        const cur = nums[i];
        const prev = nums[i-1];
        if(cur < prev){
            maxInc = Math.max(maxInc, inc);
            inc = 1;
            dec++;
        } else if(prev < cur) {
            maxDec = Math.max(maxDec, dec);
            dec = 1;
            inc++;
        } else {
            maxInc = Math.max(maxInc, inc);
            maxDec = Math.max(maxDec, dec);
            inc = 1;
            dec = 1;
        }
        if(i === nums.length - 1){
            maxInc = Math.max(maxInc, inc);
            maxDec = Math.max(maxDec, dec);
        }
    }
    return Math.max(maxInc, maxDec);
};