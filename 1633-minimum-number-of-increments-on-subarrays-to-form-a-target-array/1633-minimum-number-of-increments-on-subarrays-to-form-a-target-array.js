/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function(target) {
    let ans = target[0];
    const n = target.length;
    let prev = target[0];
    for(let i = 1; i < n; i++){
        const diff = target[i] - prev;
        prev = target[i];
        if(diff > 0) ans += diff;
    }
    return ans;
};