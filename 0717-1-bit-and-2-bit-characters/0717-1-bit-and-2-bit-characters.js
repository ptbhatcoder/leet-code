/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    const n = bits.length;
    const ans = new Array(n).fill(false);
    ans[n-1] = true;
    for(let i = n - 2; i >= 0; i--){
        const bit = bits[i];
        if(bit === 0){
            ans[i] = ans[i + 1];
        } else {
            ans[i] = i === n - 2 ? bit === 0 : ans[i + 2];
        }
    }
    return ans[0];
};