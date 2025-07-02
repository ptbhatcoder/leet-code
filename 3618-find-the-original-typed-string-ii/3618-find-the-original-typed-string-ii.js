/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var possibleStringCount = function(word, k) {
        const MOD = 1e9 + 7;
    const len = word.length;
    if (len === k) return 1;

    const block = [];
    let i = 0;
    while (i < len) {
        let j = i + 1;
        while (j < len && word[j] === word[j - 1]) j++;
        block.push(j - i);
        i = j;
    }

    const cnt = block.length;
    const mult = Array(cnt).fill(0);
    mult[cnt - 1] = block[cnt - 1];
    for (i = cnt - 2; i >= 0; i--) {
        mult[i] = (mult[i + 1] * block[i]) % MOD;
    }

    if (cnt >= k) return mult[0];

    const dp = Array.from({ length: cnt }, () => Array(k - cnt + 1).fill(0));
    for (i = 0; i <= k - cnt; i++) {
        if (block[cnt - 1] + i + cnt > k) {
            dp[cnt - 1][i] = block[cnt - 1] - (k - cnt - i);
        }
    }

    for (i = cnt - 2; i >= 0; i--) {
        let sum = (dp[i + 1][k - cnt] * block[i]) % MOD;
        for (let j = k - cnt; j >= 0; j--) {
            sum = (sum + dp[i + 1][j]) % MOD;
            const next = j + block[i];
            if (next > k - cnt) {
                sum = (sum - dp[i + 1][k - cnt] + MOD) % MOD;
            } else {
                sum = (sum - dp[i + 1][next] + MOD) % MOD;
            }
            dp[i][j] = sum;
        }
    }

    return dp[0][0];
};