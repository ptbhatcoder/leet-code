/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;
    let last = n - 3;
    let count = 0;
    for(const num of nums){
        if(num === 0) count++;
    };
    let flips = 0;
    for(let i = 0; count > 0 && i <= last; i++){
        if(nums[i] === 1) continue;
        flips++;
        for(let j = 0; j < 3; j++){
            let val = nums[i + j];
            if(val === 0){
                count--;
                val = 1;
            } else {
                count++;
                val = 0;
            }
            nums[i + j] = val;
        }
    }

    return count > 0 ? -1 : flips;
};