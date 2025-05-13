const MOD = 7 + 10**9;
const TEMPLATE = 'abcdefghijklmnopqrstuvwxyz';
const FREQ =  Object.fromEntries([...TEMPLATE].map(k => [k, 0]));
const getNext = k => String.fromCharCode(k.charCodeAt(0) + 1);
/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
        const cnt = new Array(26).fill(0);

        for (const c of s) {
            cnt[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for (let j = 0; j < t; j++) {
            const tmp = new Array(26).fill(0);
            for (let i = 0; i < 26; i++) {
                if (i === 25) {
                    tmp[0] = (tmp[0] + cnt[i]) % MOD;
                    tmp[1] = (tmp[1] + cnt[i]) % MOD;
                } else {
                    tmp[i + 1] = (tmp[i + 1] + cnt[i]) % MOD;
                }
            }
            cnt.splice(0, 26, ...tmp); // Update cnt with tmp values
        }

        return cnt.reduce((len, c) => (len + c) % MOD, 0);
};