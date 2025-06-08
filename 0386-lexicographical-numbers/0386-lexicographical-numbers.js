/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const res = new Array(n);
    let cur = 1
    for(let i = 0; i < n; i++){
        res[i] = cur;
        if(cur * 10 <= n) cur *= 10;
        else {
            while(cur === n || (cur % 10) === 9) cur = Math.floor(cur / 10);
            cur++;
        }
    }
    return res;
};