const getShortestDists = (node, edges) => {
    const dist = edges.map(_ => -1);
    let cur = node;
    let d = 0;
    while(cur !== -1 && dist[cur] === -1){
        dist[cur] = d;
        d++;
        cur = edges[cur];
    }
    for(let i = 0;i < dist.length; i++){
        if(dist[i] < 0) dist[i] = Infinity;
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
    const d1 = getShortestDists(node1, edges);
    const d2 = getShortestDists(node2, edges);
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