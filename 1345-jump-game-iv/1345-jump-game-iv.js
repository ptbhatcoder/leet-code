


/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
     const map = arr.reduce((map, v,i) => {
       if(!map[v]){
           map[v] = [];
       }
       map[v].push(i);
       return map;
    },{});
    
    let q = [0];
    let step = 0;
    const visited = arr.map(i => false);
    const n = arr.length;
    while(q.length){
        const next = [];
        for(const i of q){
            if(i === n-1) return step;
            if(map[arr[i]]){
                for(const neighbour of map[arr[i]]){
                    if(visited[neighbour]) continue;
                    visited[neighbour] = true;
                    next.push(neighbour);
                }
                delete map[arr[i]];
            }
            
            if(i+1 < n && !visited[i+1]){
                visited[i+1] = true;
                next.push(i+1);
            }
            
            if(i - 1 >= 0 && !visited[i-1]){
                visited[i-1] = true;
                next.push(i-1);
            }
        }
        q = next;
        step++;
    }
    
    return 0;
};