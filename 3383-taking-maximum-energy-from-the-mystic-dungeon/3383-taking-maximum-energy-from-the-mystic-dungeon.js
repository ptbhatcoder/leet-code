/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
    const n = energy.length;
    const res = new Array(n).fill(0);
    let max = -Infinity;
    for(let i = n - 1; i >= n - k; i--){
        res[i] = energy[i];
        max = Math.max(max, res[i]);
    }
    for(let i = n - k - 1; i >= 0; i--){
        res[i] = energy[i] + res[i+k];
        max = Math.max(max, res[i]);
    }
    return max;
};