/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let last = -1, max = 0;
    for(let i = 0;i < seats.length;i++){
        if(!seats[i]) continue;
        if(last < 0){
            max = Math.max(max, i);
        } else {
            max = Math.max(max, (i - last) >> 1);
        }
        last = i;
    }
    
    if(seats[seats.length - 1] === 0){
        max = Math.max(max, seats.length - 1 - last);
    }
    
    return max;
    
};