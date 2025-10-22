/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function(nums, k, numOperations) {
    nums.sort((a, b) => a - b);
    const n = nums.length;

    let left = 0, right = 0;
    let sumCount = 0;
    let result = 0;
    let left2 = 0;
    let sumCount2 = 0;
    let count = 0;
    let prev = null;

    for (const num of nums) {
        if (num === prev) {
            count++;
        } else {
            prev = num;
            count = 1;
        }

        while (nums[left] < num - k) {
            sumCount--;
            left++;
        }

        while (right < n && nums[right] <= num + k) {
            sumCount++;
            right++;
        }

        result = Math.max(result, count + Math.min(sumCount - count, numOperations));

        sumCount2++;
        while (nums[left2] < num - 2 * k) {
            sumCount2--;
            left2++;
        }
        result = Math.max(result, Math.min(sumCount2, numOperations));
    }

    return result;
};