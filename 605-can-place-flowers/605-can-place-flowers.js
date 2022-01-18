/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for(let i = 0;i < flowerbed.length && count < n; i++){
        if(flowerbed[i]) continue;
        const prev = i ? flowerbed[i-1] : 0;
        const next = i === flowerbed.length - 1 ? 0 : flowerbed[i+1];
        if(!prev && !next){
            flowerbed[i] = 1;
            count++;
        }
    }
    
    return count === n;
};