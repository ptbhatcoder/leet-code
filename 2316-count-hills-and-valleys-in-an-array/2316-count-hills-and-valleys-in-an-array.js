/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    const n = nums.length;
    const last = n - 1;
    let prev = 0;
    let ans = 0;
    for(let i = 1; i < last; i++){
        const cur = nums[i], left = nums[prev], right = nums[i+1];
        const isPeak = cur > left && cur > right;
        const isValley = cur < left && cur < right;
        if(isPeak || isValley){
            ans++;
            prev = i;
        }
    }
    return ans;
};