/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    const n = dominoes.length;
    const balance = Array.from({ length: n }, _ => 0);
    
    let runner = 0;
    for(let i = 0; i < n; i++){
        if(dominoes[i] === 'R'){
            runner = n;
        } else if(dominoes[i] === 'L'){
            runner = 0;
        } else if(runner > 0) runner--;
        balance[i] += runner;
    }
    
    runner = 0;
    for(let i = n - 1; i >= 0; i--){
        if(dominoes[i] === 'L') runner = -n;
        else if(dominoes[i] === 'R') runner = 0;
        else if(runner < 0) runner++;
        balance[i]+= runner;
    }
    
    return balance.map(i => i < 0 ? 'L' : i === 0 ? '.' : 'R').join('');
};