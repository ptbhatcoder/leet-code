const matchesPartition = (n, match) => {
    if(n <= 9){
        return match === n;
    }
    if(n === match) return true;
    const str = new String(n);
    for(let i = 1; i < str.length; i++){
        const left = Number(str.slice(0, i));
        const right = Number(str.slice(i));
        if(matchesPartition(right, match - left)) return true;
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