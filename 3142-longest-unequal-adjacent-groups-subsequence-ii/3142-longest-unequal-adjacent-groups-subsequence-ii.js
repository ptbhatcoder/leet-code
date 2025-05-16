/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function(words, groups) {
    const n = words.length;
    const dp = new Array(n).fill(0);
    const prev = new Array(n).fill(-1);
    let max = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0;  j < i; j++){
            if(groups[j] === groups[i]) continue;
            const sj = words[j];
            const si = words[i];
            if(si.length !== sj.length) continue;
            const l = si.length;
            let hd = 0;
            for(let k = 0; k < l; k++) if(si[k] !== sj[k]) hd++;
            if(hd === 1 && dp[j] + 1 >  dp[i]){
                prev[i] = j;
                dp[i] = 1 + dp[j];
                if(dp[i] > dp[max]) max = i;
            }
        }
    }
    
    const res = [];
    let i = max;
    while(i > -1){
        res.push(words[i]);
        i = prev[i];
    }
    res.reverse();
    return res;
};