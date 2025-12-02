const MOD = BigInt(7 + 10**9);
/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function(points) {
    const countByY = {};
    for(const [x, y] of points){
        if(!countByY[y]) countByY[y] = 0;
        countByY[y]++;
    }
    let s = 0n;
    const vals = Object.values(countByY);
    let allLines = 0n;
    for(let i = 0; i < vals.length; i++){
        const p = BigInt(vals[i]);
        const lines = (p * (p - 1n)) / 2n;
        const trapeziums = (lines * allLines) % MOD;
        s = (s + trapeziums) % MOD;
        allLines = (allLines + lines) % MOD;
    }
    return Number(s);
};