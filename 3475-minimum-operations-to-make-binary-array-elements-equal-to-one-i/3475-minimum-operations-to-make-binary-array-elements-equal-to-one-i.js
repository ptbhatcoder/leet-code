/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;
    const last = n - 3;
    let flips = 0;
    const flip = i => {
        nums[i] = (1 + nums[i]) % 2;
    }
    for(let i = 0; i <= last; i++){
        if(nums[i] === 0){
            flips++;
            flip(i);
            flip(i+1);
            flip(i+2);
        }
    }
    return nums.at(-1) === 1 && nums.at(-2) === 1 ? flips : -1;
};