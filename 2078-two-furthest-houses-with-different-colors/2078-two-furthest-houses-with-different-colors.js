/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    const n = colors.length;
    let l = -1, r = -1;
    for(let i = 0; i < n && l === -1; i++) if(colors[i] !== colors[n-1]) l = i;
    for(let i = n - 1; i >= 0 && r === -1; i--) if(colors[i] !== colors[0]) r = i;
    return Math.max(n - 1 - l, r);
};