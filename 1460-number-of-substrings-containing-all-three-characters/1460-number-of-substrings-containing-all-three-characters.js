/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let a = -1, b = -1, c = -1;
    const n = s.length;
    let res = 0;
    for(let i = 0; i < n; i++){
        switch(s[i]){
            case 'a':
                a = i;
                break;
            case 'b':
                b = i;
                break;
            case 'c':
                c = i;
                break;
            default:
                break;
            
        }
        if(a > -1 && b > -1 && c > -1) res += (Math.min(a, b, c) + 1);
    }
    return res;
};