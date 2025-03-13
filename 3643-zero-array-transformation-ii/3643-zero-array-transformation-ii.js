/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
    // l = 3, r = 4
    // m = 2
    // [2,0,0,-2] 
    // [2,0,2]


    // i = 0, j  = 0, cur = 1
    // line [0, 0, 0, -1]
    // 
    const n = nums.length;
    const q = queries.length;
    const change = new Array(1 + n).fill(0);
    let nextQuery = 0;
    let total = 0;
    for(let i = 0;i < n; i++){
        const num = nums[i];
        while(total + change[i] < num){
            if(nextQuery >= q) return -1;
            const [left, right, val] = queries[nextQuery];
            if(i <= right){
                change[right + 1] -= val;
                change[Math.max(left, i)] += val;
            }
            nextQuery++;
        }
        total += change[i];
    }
    return nextQuery;
};