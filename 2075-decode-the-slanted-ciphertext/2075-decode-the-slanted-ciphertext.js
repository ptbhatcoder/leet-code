/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(text, m) {
    if(m === 1) return text;
    const n = text.length / m;

    const ans = [];
    for(let c = 0; c < n; c++){
        let i = 0, j = c;
        while(i < m && j < n){
            ans.push(text[i * n + j]);
            i++;
            j++;
        }
    }

    let last = ans.length - 1;
    while(last >= 0 && ans[last] === ' ') last--;

    ans.length = last + 1;
    
    return ans.join('');
};