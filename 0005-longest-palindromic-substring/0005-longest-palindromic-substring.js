/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let l = 0, r = 0;
    const n = s.length;
    const check = (i, j) => {
        while(i >= 0 && j < n && s[i] === s[j]){
            if(j - i > r - l){
                l = i;
                r = j;
            }
            i--;
            j++;
        }
    }
    for(let c = 0; c < n; c++){
        check(c, c);
        check(c, c+1);
    }
    return s.substring(l, 1 + r);
};