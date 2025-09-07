/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const ans = new Array(n);
    let cur = n >> 1;
    let s = 0, e = n - 1;
    while(s < e){
        ans[s++] = cur;
        ans[e--] = -cur;
        cur--; 
    }
    if(s === e) ans[s] = 0;
    return ans;
};