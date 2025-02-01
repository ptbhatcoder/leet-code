/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    let res = true;
    let prev = nums[0] & 1;
    for(let i = 1; res && (i < nums.length); i++){
        const cur = nums[i] & 1;
        res = res && Boolean(cur ^ prev);
        prev = cur;
    }
    return res;
};