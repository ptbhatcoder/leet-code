/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    const n = nums.length;
    const search = (s, e, upperBoundCondition) => {
        if(s > e) return s - 1;
        const mid = s + ((e - s) >> 1);
        if(upperBoundCondition(nums[mid])){
            const right = search(mid + 1, e, upperBoundCondition);
            return Math.max(right, mid);
        }
        return search(s, mid - 1, upperBoundCondition);
    }
    const neg = search(0, n-1, val => val < 0);
    const zero = search(neg+1, n-1, val => val === 0);
    return Math.max(neg+1, n - (1 + zero));
};