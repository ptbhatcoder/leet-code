/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// \U0001f9e0 Factorial Chakra Generator
const factorial = (num) => {
    let chakra = 1n;
    for (let i = 1n; i <= num; i++) chakra *= i;
    return chakra;
};

// \U0001f300 Recursive Symmetry Formation for Clones
const generatePalindromes = (clone, index, validClones, k) => {
    if (index >= Math.floor((clone.length + 1) / 2)) {
        const chakraID = clone.join('');
        if (BigInt(chakraID) % BigInt(k) === 0n) validClones.push(chakraID);
        return;
    }

    if (index !== 0) {
        clone[index] = '0';
        clone[clone.length - 1 - index] = '0';
        generatePalindromes(clone, index + 1, validClones, k);
    }

    for (let i = 1; i <= 9; i++) {
        clone[index] = String(i);
        clone[clone.length - 1 - index] = String(i);
        generatePalindromes(clone, index + 1, validClones, k);
    }
};

// \U0001f4a5 Main Shadow Clone Technique
const countGoodIntegers = (n, k) => {
    const validClones = [];
    const baseClone = Array(n).fill('0');
    generatePalindromes(baseClone, 0, validClones, k);

    const chakraPatterns = new Set();

    // \U0001f50d Chakra Frequency Fingerprint
    for (const clone of validClones) {
        const freq = Array(10).fill(0);
        for (const c of clone) freq[+c]++;
        chakraPatterns.add(freq.join(','));
    }

    const basePerms = factorial(BigInt(n));
    let total = 0n;

    // \U0001f9fe Deduplicate and compute permutations for each frequency
    for (const pattern of chakraPatterns) {
        const parts = pattern.split(',').map(Number);
        let perms = basePerms;

        for (const f of parts) perms /= factorial(BigInt(f));

        if (parts[0] > 0) {
            const zeros = parts[0] - 1;
            let zeroPerms = factorial(BigInt(n - 1));
            for (let j = 1; j < parts.length; j++) zeroPerms /= factorial(BigInt(parts[j]));
            zeroPerms /= factorial(BigInt(zeros));
            perms -= zeroPerms;
        }

        total += perms;
    }

    return Number(total);
};