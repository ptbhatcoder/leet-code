/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(vals) {
    let nums = vals;
    const check = () => {
        const vals = new Set;
        for(const num of nums){
            if(vals.has(num)) return false;
            vals.add(num);
        }
        return true;
    }
    let ops = 0;
    while(!check()){
        nums = nums.slice(3);
        ops++;
    }
    return ops;
};