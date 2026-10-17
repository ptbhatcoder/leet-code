/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    for(let l = 0, r = 0, p = new Set; r < s.length; r++){
        const c = s[r];
        while(l < r && p.has(c)){
            const d = s[l++];
            p.delete(d);
        }
        p.add(c);
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
};