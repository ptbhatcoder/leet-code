const UPPER = 10**7;
/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    let low = 1, high = UPPER;
    let ans = 0;
    while(low <= high){
        const mid = low + ((high - low) >> 1);
        let sets = 0;
        for(const candy of candies){
            sets += Math.floor(candy / mid);
        }
        if(sets >= k){
            low = mid + 1;
            ans = mid;
        } else high = mid - 1;
    }
    return ans;
};