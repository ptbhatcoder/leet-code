const MOD = 7 + 10 ** 9;
/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let evens = 1, odds = 0, current = 0;
    for(const num of arr){
        current = current + (num % 2);
        if(current & 1) odds++;
        else evens++;
    }
    return (odds * evens) % MOD;
};