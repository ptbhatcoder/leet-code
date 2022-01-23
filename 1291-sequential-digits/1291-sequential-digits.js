/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const q = [1,2,3,4,5,6,7,8,9];
    const res = [];
    let curr = 0;
    while(q.length){
        curr = q.shift();
        if(curr >= low && curr <= high){
            res.push(curr);
        }
        const unit = curr % 10;
        const next = curr * 10 + unit + 1;
        if(unit < 9 && next <= high) q.push(next);
    }
    return res;
};