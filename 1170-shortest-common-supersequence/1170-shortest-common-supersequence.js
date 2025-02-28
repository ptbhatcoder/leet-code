/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    const m = str1.length, n = str2.length;
    const dp = Array.from({ length:m + 1 }, _ => Array.from({ length: n + 1 }, _ => Infinity));
    for(let i = 0; i <= m; i++){
        for(let j = 0; j <= n; j++){
            if(i === 0) dp[i][j] = j;
            else if(j === 0) dp[i][j] = i;
            else if(str1[i-1] === str2[j-1]) dp[i][j] = 1 + dp[i-1][j-1];
            else dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1]);
        }
    }
    const len = dp[m][n];
    const res = new Array(len).fill('');
    let i = m, j = n, idx = len-1;
    for(; idx >= 0 && i > 0 && j > 0; idx--){
        if(str1[i-1] === str2[j-1]){
            res[idx] = str1[i-1];
            i--;
            j--;
        } else if(dp[i-1][j] < dp[i][j-1]) {
            res[idx] = str1[i-1];
            i--;
        } else {
            res[idx] = str2[j-1];
            j--;
        }
    }
    while(i > 0){
        res[idx] = str1[i-1];
        i--;
        idx--;
    }

    while(j > 0){
        res[idx] = str2[j-1];
        j--;
        idx--;
    }

    return res.join('');
};