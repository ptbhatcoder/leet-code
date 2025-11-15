/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const n = s.length;
    let ans = 0;
    let noChange = false;
    let exp = 0;
    for(let z = 0; !noChange && (exp + z) <= n; z++, exp = z * z){
        let zero = 0, one = 0;
        let pos = 0;
        let soFar = ans;
        for(let r = 0, l = 0; r < n; r++){
            const c = s[r];
            if(c === '1') one++;
            else zero++;

            while(l <= r && zero > z){
                if(s[l] === '1') one--;
                else zero--;
                l++;
            }

            if(zero === z && one > 0 && one >= exp){
                for(pos = Math.max(l, pos); pos < r && s[pos] === '1'; pos++);
                ans += 1 + Math.min(pos - l, one - exp);
            }

        }

        noChange = soFar === ans;
    }
    return ans;
};