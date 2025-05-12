/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    const f = new Array(10).fill(0);
    for(const digit of digits) f[digit]++;
    const res = [];
    for(let num = 100; num < 1000; num+=2){
        const one = num % 10;
        const ten = (~~(num / 10)) % 10;
        const hundred = ~~(num / 100);
        f[one]--;
        f[ten]--;
        f[hundred]--;
        if(f[one] >= 0 && f[ten] >= 0 && f[hundred] >= 0) res.push(num);
        f[one]++;
        f[ten]++;
        f[hundred]++;
    }
    return res;
};