/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
    let ones = 0, zeroes = 0, val = 0, running = 1;
    for(let i = s.length - 1; i >= 0 &&  val + running <= k; i--){
        if(s[i] === '1') {
            val += running;
            ones++;
        }
        running <<= 1;
    }
    for(const c of s) if(c === '0') zeroes++;
    return zeroes + ones;
};