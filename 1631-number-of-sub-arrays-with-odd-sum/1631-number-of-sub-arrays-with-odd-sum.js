const MOD = 7 + 10 ** 9;
/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let evens = 1, odds = 0, current = 0;
    for(const num of arr){
        current = current + (num % 2);
        if(current & 1) odds = (odds % MOD + 1) % MOD;
        else evens = (evens % MOD + 1) % MOD;
    }
    return (odds * evens) % MOD;
};