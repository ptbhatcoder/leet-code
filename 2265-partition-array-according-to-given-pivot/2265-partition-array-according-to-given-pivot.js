/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const lt = [], gt = []; 
    let eq = 0;
    for(const num of nums){
        if(num < pivot) lt.push(num);
        else if(num > pivot) gt.push(num);
        else eq++;
    } 
    let i = 0;
    for(const num of lt) nums[i++] = num;
    while(eq-- > 0) nums[i++] = pivot;
    for(const num of gt) nums[i++] = num;
    return nums
};