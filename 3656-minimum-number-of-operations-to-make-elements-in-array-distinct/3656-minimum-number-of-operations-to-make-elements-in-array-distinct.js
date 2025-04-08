/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const n = nums.length;
    const check = (start) => {
        const vals = new Set;
        for(let i = start; i < n; i++){
            const num = nums[i];
            if(vals.has(num)) return false;
            vals.add(num);
        }
        return true;
    }
    let ops = 0;
    let start = 0;
    while(!check(start) &&  start < n){
        ops++;
        start += 3;
    }
    return ops;
};