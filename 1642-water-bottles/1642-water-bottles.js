/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let drink = numBottles;
    let empty = drink;
    while(empty >= numExchange){
        const newBottles = Math.floor(empty / numExchange);
        drink += newBottles;
        empty -= (newBottles * numExchange);
        empty += newBottles;
    }
    return drink;  
};