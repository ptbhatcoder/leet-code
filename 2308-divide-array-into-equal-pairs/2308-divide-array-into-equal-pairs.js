/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let set = new Set
    for(const num of nums){
        if(set.has(num)) set.delete(num);
        else set.add(num);
    }
    return set.size === 0;
};