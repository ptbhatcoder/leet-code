/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    const swaps = [];
    for(let i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]){
            if(swaps.length >= 2) return false;
            swaps.push(i);
        }
    }
    if(swaps.length !== 2) return swaps.length === 0;
    return s1[swaps[0]] === s2[swaps[1]] && s1[swaps[1]] === s2[swaps[0]];
};