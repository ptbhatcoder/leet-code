const canSection = (slots) => {
    slots.sort((s1, s2) => s1[0] -  s2[0] || s1[1] - s2[1]);
    let intervals = 0;
    let max = -Infinity;
    for(const [s, e] of slots){
        if(max <= s) intervals++;
        max = Math.max(max, e);
    }
    return intervals >= 3;
}
/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function(n, rectangles) {
    const hslots = rectangles.map(([sx,,ex]) => [sx, ex]);
    if(canSection(hslots)) return true;
    const vslots = rectangles.map(([,sy,,ey]) => [sy, ey]);
    return canSection(vslots);
};