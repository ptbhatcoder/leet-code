/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    const fT = [0,0,0,0,0,0,0];
    const fB = [0,0,0,0,0,0,0];
    const both = [0,0,0,0,0,0,0];
    const n = tops.length;
    for(let i = 0; i < n; i++){
        const t = tops[i];
        const b = bottoms[i];
        fT[t]++;
        fB[b]++;
        if(t === b) both[t]++;
    }

    let smallest = Infinity;
    for(let val = 1; val <= 6; val++){
        const t = fT[val], b = fB[val], common = both[val];
        if(t + b === n + common) {
            smallest = Math.min(smallest, n - Math.max(t, b));
        }
    }

    return smallest < Infinity ? smallest : -1;
};