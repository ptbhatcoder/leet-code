const arr = new Array(1000).fill(0);
let start = 1;
arr[0] = start;
for(let i = 1; i < 1000; i++){
    const offset = i % 7;
    if(!offset){
        start++;
    }
    arr[i] = arr[i-1] + (start + offset);
}
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    return arr[n-1];
};