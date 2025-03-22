/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    const adj = Array.from({ length:n }, _ => []);
    for(const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    const visited = new Set;
    const getEdgeCount = start => {
        const dfs = node => {
            if(visited.has(node)) return 0;
            
            visited.add(node);
            
            const neighbours = adj[node];
            
            let count = neighbours.length;
            for(const next of neighbours) count+= dfs(next);

            return count;
        }
        return dfs(start) / 2;
    }

    let res = 0;
    for(let i = 0; i < n; i++){
        if(visited.has(i)) continue;
        const before = visited.size;
        const nEdges = getEdgeCount(i);
        const after = visited.size;
        const nVertices = after - before;
        const isComplete = nEdges === ((nVertices * (nVertices - 1)) / 2);
        if(isComplete) res++;
    }
    return res;
};