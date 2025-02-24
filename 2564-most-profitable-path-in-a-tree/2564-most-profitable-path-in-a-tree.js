/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function(edges, bob, amount) {
    const n = amount.length;
    const adj = amount.map(_ => []);
    for(const [u, v] of edges){
        adj[u].push(v);
        adj[v].push(u);
    }
    const visited = new Array(n).fill(false);
    const visit = (node, mileage = 0) => {
        visited[node] = true;

        let distBob = node === bob ? 0 : n;
        let collected = -Infinity;
        for(const next of adj[node]){
            if(visited[next]) continue;
            const [soFar, forBob] = visit(next, 1 + mileage);
            collected = Math.max(soFar, collected);
            distBob = Math.min(distBob, forBob);
        }
        let score = collected > -Infinity ? collected : 0;
        if(distBob === mileage) score += (amount[node] / 2);
        else if(distBob > mileage) score += amount[node];
        return [score, 1 + distBob];
    }
    return visit(0, 0)[0];
};