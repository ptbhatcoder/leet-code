/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    const n = arr.length;
    const dp = Array.from({ length:n }, _ => Array.from({ length: n }));
    let max = 2;
    const ind = new Map();
    for(let r = 0; r < n; r++){
        const b = arr[r];
        ind.set(b, r);
        for(let c = 0; c < r; c++){
            const a = arr[c];
            const prev = b - a;
            const prevInd = ind.has(prev) ? ind.get(prev) : -1;
            dp[r][c] = 2;
            if(prevInd >= 0 && prev < a) dp[r][c] = Math.max(2, dp[c][prevInd] + 1);
            max = Math.max(max, dp[r][c]); 
        }
    }

    return max > 2 ? max : 0;
};