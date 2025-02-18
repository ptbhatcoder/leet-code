const inc = {
    'I': 1,
    'D': -1
}

const hasSameSign = (a, b) => (a >= 0 && b  >= 0) || ( a<= 0 && b <= 0); 

/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    const p = pattern.length;
    const n = p + 1;
    const result = Array.from({ length: n }, (_, i) => i + 1);
    const reverse = (s, e) => {
        while(s < e){
            [result[s], result[e]] = [result[e], result[s]];
            s++;
            e--;
        }
    }
    let last = -1;
    for(let i = 0; i < p; i++){
        if(last === -1 && pattern[i] === 'D') last = i;
        if(i === 0 || pattern[i] === pattern[i-1]) continue;
        if(pattern[i] === 'I') {
            reverse(last, i);
            last = -1;
        }
    }
    if(last !== -1){
        reverse(last, p);
    }
    return result.join('');
};