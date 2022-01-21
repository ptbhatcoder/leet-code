/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalC = 0, totalG = 0, tank = 0, start = 0;
    for(let i = 0; i < cost.length; i++){
       
        totalC += +cost[i];
        totalG += +gas[i];
        tank += (gas[i] - cost[i]);
        if(tank < 0){
            start = i + 1;
            tank = 0;
        }
    }
    console.log(start);
    
    if(totalC > totalG){
        return -1;
    }
    return start;
};