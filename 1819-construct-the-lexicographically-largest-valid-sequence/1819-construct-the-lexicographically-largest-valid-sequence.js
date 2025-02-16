/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function(n) {
    const l = 2 * n - 1;
    const result = new Array(l).fill(0);
    const used = new Array(n + 1).fill(false);
    const insert = (pos) => {
        if(pos >= l) return true;
        if(result[pos] > 0) return insert(pos+1);
        for(let val = n; val > 0; val--){
            if(used[val]) continue;
            used[val] = true;
            result[pos] = val;
            if(val > 1){
                const next = val + pos;
                if(next < l && result[next] === 0){
                    result[next] = val;
                    if(insert(pos + 1)) return true;
                    result[next] = 0;
                }
            } else {
                if(insert(pos + 1)) return true;
            }
            result[pos] = 0;
            used[val] = false;
        }
        return false;

    }
    insert(0);
    return result;
};