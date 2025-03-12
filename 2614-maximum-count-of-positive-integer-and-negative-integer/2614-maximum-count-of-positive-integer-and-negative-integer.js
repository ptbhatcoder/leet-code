/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    const n = nums.length;
    let s = 0, e = n - 1;
    let neg = n;
    while(s <= e){
        const mid = s + ((e - s) >> 1);
        if(nums[mid] >= 0){
            neg = mid;
            e = mid - 1;
        } else s = mid + 1;
    }
    if(neg === n) return neg;
    if(nums[neg] > 0) return Math.max(neg, n - neg);
    let zero = n;
    s = neg, e = n - 1;
    while(s <= e){
        const mid = s + ((e - s) >> 1);
        if(nums[mid] > 0){
            zero = mid;
            e = mid - 1;
        } else s = mid + 1;
    }
    if(zero === n) return neg;
    return Math.max(neg, n - zero);
};