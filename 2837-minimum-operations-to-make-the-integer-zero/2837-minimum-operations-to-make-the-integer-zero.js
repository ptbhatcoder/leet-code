const countBits = val => {
    return val.toString(2).replace(/0/g, '').length;
}
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function(num1, num2) {
    for(let i = 0; i <= 60; i++){
        const target = num1 - i * num2;
        if(target >= 0 && countBits(target) <= i && i <= target) return i;
    }
    return -1;
};