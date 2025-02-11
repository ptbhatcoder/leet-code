/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    const st = new Array(s.length).fill('');
    let top = -1;
    for(const c of s){
        st[++top] = c;
        let cur = top;
        let j = part.length - 1;
        while(cur >= 0 && j >= 0 && st[cur] === part[j]){
            cur--;
            j--;
        }
        if(j < 0){
            top = cur;
        }
    }
    return st.slice(0, 1 + top).join('');
};