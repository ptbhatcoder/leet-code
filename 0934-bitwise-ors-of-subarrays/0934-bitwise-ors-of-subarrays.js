/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
    const current = [];
    let start = 0, end = -1;
    for(const num of arr){
        end = current.length;
        current.push(num);
        for(let i = start; i < end; i++){
            const cand = current[i] | num;
            if(cand !== current.at(-1)) current.push(cand);
        }
        start = end;
    }
    return new Set(current).size;
};