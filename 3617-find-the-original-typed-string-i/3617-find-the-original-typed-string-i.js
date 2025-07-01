/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let res = 1;
    const n = word.length;
    for(let i = 1; i < n; i++){
        if(word[i] === word[i-1]) res++;
    }
    return res;
};