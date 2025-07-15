
const RULE_BOOK = {
    1: word => word.length > 2,
    2: word => /^[a-z0-9]*$/i.test(word),
    4: word => /[aeiou]+/i.test(word),
    8: word => /[bcdfghjklmnpqrstvwxyz]+/i.test(word),
};
/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    let score = 0;
    let rules = 0;
    for(const rid in RULE_BOOK){
        const rule = RULE_BOOK[rid];
        if(rule(word)) score |= +(rid);
        rules++;
    }

    return score === ((2**rules) - 1);
};