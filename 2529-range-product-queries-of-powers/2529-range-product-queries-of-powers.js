const MOD = 7 + 10 ** 9;

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
    let i = 0;
    let val = n;
    const pre = [];
    while(val > 0){
        if(val & 1){
            const pov = 1 << i;
            pre.push(pov);
        }
        val >>= 1;
        i++;
    }
    return queries.map(([l, r]) => {
        let p = 1;
        for(let i = l ; i <= r; i++) p = (p * pre[i]) % MOD;
        return p;
    });
};