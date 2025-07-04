/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function(k, operations) {
    let res = 0;
    const n = operations.length;
    const runs = [];
    let len = 1;
    for(const op of operations){
        len += len;
        runs.push(len);
        if(len >= k) break;
    }
    for(let i = runs.length - 1; i >= 0; i--){
        const half = runs[i] / 2;
        if(k > half) {
            k -= half;
            if(operations[i] === 1) res++;
        }
    }
    return String.fromCharCode(97 + res % 26);
};