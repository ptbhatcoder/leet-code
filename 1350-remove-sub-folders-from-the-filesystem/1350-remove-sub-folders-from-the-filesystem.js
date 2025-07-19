/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    const trie = { indices: [], sub: {} };
    const insert = (path, key, index = 0, lookup = trie) => {
        if(index >= path.length){
            lookup.indices.push(key);
            return;
        };
        const cur = path[index];
        if(!lookup.sub[cur]) {
            lookup.sub[cur] = {
                indices: [],
                sub: {}
            }
        }
        const next = lookup.sub[cur];
        insert(path, key, index + 1, next);
    }
    for(let i = 0; i < folder.length; i++){
        const path = folder[i];
        insert(path.split('/').filter(Boolean), i);
    }

    const result = [];
    const trieFilter = (lookup) => {
        if(lookup.indices.length > 0){
            result.push(...lookup.indices);
            return;
        }
       
        for(const key of Object.keys(lookup.sub)){
            if(lookup.sub[key]) trieFilter(lookup.sub[key]);
        }
    }

    trieFilter(trie);
    return result.map(i => folder[i]);
};