const firstMismatch = (val, mismatch, start = 0) => {
    const n = val.length;
    for(let i = start; i < n; i++){
        if(val[i] !== mismatch) return val[i];
    }
    return val[start];
}


/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    const hay = String(num);
    const n = hay.length;
    let t9 = '9';
    for(let i = 0; i < n && t9 === '9'; i++){
        const c = hay[i];
        if(c !== '9') t9 = c;
    }

    const max = t9 === '9' ?  num : +hay.replaceAll(t9, '9');
    let min = num;
    if(hay[0] > '1'){
        min = +hay.replaceAll(hay[0], '1');
    } else {
        let i = 0;
        while(i < n && ['0', '1'].includes(hay[i])) i++;
        if(i < n) min = +hay.replaceAll(hay[i], '0');
    }
   
    // total
    return max - min;
};