/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    let max = -Infinity, total = 0;
    for(const candy of candies){
        max = Math.max(max, candy);
        total += candy;
    }
    if(total < k) return 0;
    let s = 1, e = max, res = 0;
    const getPileCount = (size) => candies.reduce((acc, candy) => acc + Math.floor(candy / size),0);
    while(s <= e){
        const mid = s + ((e - s) >> 1);
        const pileCount = getPileCount(mid);
        if(pileCount >= k){
            res = mid;
            s = mid + 1;
        } else e = mid - 1;
    }
    return res;
};