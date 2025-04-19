/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    // [0, 1, 4, 4, 5, 7]
    const pairsBoundBy = (ceil) => {
        let s = 0, e = n - 1;
        let count = 0;
        while(s < e){
            const cur = nums[s] + nums[e];
            if(cur > ceil) e--;
            else {
                count += (e - s);
                s++;
            }
        }
        return count;
    }
    // 7 - 1 = 6
    return pairsBoundBy(upper) - pairsBoundBy(lower - 1);
};