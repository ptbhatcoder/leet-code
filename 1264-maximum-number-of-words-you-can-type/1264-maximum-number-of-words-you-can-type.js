/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const broken = new Set([...brokenLetters]);
    let ans = 0;
    let canType = true;
    for(const c of text){
        if(c === ' '){
            if(canType) ans++;
            canType = true;
        } else {
            if(broken.has(c)) canType = false;
        }
    }
    return canType ? ans + 1 : ans;
};