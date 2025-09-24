const divide = (num, den) => {
    const rem = num % den;
    const div = (num - rem) / den;
    return [div, rem];
}
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator === 0) return '0';
    const result = [];
    if((numerator > 0) ^ (denominator > 0)) result.push('-');
    numerator = Math.abs(numerator);
    denominator =  Math.abs(denominator);
    const [d, r] = divide(numerator, denominator);
    result.push(d);
    if(r > 0){
        result.push('.');
        let num = r;
        const den = denominator;
        const pos = {};
        while(num > 0){
            pos[num] = result.length;
            num *= 10;
            const [top, rem] = divide(num, den);
            result.push(top);
            num = rem;
            if(rem in pos){
                const ind = pos[rem];
                result.splice(ind, 0, '(');
                result.push(')');
                break;
            } else pos[rem] = result.length;
        }
    }
    return result.join('');
};