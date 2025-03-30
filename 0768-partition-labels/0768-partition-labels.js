/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const last = new Array(26).fill(-1);
    const partitions = [];
    let anchor = 0;
    let end = 0;
    
    for (let i = 0; i < S.length; i++) {
        last[S.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }
    
    for (let i = 0; i < S.length; i++) {
        end = Math.max(end, last[S.charCodeAt(i) - 'a'.charCodeAt(0)]);
        if (i === end) {
            partitions.push(i - anchor + 1);
            anchor = i + 1;
        }
    }
    return partitions;
};