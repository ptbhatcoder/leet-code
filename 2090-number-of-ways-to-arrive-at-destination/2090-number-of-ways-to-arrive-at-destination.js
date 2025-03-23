/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

var countPaths = function(n, roads) {

    if (n == 1) return 1;

    let adj = Array(n);
    for (let i = 0; i < n; i++) adj[i] = [];

    for (let road of roads) {
        let [a, b, d] = road;
        adj[a].push({to: b, d: d});
        adj[b].push({to: a, d: d});
    }

    let memoD = Array(n).fill(Number.MAX_VALUE);
    memoD[0] = 0;
    let memoCtr = Array(n).fill(0);
    memoCtr[0] = 1;

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n - 1; j++) {
            if (memoCtr[j] > 0) {
                for (let road of adj[j]) {
                    if (memoD[road.to] > memoD[j] + road.d) {
                        memoD[road.to] = memoD[j] + road.d;
                        memoCtr[road.to] = 0;
                        memoCtr[road.to] = memoCtr[j];
                        //console.log(" ", j, ">>", road.to, "=", memoCtr2[road.to]);
                    } else if (memoD[road.to] == memoD[j] + road.d) {
                        memoCtr[road.to] = (memoCtr[j] + memoCtr[road.to]) % 1000000007;
                        //console.log(" ", j, ">", road.to, "=", memoCtr2[road.to]);
                    }
                }
                memoCtr[j] = 0;
            }
        }

        //console.log("----- memoCtr", memoCtr.join(","), "dist", memoD.join(","));
    }
    
    return memoCtr[n - 1]; // % 1000000007;
}

/*
Version récursive

let N, adj, number, minDist;

var countPaths = function(n, roads) {
    N = n;
    adj = Array(n);
    for (let i = 0; i < n; i++) adj[i] = [];
    number = 0;
    minDist = Number.MAX_VALUE;

    for (let road of roads) {
        let [a, b, d] = road;
        adj[a].push({to: b, d: d});
        adj[b].push({to: a, d: d});
    }
    
    for (let i = 0; i < n; i++) {
        adj[i].sort((a, b) => a.d - b.d);
        //console.log("adj[", i, "]=", adj[i]);
    }

    let visited = Array(n).fill(false);
    recurse(0, visited, 0);
    return number % 1000000007;
};


function recurse(currNode, visited, duration) {
    if (currNode == N -1) {
        if (duration == minDist) number++;
        else if (duration < minDist) {
            minDist = duration;
            number = 1;
        }
        return;
    }

    for (let road of adj[currNode]) {
        if (!visited[road.to] && road.d + duration <= minDist) {
            visited[road.to] = true;
            recurse(road.to, visited, duration + road.d);
            visited[road.to] = false;
        }
    }

}
*/