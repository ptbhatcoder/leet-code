/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let res = 0;
    for(const num of nums){
        if(10 <= num && num <= 99) res++;
        else if(1000 <= num && num <= 9999) res++;
        else if(num === 100000) res++;
    }
    return res;
};