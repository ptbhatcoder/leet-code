/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    const freq = new Array(1002).fill(0);
    
    let min = Infinity, max = -Infinity;
    for(const [n, s, e] of trips){
        freq[s]+=n;
        freq[e]-=n;
        max = Math.max(e, s, max);
        min = Math.min(e, s, min);
    }
    
    let ssF = 0, mx = 0;
    for(let i = min; i <= max+1; i++){
        ssF+=freq[i];
        mx = Math.max(ssF, mx);
    }
   // console.log(freq);
    
    return mx <= capacity;
};