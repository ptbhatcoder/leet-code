/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    const dp = new Array(n).fill(1);
    const prev = Array.from({ length:n },(_,i) => i);
    let max = 0, iMax = -1;
    for(let i = 0; i < n; i++){
        const num = nums[i];
        for(let j = 0; j < i; j++){
            const den = nums[j];
            if(num % den === 0 && (dp[j] + 1) > dp[i]){
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if(dp[i] > max){
            max = dp[i];
            iMax = i;
        }
    }

    const res = [];
    let i = iMax;
    let pi = -1;
    while(pi !== i){
        res.push(nums[i]);
        pi = i;
        i = prev[i];
    }
    return res;
};