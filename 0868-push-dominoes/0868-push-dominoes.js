/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    const n = dominoes.length;
    const chars = {};
    const indices = {};
    
    let nSymbols = 1;
    chars[0] = 'L';
    indices[0] = -1;
    for(let i = 0; i < n; i++){
        if(dominoes[i] !== '.'){
            chars[nSymbols] = dominoes[i];
            indices[nSymbols] = i;
            nSymbols++;
        }
    }
    chars[nSymbols] = 'R';
    indices[nSymbols++] = n;
    const ans = [...dominoes];
    for(let ind = 0; ind < nSymbols - 1; ind++){
        const i = indices[ind], j = indices[ind+1];
        const x = chars[ind], y = chars[ind+1];
       
        if(x === y){
           
            for(let k = i + 1; k < j; k++){
                ans[k] = x;
            }
        } else if(x > y){
            for(let k = i + 1; k < j ; k++){
                if(k - i < j - k){
                    ans[k] = x;
                } else if(k - i > j - k){
                    ans[k] = y;
                }  else ans[k] = '.'
            }
        }
    }
    
    return ans.join('');
};