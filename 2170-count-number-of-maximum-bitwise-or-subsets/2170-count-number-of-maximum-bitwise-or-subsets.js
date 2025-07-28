/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let maxOr = 0;
    for(const num of nums) maxOr |= num;
    const n = nums.length;
    const last = 1 << n;
    let res = 0;
    for(let i = 0; i < last; i++){
        let cur = 0;
        for(let j = 0; j < n; j++){
            if((1 << j) & i) cur |= nums[j];
        }
        if(cur === maxOr) res++;
    }
    return res;
};