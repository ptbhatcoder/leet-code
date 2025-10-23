/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    let st = [...s].map(p => +p);
    while(st.length > 2){
        const next = [];
        while(st.length > 1){
            const r = st.pop();
            const l = st.at(-1);
            const val = (r + l) % 10;
            next.push(val);
        }
        next.reverse()
        st = next;
    };

    return st[0] === st[1];
};