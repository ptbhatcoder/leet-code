/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const f = {};
    for(const c of tiles){
        if(!f[c]) f[c] = 0;
        f[c]++;
    }
    const getCount = () => {
        let count = 0;
        for(const c in f){
            if(f[c] > 0){
                count++;
                f[c]--;
                count += getCount();
                f[c]++;
            }
        }
        return count;
    }
    return getCount();
};