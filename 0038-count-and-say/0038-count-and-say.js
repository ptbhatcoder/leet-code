

const dp = new Array(30).fill(null);
const compute = () => {
    let rle = '1';
    dp[0] = '1';
    for(let i = 2; i <= 30; i++){
        const next = [];
        let cand = -1, count = 0;
        for(const c of rle){
            if(c !== cand){
                if(count > 0) next.push(count, cand);
                cand = c;
                count = 1;
            } else count++;
        }
        next.push(count, cand);
        rle = next.join('');
        dp[i-1] = rle;
    }
}
compute();

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    return dp[n-1];
};