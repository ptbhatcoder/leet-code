const hasZero = val => {
    while(val){
        const d = val % 10;
        if(d === 0) return true;
        val -= d;
        val /= 10;
    }
    return false;
}

/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    const last = n >> 1;
    for(let i = 1; i <= last; i++){
        if(hasZero(i)) continue;
        const comp = n - i;
        if(hasZero(comp)) continue;
        return [i, comp];
    }
    return [-1, -1];
};