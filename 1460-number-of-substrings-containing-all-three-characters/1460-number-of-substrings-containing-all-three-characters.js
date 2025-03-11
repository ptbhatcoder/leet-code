/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let a = 0, b = 0, c = 0;
    const n = s.length;
    let res = 0, j = 0;
    for(let i = 0; i < n; i++){
        switch(s[i]){
            case 'a':
                a++;
                break;
            case 'b':
                b++;
                break;
            case 'c':
                c++;
                break;
            default:
                break;
            
        }
        while(a > 0 && b > 0 && c > 0){
            switch(s[j]){
                case 'a':
                    a--;
                    break;
                case 'b':
                    b--;
                    break;
                case 'c':
                    c--;
                    break;
                default:
                    break;
            }
            j++;
            res += (n - i)
        }
    }
    return res;
};