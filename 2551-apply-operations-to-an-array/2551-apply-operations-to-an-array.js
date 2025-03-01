/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    const n = nums.length;
    const ops = n - 1;
    const res = [...nums];
    for(let i = 0; i < ops; i++){
        if(nums[i] === nums[i+1]){
            res[i] = 2 * nums[i];
            i++;
            res[i] = 0;
        } else res[i] = nums[i];
    }
    let idx = 0;
    for(let i = 0; i < n; i++){
        if(res[i] > 0){
            res[idx++] = res[i];
        }
    }
    while(idx < n) res[idx++] = 0;
    return res;
};