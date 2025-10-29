const count = val => {
    let c = 0;
    while(val > 0){
        c++;
        val >>= 1;
    }
    return c;
}
/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    return (1 << count(n)) - 1;
};