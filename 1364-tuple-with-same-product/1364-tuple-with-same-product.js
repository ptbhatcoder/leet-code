const fact = n => n <= 1 ? 1 : n * fact(n-1);
const PERMS_PER_PAIR = fact(2);
const PERMS_PER_TUPLE = PERMS_PER_PAIR * PERMS_PER_PAIR;
const comb = (n, r) => fact(n) / (fact(r) * fact(n-r));
const perm = (n, r) => comb(n, r) * fact(r);
/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    const n = nums.length;
    const prods = {};
    for(let i =  0; i < n; i++){
        const left = nums[i];
        for(let j = i + 1; j < n; j++){
            const prod = left * nums[j];
            if(!(prod in prods)){
                prods[prod] = 0;
            }
            prods[prod]++;
        }
    }
    let result = 0;
    for(const value of Object.values(prods)){
        if(value <= 1) continue;
        result += (PERMS_PER_TUPLE * perm(value, 2));
    }
    return result;
};