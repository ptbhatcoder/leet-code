/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0, map = new Map; i < nums.length; i++){
        const num = nums[i];
        const key = target - num;
        if(map.has(key)) return [i, map.get(key)];
        map.set(num, i);
    }
    return [-1, -1];
};