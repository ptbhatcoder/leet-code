const MOD = 10**9 +  7;
/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let odd = 0, even = 0;

    if(arr[0] & 1) odd++;
    else even++;
    
    let res = odd;

    const n = arr.length;
    for(let i = 1; i < n; i++){
        if(arr[i] & 1) [odd, even] = [(1 + even) % MOD, odd];
        else even = (even + 1) % MOD;
        res = (res + odd) % MOD;
    }
    return res % MOD;
};