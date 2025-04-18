/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1)  return '1';
    const prev = countAndSay(n-1);
    const rle = [];
    let char = prev[0], count = 1;
    for(let i = 1; i < prev.length;  i++){
        const cur = prev[i];
        if(char !== cur){
            rle.push(count, char);
            char = cur;
            count = 1;
        } else count++;
    }
    rle.push(count, char);
    return rle.join('');
};