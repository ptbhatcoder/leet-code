/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    if(n < 2) return 1;
    const g = Array.from({ length:n }, _ => []);
    const degree = new Array(n).fill(0);

    for(const [u, v] of edges){
        g[u].push(v);
        g[v].push(u);
        degree[u]++;
        degree[v]++;
    }

    const vals = [...values];
    let q = [];
    for(let node = 0; node < n; node++) if(degree[node] === 1) q.push(node);
    
    let ans = 0;
    while(q.length){
        const next = [];
        for(const cur of q){
            degree[cur]--;
            let rem = 0;

            if(vals[cur] % k === 0) ans++;
            else rem = vals[cur];

            for(const neighbour of g[cur]){
                if(degree[neighbour]){
                    degree[neighbour]--;
                    vals[neighbour] += rem;
                    if(degree[neighbour] === 1) next.push(neighbour);
                }
            }
        }
        q = next;
    }
    return ans;
};