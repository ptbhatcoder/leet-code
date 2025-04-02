/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let max = 0;
    const n = nums.length;
    for(let k = 2; k  < n; k++){
        let i = 0;
        for(let j = 1; j < k; j++){
            max = Math.max(max, (nums[i] - nums[j]) * nums[k]);
            if(nums[j] > nums[i]) i = j;
        }
    }
    return max;
};