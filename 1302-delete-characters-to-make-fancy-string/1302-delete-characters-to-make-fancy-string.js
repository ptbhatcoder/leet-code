/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    const res = [];
    let run = 0;
    let prev = null;
    for(const c of s){
        if(prev !== c) run = 0;
        run++;
        if(run < 3) res.push(c);
        prev = c;
    }
    return res.join('');
};