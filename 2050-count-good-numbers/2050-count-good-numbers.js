/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    const MOD = 1000000007n;

    const modPow = (base, exp) => {
        base = BigInt(base);
        exp = BigInt(exp);
        let result = 1n;
        while (exp > 0) {
            if (exp % 2n === 1n) {
                result = (result * base) % MOD;
            }
            base = (base * base) % MOD;
            exp = exp / 2n;
        }
        return result;
    }

    let numEven = BigInt(Math.floor(n / 2));
    let numOdd = BigInt(Math.ceil(n / 2));

    let evenPart = modPow(5n, numOdd); // positions at 0, 2, 4...
    let oddPart = modPow(4n, numEven); // positions at 1, 3, 5...

    return Number((evenPart * oddPart) % MOD);
};