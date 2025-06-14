const replaceNotMatch = (num, t) => {
    const v = [...String(num)];
    const c = String(t);
    let cand = '';
    for(const cx of v){
        if(cx !== c){
            cand = cx;
            break;
        }
    }
    for(let i = 0; i < v.length; i++){
        if(v[i] === cand) v[i] = c;
    }
    return Number(v.join(''));
}
/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    const max = replaceNotMatch(num, 9);
    const min = replaceNotMatch(num, 0);
    return max - min;
};