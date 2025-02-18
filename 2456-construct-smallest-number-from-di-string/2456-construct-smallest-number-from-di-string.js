const inc = {
    'I': 1,
    'D': -1
}

const hasSameSign = (a, b) => (a >= 0 && b  >= 0) || ( a<= 0 && b <= 0); 

/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    const n = pattern.length + 1;
    const result = new Array(n).fill(0);
    const visited = new Set;
    const update = pos => {
        if(pos >= n) return true;
        if(result[pos] !== 0) return update(pos + 1);
        for(let val = 1; val < 10; val++){
            if(visited.has(val)) continue;
            if(pos === 0 || (pos > 0 && hasSameSign(val - result[pos - 1], inc[pattern[pos - 1]]))){
                visited.add(val);
                result[pos] = val;
                if(update(pos+1)) return true;
                result[pos] = 0;
                visited.delete(val);
            } 
        }
        return false;
    };
    
    return update(0) ? result.join('') : '';
};