/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function(s, a, b) {
    const seen = new Set;
    let min = s;
    let q = [s];
    while(q.length){
        const next = [];
        for(const cur of q){
            if(cur < min) min = cur;
            const arr = [...cur];
            for(let i =  1; i < arr.length; i+= 2){
                arr[i] = ((+arr[i] + a) % 10) + '';
            }
            const added = arr.join('');
            if(!seen.has(added)){
                seen.add(added);
                next.push(added);
            }
            const rotated = cur.slice(-b) + cur.slice(0, -b);
            if(!seen.has(rotated)){
                seen.add(rotated);
                next.push(rotated);
            }
        }
        q = next;
    }
    return min;
};