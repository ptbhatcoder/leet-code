const findNodesAtDist = (graph, node, dist, parent = -1) => {
    if(dist < 0) return 0;
    let count = 1;
    for(const next of graph[node]){
        if(next !== parent) count+=findNodesAtDist(graph, next, dist-1, node);
    }
    return count;
}
/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2, k) {
    const n = edges1.length + 1;
    const m = edges2.length + 1;
    const g1 = Array.from({ length: n }, _ => []);
    const g2 = Array.from({ length: m }, _ => []);

    for(const [s, e] of edges1) {
        g1[s].push(e);
        g1[e].push(s);
    }

    for(const [s, e] of edges2){
        g2[s].push(e);
        g2[e].push(s);
    }

    const res = g1.map(_ => 0);
    for(let i = 0; i < n; i++) res[i] += findNodesAtDist(g1, i, k);
    let max = 0;
    for(let i = 0; i < m; i++) max = Math.max(max, findNodesAtDist(g2, i, k-1));
    for(let i = 0; i < n; i++) res[i] += max;
    return res;
};