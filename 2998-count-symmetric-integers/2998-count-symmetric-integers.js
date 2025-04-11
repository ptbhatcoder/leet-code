/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    const isSymmetric = (num) => {
        if(num <= 10  || (num >= 100 && num <= 1000)) return false;
        if(num < 100) return (num % 10) === Math.floor(num / 10);
        const right = num % 100;
        const left = Math.floor(num / 100);
        return ((right % 10) + Math.floor(right / 10)) === ((left % 10) + Math.floor(left / 10));
    }

    let count = 0;
    for(let num = low; num <= high; num++){
        if(isSymmetric(num)) count++;
    }
    return count;
};