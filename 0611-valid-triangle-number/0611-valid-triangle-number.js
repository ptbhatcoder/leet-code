/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a,b) => a - b);
    let count = 0;
    for(let i = 0; i < nums.length - 2; i++){
        let k = i + 2;
        for(let j = i + 1; j < nums.length - 1 && nums[i]; j++){
            while(k < nums.length && nums[i] + nums[j] > nums[k])
                k++;
            count += (k - j - 1);
        }
    }
    return count;
};