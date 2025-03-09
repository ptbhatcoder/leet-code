/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    const n = colors.length;
    let start = 0, next = (start + 1) % n, c = 0;
    while(colors[start] !== colors[next] && c < n){
        start = next;
        next = (next + 1) % n;
        c++;
    }
    if(c === n) return n; // no failing groups
    let groups = 0;
    let cur = 0;
    const update = () => {
            if(cur >= k){
                groups += (1 + cur - k);
            }
    }
    for(let i = next, j = (i + 1) % n; j !== next; i = j, j = (j + 1) % n){
        if(colors[i] === colors[j]){
            update();
            cur = 0;
        } else cur = cur <= 0 ? 2 : cur + 1;
    }
    update();
    return groups;
};