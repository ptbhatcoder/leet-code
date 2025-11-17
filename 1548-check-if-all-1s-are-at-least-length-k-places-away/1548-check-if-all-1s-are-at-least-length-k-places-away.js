/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let last = -Infinity;
    const n = nums.length;
    for(let i = 0; i < n; i++){
        const num = nums[i];
        if(num){
            const between = i - last - 1;
            if(between < k) return false;
            last = i;
        }
    }
    return true;
};