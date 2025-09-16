const gcd = (a, b) => {
    while(b > 0){
        a %= b;
        [a, b] = [b, a];
    }
    return a;
}

const lcm = (a, b) =>  (a * b) / gcd(a, b);
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function(nums) {
    const res = [];
    for(let num of nums){
        while(res.length > 0 && gcd(res.at(-1), num) > 1){
            num = lcm(res.pop(), num);
        }
        res.push(num);
    }
    return res;
};