const MAX = (2 ** 31) - 1;
const MIN = -(2 ** 31);
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let val = x < 0 ? -x : x;
    let ans = 0;
    while(val > 0){
        const d = val % 10;
        ans = ans * 10 + d;
        val = (val - d) / 10;
    }
    const fin = x < 0 ? -ans : ans;
    if(fin > MAX ||  fin < MIN) return 0;
    return fin;
};