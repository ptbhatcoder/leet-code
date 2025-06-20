/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function(s, k) {
    let h = 0, v = 0;
    let res = 1;
    const n = s.length;
    for(let i = 0; i < n; i++){
        const c =  s[i];
        if(c === 'N') v++;
        else if(c === 'S') v--;
        else if(c === 'E') h++;
        else h--;
        const manhattan = Math.abs(h) + Math.abs(v)
        res = Math.max(res, Math.min(manhattan + 2 * k, i + 1));
    }
    return res;
};