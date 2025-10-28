/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
    const n = nums.length;
    const pre = new Array(n);
    const suf = new Array(n);
    let left = 0; right = 0;
    for(let i = 0; i < n; i++){
        pre[i] = left + nums[i];
        suf[n-1-i] = right + nums[n-1-i];
        left = pre[i];
        right = suf[n-1-i];
    }
    let valid = 0;
    for(let i = 0; i < n; i++){
        if(nums[i] === 0 && Math.abs(pre[i] - suf[i]) < 2){
            valid++;
            if(pre[i] === suf[i]) valid++;
        }
    }
    return valid;
};