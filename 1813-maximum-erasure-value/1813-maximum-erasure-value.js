/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let max = 0;
    const n = nums.length;
    const pos = {};
    let l = 0, cur = 0;
    for(let r = 0; r < n; r++){
        const val = nums[r];
        last = val in pos ? pos[val] : -1;
        while(l <= last){
            cur -= nums[l];
            delete pos[nums[l]];
            l++;
        }
        cur += val;
        pos[val] = r;
        max = Math.max(max, cur);
    }
    return max;
};