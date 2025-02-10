/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    const st = [];
    for(let i = 0; i < s.length; i++){
        if(isNaN(+s[i])){
            st.push(i);
        } else if(st.length > 0) st.pop();
    }
    return st.map(ind => s[ind]).join('');
};