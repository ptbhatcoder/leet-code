const dfs = (g, i, p, nodeParity, isEven = true) => {
    let nTarget = isEven ? 1 : 0;
    nodeParity[i] = isEven;
    for(const next of g[i]){
        if(next !== p){
            nTarget += dfs(g, next, i, nodeParity, !isEven);
        }
    }
    return nTarget;
}

const buildGraph = edges => {
    const n = 1 + edges.length;
    const res = Array.from({ length:n }, _ => []);
    for(const [s, e] of edges){
        res[s].push(e);
        res[e].push(s);
    }
    return res;
}

/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2) {
    const g1 = buildGraph(edges1);
    const g2 = buildGraph(edges2);
    const n = g1.length;
    const m = g2.length;

    const parity1 = new Array(n).fill(false);
    const parity2 = new Array(m).fill(false);
    const even1 = dfs(g1, 0, -1, parity1);
    const odd1 = n - even1;
    const even2 = dfs(g2, 0, -1, parity2);
    const odd2 =  m - even2;
    return g1.map((_, i) => Math.max(even2, odd2) + (parity1[i] ? even1 : odd1 ));
};