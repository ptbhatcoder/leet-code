const matchesPartition = (n, match) => {
    if(n <= 9){
        return match === n;
    }
    if(n === match) return true;
    let div = 10;
    while(div < n){
        const right = n % div;
        const left = (n - right) / div;
        const next = match - right;
        if(matchesPartition(left, next)) return true;
        div *= 10;
    }
    return false;
}

const punishment = new Array(1001).fill(null);
punishment[0] = 0;
for(let i = 1; i < 1001; i++){
    punishment[i] = punishment[i-1];
    const sq = i * i;
    if(matchesPartition(sq, i)){
        punishment[i] += sq;
    }
}

/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    return punishment[n];
};