const KEYS = 'AEIOUaeiou';
const BASE_F = Object.fromEntries([...KEYS].map(k => [k, 0]));
/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const f = {...BASE_F};
    const ans = [...s];
    for(const c of s){
        if(c in f){
            f[c]++;
        }
    }
    const n = ans.length;
    let curVowelPos = 0;
    for(let i = 0; i < n; i++){
        const c = ans[i];
        if(c in f){
            while(curVowelPos < 10 && f[KEYS[curVowelPos]] <= 0) curVowelPos++;
            if(curVowelPos < 10 && f[KEYS[curVowelPos]] > 0){
                ans[i] = KEYS[curVowelPos];
                f[ans[i]]--;
            }
        }
    }
    return ans.join('');
};