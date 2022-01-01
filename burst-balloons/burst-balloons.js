/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(iNums) {
    const nums = new Array(iNums.length + 2);
    let n = 1;
    iNums.forEach(a => {
        if(a > 0){
            nums[n++] = a;
        }
    });
    nums[0] = nums[n++] = 1;
    
    const dp = [];
    for(let i = 0; i <= n;i++){
        const p = [];
        for(let j = 0; j <= n;j++){
            p.push(0);
        }
        dp.push(p);
    }
    
    for(let k = 2; k < n; k++){
        for(let left = 0; left < n-k; left++){
            const right = left + k;
            for(i = left + 1; i < right; i++){
                dp[left][right] = Math.max(dp[left][right], dp[left][i] + dp[i][right] + nums[left] * nums[i] * nums[right]);
            }
        }
    }
    
    return dp[0][n-1];
};