/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let pos = k - 1;
    let bits = 0;
    while(pos > 0){
        bits++;
        pos &= (pos - 1);
    }
    return String.fromCharCode(97 + bits % 26);
};