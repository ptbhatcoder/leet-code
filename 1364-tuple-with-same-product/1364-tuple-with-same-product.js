const PERMS_PER_PAIR = 2;
const PERMS_PER_TUPLE = 2 *  PERMS_PER_PAIR * PERMS_PER_PAIR;
/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    const n = nums.length;
    const prods = {};
    let result = 0;
    for(let i =  0; i < n; i++){
        const left = nums[i];
        for(let j = i + 1; j < n; j++){
            const prod = left * nums[j];
            if(!(prod in prods)){
                prods[prod] = 0;
            }
            result += prods[prod] * PERMS_PER_TUPLE;
            prods[prod]++;
        }
    }
    return result;
};