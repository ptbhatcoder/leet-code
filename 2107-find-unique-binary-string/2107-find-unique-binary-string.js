/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const n = nums[0].length;
    const present = new Set(nums.map(num => {
        let val = 0;
        for(const c of num){
            val <<= 1;
            val = val | (c === '0' ? 0 : 1);
        }
        return val;
    }));
    let cur = (1 << n) - 1;
    while(present.has(cur)) cur--;
    const result = Array.from({ length: n }, _ => 0);
    for(let i = n - 1; i >= 0 && cur; i--){
        result[i] = cur & 1;
        cur >>= 1;
    }
    return result.join('');
};