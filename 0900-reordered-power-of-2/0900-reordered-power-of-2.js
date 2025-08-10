const cands = new Set;
const freq = n => {
    let val = n;
    const arr = new Array(10).fill(0);
    while(val > 0){
        const d = val % 10;
        arr[d]++;
        val = val - d;
        val = val / 10;
    }
    return arr.join(',');
}
for(let i = 0; i < 31; i++){
    const arr = new Array(10).fill(0);
    const key = freq(1 << i);
    cands.add(key);
}

/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const key = freq(n);
    return cands.has(key);
};