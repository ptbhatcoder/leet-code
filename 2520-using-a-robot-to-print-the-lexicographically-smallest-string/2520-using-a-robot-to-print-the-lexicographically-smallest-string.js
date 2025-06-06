const TEMPLATE = {};
for(const c of 'abcdefghijklmnopqrstuvwxyz') TEMPLATE[c] = 0;
/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
    const f = {...TEMPLATE};
    for(const c of s) f[c]++;
    const smallest = () => {
        for(const c of 'abcdefghijklmnopqrstuvwxyz') if(f[c] > 0) return c;
        return 'a';
    }

    const st = [];
    const res = [];
    for(const c of s){
        st.push(c);
        f[c]--;
        while(st.length > 0 && st.at(-1) <= smallest()){
            res.push(st.pop());
        }
    }
    while(st.length > 0) res.push(st.pop());
    return res.join('');
};