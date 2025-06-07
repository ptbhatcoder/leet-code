/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function(s) {
    const n = s.length;
    const p = {};
    const exits = new Set;
    for(let i = 0; i < n; i++){
        const c  = s[i];
        if(c === '*'){
            for(const v of 'abcdefghijklmnopqrstuvwxyz'){
                if(v in p && p[v].length > 0){
                    exits.add(p[v].pop());
                    break;
                }
            }
            exits.add(i);
        } else {
            if(!p[c]) p[c] = [];
            p[c].push(i);
        }
    }
    const res = [];
    for(let i = 0; i < n; i++){
        if(!exits.has(i)) res.push(s[i]);
    }
    return res.join('');
};