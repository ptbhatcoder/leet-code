const MAX = (2 ** 31) - 1;
const MIN = -(2 ** 31);

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let neg = false, chances = 1;
    let ans = 0;
    for(let i = 0; i < s.length && /[0-9\+\-\ ]/.test(s[i]); i++){
        const c = s[i];
        if(/[0-9]/.test(c)) ans = ans * 10 + +c;
        else if(chances === 0) break;
        else if(c === '-') neg = true;
        else if(c !== ' ' && c !== '+') break;
        if(c !== ' ') chances = 0;
    }
    if(neg) ans = -ans;
    return Math.min(MAX, Math.max(MIN, ans));
};