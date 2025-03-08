/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let min = k;
    let cur = 0;
    const n = blocks.length;
    for(let i = 0; i < k; i++){
        if(blocks[i] !== 'B') cur++;
    }
    min = Math.min(min, cur);
    for(let i = k; i < n; i++){
        if(blocks[i-k] !== 'B') cur--;
        if(blocks[i] !== 'B') cur++;
        min = Math.min(min, cur);
    }
    return Math.max(min, 0);
};