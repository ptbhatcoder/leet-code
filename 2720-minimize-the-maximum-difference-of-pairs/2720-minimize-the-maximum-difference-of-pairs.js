
function canFormPairs(nums, mid, p) {
    let count = 0;
    for (let i = 0; i < nums.length - 1 && count < p;) {
        if (nums[i+1] - nums[i] <= mid) {
            count++;
            i += 2;
        } else {
            i++;
        }
    }
    return count >= p;
}
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function minimizeMax(nums, p) {
    nums.sort((a, b) => a - b);
    
    let left = 0, right = nums[nums.length - 1] - nums[0];
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canFormPairs(nums, mid, p)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}
