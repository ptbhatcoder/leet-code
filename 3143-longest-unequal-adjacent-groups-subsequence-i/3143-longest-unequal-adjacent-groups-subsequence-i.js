/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    const longest = [0];
    const n = groups.length;
    for(let i = 1;  i < n; i++) {
        if(groups[longest.at(-1)] !== groups[i]) longest.push(i);
    }
    return longest.map(i => words[i]);
};