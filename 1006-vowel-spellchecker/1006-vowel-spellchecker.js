const getMatch = (needle, haystack, filter) => {
    for(const match of haystack){
        if(filter(needle, match)) return match;
    }
    return '';
}

/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    const haystack = new Set;
    const small = {}, patterns = {};
    for(const word of wordlist){
        haystack.add(word);
        const lower = word.toLowerCase();
        if(!small[lower]) small[lower] = word;
        const pat = lower.replace(/[aeiou]/gi, '*');
        if(!patterns[pat]) patterns[pat] = word;
    }
    return queries.map(query => {
        if(haystack.has(query)) return query;
        const lower = query.toLowerCase();
        if(small[lower]) return small[lower];
        const pat = lower.replace(/[aeiou]/gi, '*');
        if(patterns[pat]) return patterns[pat];
        return '';
    });
};