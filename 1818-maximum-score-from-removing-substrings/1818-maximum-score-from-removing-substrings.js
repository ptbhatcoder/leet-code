/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let ans = 0;
    let st = [];
    const candidates = x > y ? [['ab', x], ['ba', y]] : [['ba', y], ['ab', x]];
    let cur = s;
    for(const [candidate, score] of candidates){
        for(const c of cur){
            st.push(c);
            while(st.length > 1 && st.at(-2) === candidate[0] && st.at(-1) === candidate[1]){
                st.pop();
                st.pop();
                ans += score;
            }
        }
        cur = st.join('');
        st = [];
    }
    return ans;
};