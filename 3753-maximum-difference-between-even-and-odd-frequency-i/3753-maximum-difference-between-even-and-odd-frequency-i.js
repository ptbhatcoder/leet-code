const CHARS = 'abcdefghijklmnopqrstuvwxyz';
const TEMPLATE = {};
for(const c of CHARS) TEMPLATE[c] = 0;
/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    const f = {...TEMPLATE};
    for(const c of s) f[c]++;
    let emin = Infinity, omax = -Infinity;
    for(const c of s){
        if(f[c] === 0) continue;
        else if(f[c] & 1){
            omax = Math.max(omax, f[c]);
        } else {
            emin = Math.min(emin, f[c]);          
        }
    }
    return omax - emin;
};