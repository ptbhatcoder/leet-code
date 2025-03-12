/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    const n = nums.length;
    const search = (s, e, upperBoundCondition) => {
        let res = s - 1;
        while(s <= e){
            const mid = s + ((e - s) >> 1);
            if(upperBoundCondition(nums[mid])){
                res = mid;
                s = mid + 1;
            } else e = mid - 1;
        }
        return res;
    }
    const neg = search(0, n-1, val => val < 0);
    const zero = search(neg+1, n-1, val => val === 0);
    return Math.max(neg+1, n - (1 + zero));
};