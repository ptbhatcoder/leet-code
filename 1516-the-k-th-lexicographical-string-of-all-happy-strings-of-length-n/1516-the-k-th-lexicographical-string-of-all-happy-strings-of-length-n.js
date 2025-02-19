const TEMPLATE = 'abc';
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    const current = Array.from({ length: n }, (_, i) => i % 2 ? 'b' : 'a');
    let turn = 0;
    let result = '';
    const update = (pos) => {
        if(pos >= n){
            turn++;
            if(turn === k){
                result = current.join('');
            }
            return;
        }
        for(const c of 'abc'){
            if(pos > 0 && current[pos - 1] === c) continue;
            const cur = current[pos];
            current[pos] = c;
            update(pos+1);
            current[pos] = cur;
        }
        return;
    }
    update(0);
    return result;
};