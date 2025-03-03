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
    return [...lt, ...Array.from({ length:eq }, _ => pivot), ...gt];
};