/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    const f = {};
    let len = 0;
    for(const word of words){
        const comp = `${word[1]}${word[0]}`;
        if(comp in f && f[comp] > 0){
            len += 4;
            f[comp]--;
        } else f[word] = (f[word] || 0) + 1;
    }
    
    for(const c of 'abcdefghijklmnopqrstuvwxyz'){
        if(f[c+c] > 0){
            len+=2;
            break;
        }
    }
    return len;
};