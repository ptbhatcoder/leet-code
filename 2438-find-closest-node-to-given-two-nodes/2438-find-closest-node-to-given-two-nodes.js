const getShortestDists = (node, g) => {
    const dist = g.map(_ => Infinity);
    dist[node] = 0;
    let q = [node];
    const visited = new Set;
    while(q.length > 0){
        const next = [];
        for(const cur of q){
            if(visited.has(cur)) continue;
            visited.add(cur);
            for(const neighbour of g[cur]){
                if(!visited.has(neighbour)){
                    dist[neighbour] = Math.min(dist[neighbour], dist[cur] + 1);
                    next.push(neighbour);
                }
            }
        }
        q = next;
    }
    return dist;
}
/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    const n = edges.length;
    const g = Array.from({ length: n }, _ => []);
    for(let s = 0; s < n;  s++){
        const e = edges[s];
        if(e > -1) g[s].push(e);
    }
    const d1 = getShortestDists(node1, g);
    const d2 = getShortestDists(node2, g);
    let res = -1, smallest = Infinity;
    for(let i = 0; i < n; i++){
        const max = Math.max(d1[i], d2[i]);
        if(max < smallest){
            smallest = max;
            res = i;
        }
    }
    return res;
};