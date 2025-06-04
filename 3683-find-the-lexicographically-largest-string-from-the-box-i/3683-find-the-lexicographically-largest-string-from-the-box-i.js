/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
    if(numFriends === 1) return word;
    const n = word.length;
    const len = n - numFriends + 1;
    let ans = '';
    for(let i = 0; i < n; i++){
        const check = word.slice(i, i + len);
        if(check > ans) ans = check;
    }
    return ans;
};