const check = new Set([...'aeiou']);
/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    for(const c of s){
        if(check.has(c)) return true;
    }
    return false;
};