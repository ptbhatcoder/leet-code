/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    const n = bits.length;
    let i = 0;
    const last = n - 1;
    while(i < last){
        if(bits[i]) i+=2;
        else i++;
    }
    return i === last;
};