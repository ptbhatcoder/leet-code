
const generatePrimes = (ceil = 10**6) => {
    const sieve = new Array(1 + ceil).fill(true);
    sieve[0] = false;
    sieve[1] = false;
    const l = sieve.length;
    let count = 0;
    for(let cur = 2; cur < l; cur++){
        if(sieve[cur] === false) continue;
        count++;
        let val = cur + cur;
        while(val < l){
            sieve[val] = false;
            val += cur;
        }
    }
    const primes = new Array(count);
    let idx = 0;
    for(let cur = 2; cur < l; cur++){
        if(sieve[cur]) primes[idx++] = cur;
    }
    return primes;
}

const primes = generatePrimes();
const len = primes.length;
const findCeil = val => {
    let s = 0, e = len - 1;
    let res = Infinity;
    while(s <= e){
        const mid = s + ((e - s) >> 1);
        if(primes[mid] >= val){
            res = mid;
            e = mid - 1;
        } else s = mid + 1;
    }
    return res;
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    const idx = findCeil(left);
    let num1 = -1, num2 = -1;
    let diff = Infinity;
    for(let i = idx; i + 1 < len && primes[i+1] <= right; i++){
        const cur = primes[i+1] - primes[i];
        if(cur < diff){
            num1 = primes[i];
            num2 = primes[i+1];
            diff = cur;
        }
    }
    return [num1, num2];
};