const ALLOWED = [0,1];
const sumsPowersOf = base => {
    return target => {
        while(target){
            const den = target % base;
            if(!ALLOWED.includes(den)) return false;
            target -= den;
            target /= base;
        }
        return true;
    }
}

const isSumOfPowersOfThree = sumsPowersOf(3);
/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    return isSumOfPowersOfThree(n);
};