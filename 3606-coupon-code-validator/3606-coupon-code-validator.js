const BUSINESS_LINES = ["electronics", "grocery", "pharmacy", "restaurant"];
const isCodeValid = code => /^[a-zA-Z0-9_]+$/.test(code);
const isValidBusinessLine = line => BUSINESS_LINES.includes(line);
/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    const result = [];
    const n = code.length;
    for(let i = 0; i < n; i++){
        if(isActive[i] && isCodeValid(code[i]) && isValidBusinessLine(businessLine[i])) result.push(i);
    }

    return result.sort((i1, i2) => {
        const b1 = businessLine[i1];
        const b2 = businessLine[i2];
        return (BUSINESS_LINES.indexOf(b1) - BUSINESS_LINES.indexOf(b2)) || (code[i1] < code[i2] ? -1 : 1);
    }).map(i => code[i]);
};