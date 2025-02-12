const getDigitSum = (n) => {
    let s = 0;
    while(n > 0){
        const d = n % 10;
        n -= d;
        s += d;
        n /= 10;
    }
    return s;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const maxPair = {};
    let max = -1;
    for(const num of nums){
        const sum = getDigitSum(num);
        let pair = maxPair[sum] || [];
        if(pair.length < 2) pair.push(num);
        else {
            const mx = Math.max(...pair);
            const mn = Math.min(...pair);
            if(num >= mn) pair = [num, mx];
        }
        maxPair[sum] = pair;
        if(pair.length === 2) max = Math.max(max, pair[0] + pair[1]);
    }
    return max;
};