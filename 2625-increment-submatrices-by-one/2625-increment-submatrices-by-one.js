/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
    const ans = Array.from({ length: n }, _ => new Array(n).fill(0));
    for(const [tr, tc, br, bc] of queries){
        ans[tr][tc]++;
        if(br < n - 1) ans[br + 1][tc]--;
        if(bc < n - 1) ans[tr][bc + 1]--;
        if(br < n - 1 && bc < n - 1) ans[br + 1][bc + 1]++;
    }
    for(let r = 1; r < n; r++){
        for(let c = 0; c < n; c++){
            ans[r][c] += ans[r-1][c];
        }
    }
    for(let r = 0; r < n; r++){
        for(let c = 1; c < n; c++){
            ans[r][c] +=  ans[r][c-1];
        }
    }
    return ans;
};