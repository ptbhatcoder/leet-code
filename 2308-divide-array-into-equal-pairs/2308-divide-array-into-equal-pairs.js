/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let set = new Array(500).fill(0);
    for(const num of nums){
        const key = num - 1;
        if(set[key] > 0) set[key]--;
        else set[key]++;
    }
    return set.reduce((ac, s) => ac + s, 0) === 0;
};