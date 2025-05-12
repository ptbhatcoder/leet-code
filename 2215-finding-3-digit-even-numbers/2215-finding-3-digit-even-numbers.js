/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    const f = new Array(10).fill(0);
    for(const digit of digits) f[digit]++;
    const res = [];
    for(let num = 100; num < 1000; num+=2){
        const cf = new Array(10).fill(0);
        let val = num;
        for(let t = 0; t < 3; t++){
            cf[val % 10]++;
            val = ~~(val / 10);
        }
        let canMake = true;
        for(let i = 0; i <= 9 && canMake; i++){
            if(cf[i] > f[i]) canMake = false;
        }
        if(canMake) res.push(num);
    }
    return res;
};