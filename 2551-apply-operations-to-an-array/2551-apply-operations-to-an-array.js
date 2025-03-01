/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    const n = nums.length;
    const ops = n - 1;
    for(let i = 0; i < ops; i++){
        if(nums[i] === nums[i+1]){
            nums[i] = 2 * nums[i];
            i++;
            nums[i] = 0;
        };
    }
    let idx = 0;
    for(let i = 0; i < n; i++){
        if(nums[i] > 0){
            nums[idx++] = nums[i];
        }
    }
    while(idx < n) nums[idx++] = 0;
    return nums;
};