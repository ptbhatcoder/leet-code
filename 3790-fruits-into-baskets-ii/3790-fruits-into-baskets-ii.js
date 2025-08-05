/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let ans = 0;
    const n = baskets.length;
    for(const fruit of fruits){
        let isPlaced = false;
        for(let i = 0; i < n && !isPlaced ; i++){
            if(baskets[i] >= fruit){
                isPlaced = true;
                baskets[i] = 0;
            }
        }
        if(!isPlaced) ans++;
    }
    return ans;
};