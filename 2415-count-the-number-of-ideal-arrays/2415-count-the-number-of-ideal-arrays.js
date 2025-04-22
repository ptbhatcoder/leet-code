const MOD = 1e9 + 7;
const MAX = 10001;
const cnt = Array.from({ length: MAX }, () => Array(14).fill(0));
const comb = Array.from({ length: MAX }, () => Array(14).fill(0));

// Precompute combinations
for (let s = 0; s < MAX; s++) {
    comb[s][0] = 1;
    for (let r = 1; r <= Math.min(s, 13); r++) {
        comb[s][r] = (comb[s - 1][r - 1] + comb[s - 1][r]) % MOD;
    }
}

// Sieve-style DP
for (let div = 1; div < MAX; div++) {
    cnt[div][0]++;
    for (let i = div * 2; i < MAX; i += div) {
        for (let bars = 0; bars < 13; bars++) {
            if (cnt[div][bars]) {
                cnt[i][bars + 1] += cnt[div][bars];
            }
        }
    }
}

/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
var idealArrays = function(n, maxValue) {
    let res = 0;
    for (let i = 1; i <= maxValue; i++) {
        for (let bars = 0; bars < Math.min(14, n); bars++) {
            res = (res + cnt[i][bars] * comb[n - 1][bars]) % MOD;
        }
    }
    return res;
};