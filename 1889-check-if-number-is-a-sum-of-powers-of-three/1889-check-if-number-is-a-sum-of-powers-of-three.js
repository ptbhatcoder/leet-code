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

/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = sumsPowersOf(3);