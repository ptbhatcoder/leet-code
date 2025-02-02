/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    const n = nums.length;
    for(let i = 0; i < n; i++){
        let possible = true;
        for(let prev = i, j = (i + 1) % n, c = 1; c < n && possible; c++){
            if(nums[j] < nums[prev]) possible = false;
            prev = j;
            j = (j + 1) % n;
        }
        if(possible) return true;
    }
    return false;
};