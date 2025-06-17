const R = 1000000007n;

const P = (x, n) => n & 1 ? P(x, n - 1) * x % R : n ? P(x * x % R, n >> 1) : 1n;
const C = (n, m) => m * m > m * n ? 0n : F[n] * I[m] % R * I[n - m] % R;

let p = 1n;
const F = [...Array(1e5)].map((x, i) => i ? p = p * BigInt(i) % R : p);
p = Number(R) - 2;
const I = F.map(x => P(x, p));

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var countGoodArrays = function(n, m, k) {
    return Number(C(n - 1, k) * BigInt(m) % R * P(BigInt(m - 1), n - k - 1) % R);
};