/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    const res = [words[0]];
    const n = groups.length;
    for(let i = 1; i < n; i++) if(groups[i] !== groups[i-1]) res.push(words[i]);
    return res;
};