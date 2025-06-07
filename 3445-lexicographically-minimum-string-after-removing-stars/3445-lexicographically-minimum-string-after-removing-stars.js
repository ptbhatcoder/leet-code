/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function(s) {
    const n = s.length;
    const p = {};
    const res = [...s];
    for(let i = 0; i < n; i++){
        const c  = s[i];
        if(c === '*'){
            res[i] = ''
            for(const v of 'abcdefghijklmnopqrstuvwxyz'){
                if(v in p && p[v].length > 0){
                    res[p[v].pop()] = '';
                    break;
                }
            }
        } else {
            if(!p[c]) p[c] = [];
            p[c].push(i);
        }
    }
    return res.join('');
};