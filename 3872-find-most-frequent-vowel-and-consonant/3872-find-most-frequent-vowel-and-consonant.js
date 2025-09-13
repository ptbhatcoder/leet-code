const base = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
};


/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const f = {...base};
    const other = {};
    let vow = 0, con = 0;
    for(const c of s){
        if(c in f){
            f[c]++;
            vow = Math.max(vow, f[c]);
        } else {
            if(!other[c]) other[c] = 0;
            other[c]++;
            con = Math.max(con, other[c]);
        }
    }
    return vow + con;
};