/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(times) {
    const mods = times.reduce((mods, time) => {
        mods[time%60]++;
        return mods;
    }, new Array(60).fill(0));
    let sum = 0;
    for(i = 1;i < 30;i++){
        sum += (mods[i] * mods[60 - i]);
    }
    
    const zero = ( mods[0] * (mods[0] - 1)) >>> 1;
    const thirty = ( mods[30] * (mods[30] - 1)) >>> 1;
    return sum + zero + thirty;
};