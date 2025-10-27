/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let prev = 0, ans = 0;
    for(const row of bank){
        let f = 0;
        for(const c of row){
            if(c === '1') f++;
        }
        if(f){
            ans += prev * f;
            prev = f;
        }
    }
    return ans;
};