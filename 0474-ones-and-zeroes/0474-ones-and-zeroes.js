
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const map = {};
    const l = strs.length;
    const dp = (i, rm, rn) => {
        if(i >= strs.length) return 0;

        if(rm < 0 || rn < 0) return 0;
        
        const key = `${i}#m=${rm}#n=${rn}`;
        
        if(key in map) return map[key];

        let ans = Infinity;
        const exc = dp(i + 1, rm, rn);

        let ones = 0, zeroes = 0;
        for(const c of strs[i]){
            if(c === '1') ones++;
            else zeroes++;
        }

        let inc = 0;
        if(rm >= zeroes && rn >= ones){
            inc = 1 + dp(i + 1, rm - zeroes, rn - ones);
        }

        ans = Math.max(inc, exc);
        map[key] = ans;
        return ans;
    }
    return dp(0, m, n);
};