/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @return {number}
 */
const maxSubarrays = (n, conflictingPairs) => {
  const conflicts = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of conflictingPairs) {
    const r = Math.max(a, b);
    const l = Math.min(a, b);
    conflicts[r].push(l);
  }

  let valid = 0n;
  const gains = Array(n + 1).fill(0n);
  let maxLeft = 0, secondMax = 0;

  for (let r = 1; r <= n; r++) {
    for (const l of conflicts[r]) {
      if (l > maxLeft) {
        secondMax = maxLeft;
        maxLeft = l;
      } else if (l > secondMax) {
        secondMax = l;
      }
    }
    valid += BigInt(r - maxLeft);
    gains[maxLeft] += BigInt(maxLeft - secondMax);
  }

  const extra = gains.reduce((a, b) => b > a ? b : a, 0n);
  return Number(valid + extra);
}