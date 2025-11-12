const gcd = (a, b) => {
    if(a < b) [a, b] = [b, a];
    while(b){
        [a, b] = [b, a%b];
    }
    return a;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let ans = Infinity;
    let c = 0;
    const n = nums.length;
    for(const num of nums) if(num === 1) c++;
    if(c > 0) return n - c;
    for(let i = 0; i < n; i++){
        let last = nums[i];
        for(let j = i + 1 ;  j < n; j++){
            last = gcd(last, nums[j]);
            if(last === 1){
                ans = Math.min(ans, j - i);
                break;
            }
        }
    }

    return ans < Infinity ? ans + n - 1 : -1;
};