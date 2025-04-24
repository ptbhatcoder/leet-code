/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    const expected = new Set(nums).size;
    const n = nums.length;
    let res = 0;


    for(let l = 0; l < n; l++){
        const cur = new Set;
        for(let r = l; r < n; r++){
            cur.add(nums[r]);
            if(cur.size === expected) res++;
        }
    }
    return res;
};