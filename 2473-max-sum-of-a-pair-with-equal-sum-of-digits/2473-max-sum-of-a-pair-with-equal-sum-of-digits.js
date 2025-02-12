const getDigitSum = (n) => {
    let s = 0;
    while(n > 0){
        const d = n % 10;
        n -= d;
        s += d;
        n /= 10;
    }
    return s;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const numWithDigitSum = {};
    let max = -1;
    for(const num of nums){
        const sum = getDigitSum(num);
        if(sum in numWithDigitSum){
            max = Math.max(max, num + numWithDigitSum[sum]);
        } else numWithDigitSum[sum] = -Infinity;
        numWithDigitSum[sum] = Math.max(numWithDigitSum[sum], num);
    }
    return max;
};