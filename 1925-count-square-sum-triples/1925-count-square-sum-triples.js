/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    const squares = new Set;
    for(let i = 1; i <= n; i++) squares.add(i * i);
    let res = 0;
    for(let i = 1; i <= n; i++){
        for(let j = i; j * j + i * i <= n * n; j++){
            const val = j * j + i * i;
            if(squares.has(val)) res += 2;
        }
    }
    return res;
};