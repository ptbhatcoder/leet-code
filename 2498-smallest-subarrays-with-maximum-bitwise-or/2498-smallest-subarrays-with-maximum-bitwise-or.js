
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums) {
    let maxOr = 0;
    for(const num of nums) maxOr |= num;
    let bits = 0;
    while(maxOr > 0){
        bits++;
        maxOr >>= 1;
    }
    const n = nums.length;
    const res = new Array(n).fill(1);
    const lastSet = new Array(bits).fill(0);
    for(let i = n - 1; i >= 0; i--){
        const cur = nums[i];
        for(let bit = 0; bit < bits; bit++){
            if(cur & (1 << bit)) lastSet[bit] = i;
            res[i] = Math.max(res[i], lastSet[bit] - i + 1);
        }
    }
    return res;
};